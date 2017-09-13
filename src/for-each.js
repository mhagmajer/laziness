/* @flow */

/**
 * Analogical to [Array.prototype.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
 */
function forEach<T>(iter: Iterable<T>, callback: (T) => void): void {
  for (const currentValue of iter) {
    callback(currentValue);
  }
}

module.exports = forEach;
