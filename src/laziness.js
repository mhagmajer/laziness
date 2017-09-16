/* @flow */

const filter = require('./filter');
const forEach = require('./for-each');
const map = require('./map');
const slice = require('./slice');
const tee = require('./tee');

/**
 * Convenient wrapper for chaining calls to library functions.
 *
 * You can also use it as iterable
 * @example
 * Array.from(new Laziness([1, 2, 3])) // 1, 2, 3
 */
class Laziness<T> implements Iterable<T> {
  /**
   */
  static from(iter: Iterable<T>) {
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
   * See {@link slice}
   */
  slice(begin: number, end?: number): Laziness<T> {
    return new Laziness(slice(this._iter, begin, end));
  }

  /**
   * See {@link tee}
   */
  tee(n: number = 2): Array<Generator<T, void, void>> {
    return tee(this._iter, n);
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
