/* @flow */

const filter = require('./filter');
const forEach = require('./for-each');
const map = require('./map');
const map2 = require('./map2');
const slice = require('./slice');
const tail = require('./tail');
const tee = require('./tee');

/**
 * Convenient wrapper for chaining calls to library functions.
 *
 * You can also use it as iterable.
 * @example
 * Array.from(new Laziness([1, 2, 3])) // 1, 2, 3
 * @example
 * function* fib() {
 *   yield 1;
 *   yield 1;
 *   const [fib1, fib2] = Laziness.from(fib()).tee();
 *   yield* fib1.map2((x, y) => x + y, fib2.tail());
 * }
 * fib() // 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
 */
class Laziness<T> implements Iterable<T> {
  /**
   * Same as `new Laziness(iter)`
   */
  static from<T>(iter: Iterable<T>): Laziness<T> { // eslint-disable-line no-shadow
    return new Laziness(iter);
  }

  constructor(iter: Iterable<T>) {
    this._iter = iter;
  }

  _iter: Iterable<T>;

  /**
   * See {@link filter}
   */
  filter(callback: (T) => boolean): Laziness<T> {
    return new Laziness(filter(this._iter, callback));
  }

  /**
   * See {@link forEach}
   */
  forEach(callback: (T) => void) {
    forEach(this._iter, callback);
  }

  /**
   * See {@link map}
   */
  map<U>(callback: (T) => U): Laziness<U> {
    return new Laziness(map(this._iter, callback));
  }

  /**
   * See {@link map2}
   */
  map2<U, V>(callback: (T) => U, iter2: Iterable<V>): Laziness<U> {
    return new Laziness(map2(callback, this._iter, iter2));
  }

  /**
   * See {@link slice}
   */
  slice(begin: number, end?: number): Laziness<T> {
    return new Laziness(slice(this._iter, begin, end));
  }

  /**
   * See {@link tail}
   */
  tail(): Laziness<T> {
    return new Laziness(tail(this._iter));
  }

  /**
   * See {@link tee}
   */
  tee(n: number = 2): Array<Laziness<T>> {
    return tee(this._iter, n).map(iter => new Laziness(iter));
  }

  /**
   */
  toArray(): Array<T> {
    return Array.from(this._iter);
  }

  /* ::
  // See https://github.com/facebook/flow/issues/3412
  @@iterator(): Iterator<T> {
    return this._iter.@@iterator();
  }
  */
}

// See https://github.com/facebook/flow/issues/3412
(Laziness: any).prototype[Symbol.iterator] = function* gen() {
  yield* this._iter;
};

module.exports = Laziness;
