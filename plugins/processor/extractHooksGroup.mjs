import {
  ReflectionKind,
  ReflectionGroup,
  ParameterReflection,
  SignatureReflection,
  IntrinsicType,
} from 'typedoc';

function extractHooks(type) {
  let hooks = [];
  if (!type) return hooks;

  type.visit({
    reflection: t => {
      if (t.declaration?.children) {
        hooks.push(...t.declaration.children);
      }
    },
    reference: t => {
      if (t.name === 'Readonly' && t.typeArguments?.length) {
        hooks.push(...extractHooks(t.typeArguments[0]));
      } else if (t.reflection?.children) {
        hooks.push(...t.reflection.children);
      }
    },
    intersection: t => {
      if (t.types) {
        t.types.forEach(innerType => {
          hooks.push(...extractHooks(innerType));
        });
      }
    },
  });

  return hooks;
}

export function extractHooksGroup(reflection) {
  if (!reflection.groups) return;

  const propsGroup = reflection.groups.find(g => g.title === 'Properties');
  if (!propsGroup) return;

  const hooksIndex = propsGroup.children.findIndex(p => p.name === 'hooks');
  if (hooksIndex === -1) return;

  const hooksProp = propsGroup.children[hooksIndex];

  const individualHooks = extractHooks(hooksProp.type);

  if (individualHooks.length > 0) {
    propsGroup.children.splice(hooksIndex, 1);

    individualHooks.forEach(hook => {
      hook.kind = ReflectionKind.Method;
      const sig = new SignatureReflection(
        hook.name,
        ReflectionKind.CallSignature,
        hook
      );

      if (hook.type?.type === 'reference' && hook.type.typeArguments?.length) {
        const argsTuple = hook.type.typeArguments[0];
        if (argsTuple.type === 'tuple' && argsTuple.elements) {
          sig.parameters = argsTuple.elements.map((el, i) => {
            const type = el.type === 'named-tuple-member' ? el.element : el;
            let name = el.type === 'named-tuple-member' ? el.name : undefined;
            if (!name) {
              if (type.type === 'reference' && type.name) {
                name = type.name.charAt(0).toLowerCase() + type.name.slice(1);
              } else if (type.type === 'intrinsic') {
                name = type.name;
              } else {
                name = `arg${i}`;
              }
            }
            const param = new ParameterReflection(
              name,
              ReflectionKind.Parameter,
              sig
            );
            param.type = type;
            return param;
          });
        }

        const hookName = hook.type.name;
        if (hookName.includes('Bail') && hook.type.typeArguments.length > 1) {
          sig.type = hook.type.typeArguments[1];
        } else if (
          hookName.includes('Waterfall') &&
          argsTuple.type === 'tuple' &&
          argsTuple.elements?.length
        ) {
          const el = argsTuple.elements[0];
          sig.type = el.type === 'named-tuple-member' ? el.element : el;
        } else {
          sig.type = new IntrinsicType('void');
        }
      }

      hook.signatures = [sig];
    });

    const hooksGroup = new ReflectionGroup('Hooks', ReflectionKind.Method);
    hooksGroup.children = individualHooks;

    const methodsIndex = reflection.groups.findIndex(
      g => g.title === 'Methods'
    );
    if (methodsIndex !== -1) {
      reflection.groups.splice(methodsIndex + 1, 0, hooksGroup);
    } else {
      reflection.groups.push(hooksGroup);
    }
  }
}
