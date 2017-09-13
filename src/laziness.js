/* @flow */

/**
 */
class Laziness<T> {
  contructor(iter: Iterable<T>) {
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
