# ModuleFilenameHelpers

## `ABSOLUTE_RESOURCE_PATH`

> **ABSOLUTE\_RESOURCE\_PATH**: {string}

***

## `ALL_LOADERS`

> **ALL\_LOADERS**: {string}

***

## `ALL_LOADERS_RESOURCE`

> **ALL\_LOADERS\_RESOURCE**: {string}

***

## `createFilename`

> **createFilename**: {(module: string|Module, options: { moduleFilenameTemplate?: string|(context: ModuleFilenameTemplateContext) => string; namespace?: string }, __namedParameters: { chunkGraph: ChunkGraph; hashFunction?: string|Hash; requestShortener: RequestShortener }) => string}

* `module` {string|Module}
* `options` {{ moduleFilenameTemplate?: string|(context: ModuleFilenameTemplateContext) => string; namespace?: string }}
* `__namedParameters` {{ chunkGraph: ChunkGraph; hashFunction?: string|Hash; requestShortener: RequestShortener }}
* Returns: {string}

***

## `HASH`

> **HASH**: {string}

***

## `ID`

> **ID**: {string}

***

## `LOADERS`

> **LOADERS**: {string}

***

## `LOADERS_RESOURCE`

> **LOADERS\_RESOURCE**: {string}

***

## `matchObject`

> **matchObject**: {(obj: MatchObject, str: string) => boolean}

* `obj` {MatchObject}
* `str` {string}
* Returns: {boolean}

***

## `matchPart`

> **matchPart**: {(str: string, test: Matcher) => boolean}

* `str` {string}
* `test` {Matcher}
* Returns: {boolean}

***

## `NAMESPACE`

> **NAMESPACE**: {string}

***

## `QUERY`

> **QUERY**: {string}

***

## `REGEXP_ABSOLUTE_RESOURCE_PATH`

> **REGEXP\_ABSOLUTE\_RESOURCE\_PATH**: {RegExp}

***

## `REGEXP_ALL_LOADERS`

> **REGEXP\_ALL\_LOADERS**: {RegExp}

***

## `REGEXP_ALL_LOADERS_RESOURCE`

> **REGEXP\_ALL\_LOADERS\_RESOURCE**: {RegExp}

***

## `REGEXP_HASH`

> **REGEXP\_HASH**: {RegExp}

***

## `REGEXP_ID`

> **REGEXP\_ID**: {RegExp}

***

## `REGEXP_LOADERS`

> **REGEXP\_LOADERS**: {RegExp}

***

## `REGEXP_LOADERS_RESOURCE`

> **REGEXP\_LOADERS\_RESOURCE**: {RegExp}

***

## `REGEXP_NAMESPACE`

> **REGEXP\_NAMESPACE**: {RegExp}

***

## `REGEXP_QUERY`

> **REGEXP\_QUERY**: {RegExp}

***

## `REGEXP_RESOURCE`

> **REGEXP\_RESOURCE**: {RegExp}

***

## `REGEXP_RESOURCE_PATH`

> **REGEXP\_RESOURCE\_PATH**: {RegExp}

***

## `replaceDuplicates`

> **replaceDuplicates**: {(array: T[], fn: (duplicateItem: T, duplicateItemIndex: number, numberOfTimesReplaced: number) => T, comparator?: (firstElement: T, nextElement: T) => 0|1|-1) => T[]}

#### T

`T`
* `array` {T[]}
* `fn` {(duplicateItem: T, duplicateItemIndex: number, numberOfTimesReplaced: number) => T}
* `comparator` {(firstElement: T, nextElement: T) => 0|1|-1}
* Returns: {T[]}

***

## `RESOURCE`

> **RESOURCE**: {string}

***

## `RESOURCE_PATH`

> **RESOURCE\_PATH**: {string}
