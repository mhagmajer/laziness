/* @flow */

/**
 * Analogical to [Array.prototype.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
 */
function* map<T, U>(iter: Iterable<T>, callback: (T) => U): Generator<U, void, void> {
  for (const currentValue of iter) {
    yield callback(currentValue);
  }
}

module.exports = map;
