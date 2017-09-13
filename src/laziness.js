/* @flow */

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
   */
  toArray(): Array<T> {
    return Array.from(this._iter);
  }
}

module.exports = Laziness;
