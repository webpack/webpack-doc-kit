# cli

## `createColors`

> **createColors**: {(__namedParameters?: ColorsOptions) => Colors}

* `__namedParameters` {ColorsOptions}
* Returns: {Colors}

***

## `getArguments`

> **getArguments**: {(schema?: JSONSchema4|{ absolutePath: boolean; cli: { description?: string; exclude?: boolean; helper?: boolean; negatedDescription?: string; resetDescription?: string }; instanceof: string }|JSONSchema6|{ absolutePath: boolean; cli: { description?: string; exclude?: boolean; helper?: boolean; negatedDescription?: string; resetDescription?: string }; instanceof: string }|JSONSchema7|{ absolutePath: boolean; cli: { description?: string; exclude?: boolean; helper?: boolean; negatedDescription?: string; resetDescription?: string }; instanceof: string }) => Flags}

* `schema` {JSONSchema4|{ absolutePath: boolean; cli: { description?: string; exclude?: boolean; helper?: boolean; negatedDescription?: string; resetDescription?: string }; instanceof: string }|JSONSchema6|{ absolutePath: boolean; cli: { description?: string; exclude?: boolean; helper?: boolean; negatedDescription?: string; resetDescription?: string }; instanceof: string }|JSONSchema7|{ absolutePath: boolean; cli: { description?: string; exclude?: boolean; helper?: boolean; negatedDescription?: string; resetDescription?: string }; instanceof: string }}
* Returns: {Flags}

***

## `isColorSupported`

> **isColorSupported**: {() => boolean}

* Returns: {boolean}

***

## `processArguments`

> **processArguments**: {(args: Flags, config: ObjectConfiguration, values: Values) => null|Problem[]}

* `args` {Flags}
* `config` {ObjectConfiguration}
* `values` {Values}
* Returns: {null|Problem[]}
