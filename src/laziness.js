/* @flow */

const forEach = require('./for-each');
const slice = require('./slice');

/**
 */
class Laziness<T> {
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
   * {@link forEach}
   */
  forEach(callback: (T) => void) {
    forEach(this._iter, callback);
  }

  /**
   * {@link slice}
   */
  slice(begin: number, end?: number): Laziness<T> {
    return new Laziness(slice(this._iter, begin, end));
  }

  /**
   */
  toArray(): Array<T> {
    return Array.from(this._iter);
  }
}

module.exports = Laziness;
