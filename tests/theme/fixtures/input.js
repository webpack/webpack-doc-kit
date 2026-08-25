/* eslint-disable */

/**
 * Class demonstrating Webpack as a parent class.
 */
export class WebpackTest {}

/**
 * Interface demonstrating Webpack as an interface.
 * @interface
 */
export class WebpackInterface {}

/**
 * Class demonstrating overload signatures.
 */
export class OverloadTest {
  /**
   * First overload signature.
   * @overload
   * @param {string} name A simple string parameter
   * @param {number} count A simple number parameter
   * @returns {void}
   */
  /**
   * Second overload signature.
   * @overload
   * @param {boolean} isEnabled A simple boolean parameter
   * @returns {string}
   */
  /**
   * Third overload signature.
   * @overload
   * @param {number} id A simple string parameter
   * @param {boolean} isEnabled  A simple boolean parameter
   * @returns {void}
   */
  overloadMethod(id, isEnabled) {}
}

/**
 * Class demonstrating stability for deprecated, experimental, and legacy APIs.
 */
export class StabilityTest {
  /**
   * @deprecated Use the new API instead.
   */
  deprecatedMethod() {}

  /**
   * @experimental
   */
  experimentalMethod() {}

  /**
   * @legacy This is a legacy Webpack v4 API.
   */
  legacyMethod() {}
}

/**
 * Class demonstrating the formatting of JSDoc example blocks.
 */
export class ExamplesTest {
  /**
   * A sample method for the ExamplesTest class.
   * @param {string} name A simple string parameter
   * @returns {void}
   * @example
   * exampleMethod('example-1');
   *
   * @example
   * ```ts
   * exampleMethod('example-2');
   * ```
   */
  exampleMethod(name) {}
}

/**
 * Class demonstrating properties and typed lists.
 */
export class TypedListTest extends WebpackTest {
  /**
   * A sample property for the TypedListTest class.
   * @type {string}
   */
  typedListProperty;

  /**
   * A sample method for the TypedListTest class.
   * @param {string} name The name of the instance
   * @param {number} count The count of items
   * @returns {boolean} A boolean indicating success
   */
  typedListMethod(name, count) {}
}

/**
 * Complex array type.
 * @typedef {Array<{ name: string, age: number }>} ComplexArrayType
 */

/**
 * Simple array type.
 * @typedef {Array<string>} SimpleArrayType
 */

/**
 * Complex union type.
 * @typedef {string | { advanced: boolean, timeout: number }} ComplexUnionType
 */

/**
 * Simple union type.
 * @typedef {string | number} SimpleUnionType
 */

/**
 * Complex intersection type.
 * @typedef {{ id: string } & { metadata: object }} ComplexIntersectionType
 */

/**
 * Simple intersection type.
 * @typedef {number & string} SimpleIntersectionType
 */

/**
 * A standalone constant demonstrating declarationTitle formatting and variable rendering.
 * @type {string}
 */
export const CONSTANT_AND_DECLARATION_TITLE_TEST = 'pass me';

/**
 * Class demonstrating indexSignature rendering.
 */
export class IndexSignatureTest {
  /**
   * An object property to trigger indexSignature.
   * @type {{ [key: string]: number }}
   */
  dictionaryProperty;
}

/**
 * Class demonstrating Implements and Constructor grouping.
 * @implements {WebpackInterface}
 */
export class MemberGroupsTest {
  /**
   * The constructor for MemberGroupsTest.
   * @param {any} data
   */
  constructor(data) {}

  /**
   * A categorized method.
   * @category Lifecycle
   */
  init() {}
}

/**
 * A simple enum demonstrating enum rendering.
 * @enum {number}
 */
export const EnumTest = {
  /** The first option */
  ONE: 1,
  /** The second option */
  TWO: 2,
};

/**
 * A standalone function demonstrating generics outside a class.
 * @template T
 * @param {T} value The input value
 * @returns {T} The same value
 */
export function standAloneWithGenericsTest(value) {
  return value;
}

/**
 * Class demonstrating Getters and Setters (Accessors).
 */
export class AccessorTest {
  /**
   * Gets the current configuration name.
   * @returns {string}
   */
  get configName() {
    return '';
  }

  /**
   * Sets the configuration name.
   * @param {string} val The new name
   */
  set configName(val) {}
}

/**
 * A namespace demonstrating nested members.
 * @namespace
 */
export const WebpackUtils = {
  /**
   * Merges two configurations.
   * @param {object} a First config
   * @param {object} b Second config
   * @returns {object} Merged config
   */
  merge(a, b) {
    return Object.assign({}, a, b);
  },
};
