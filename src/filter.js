/* @flow */

/**
 * Analogical to [Array.prototype.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
 */
function* filter<T>(iter: Iterable<T>, callback: (T) => boolean): Generator<T, void, void> {
  for (const value of iter) {
    if (callback(value)) {
      yield value;
    }
  }
}

module.exports = filter;
