/* eslint-disable */

/**
 * Class demonstrating Webpack as a parent class.
 */
export class WebpackTest {}

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
