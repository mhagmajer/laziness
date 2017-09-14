/* @flow */

const filter = require('./filter');
const forEach = require('./for-each');
const map = require('./map');
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
   * {@link filter}
   */
  filter(callback: (T) => boolean): Laziness<T> {
    return new Laziness(filter(this._iter, callback));
  }

  /**
   * {@link forEach}
   */
  forEach(callback: (T) => void) {
    forEach(this._iter, callback);
  }

  /**
   * {@link map}
   */
  map<U>(callback: (T) => U): Laziness<U> {
    return new Laziness(map(this._iter, callback));
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
