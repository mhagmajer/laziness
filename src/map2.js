/* @flow */

/**
 * Generates values of the function when applied arguments from each of the iterables. Stops when
 * the shortest iterable is exhausted.
 * @example
 * map2((x, y) => x + y, range(1, 4), range(10, 40, 10)) // 11, 22, 33
 */
function* map2<T, U, V>(
  callback: (U, V) => T,
  iter1: Iterable<U>,
  iter2: Iterable<V>
): Generator<T, void, void> {
  // https://github.com/facebook/flow/issues/1163
  const it1: Iterator<U> = (iter1: any)[Symbol.iterator]();
  const it2: Iterator<V> = (iter2: any)[Symbol.iterator]();

  while (1) {
    const next1 = it1.next();
    const next2 = it2.next();
    if (next1.done || next2.done) {
      break;
    }

    yield callback(next1.value, next2.value);
  }
}

module.exports = map2;
