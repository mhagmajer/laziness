/* @flow */

/**
 * Analogical to [Array.prototype.slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
 */
function* slice<T>(iter: Iterable<T>, begin: number, end?: number): Generator<T, void, void> {
  let i = 0;
  for (const x of iter) {
    if (i === end) {
      break;
    }

    if (i >= begin) {
      yield x;
    }

    i += 1;
  }
}

module.exports = slice;
