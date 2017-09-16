/* @flow */

const invariant = require('./invariant');

class Queue<T> {
  constructor() {
    this._stack1 = [];
    this._stack2 = [];
  }

  _stack1: Array<T>;
  _stack2: Array<T>;

  push(item: T) {
    this._stack1.push(item);
  }

  pop(): T | void {
    if (this._stack2.length === 0) {
      while (this._stack1.length) {
        this._stack2.push(this._stack1.pop());
      }
    }
    return this._stack2.pop();
  }

  top(): T | void {
    if (this._stack2.length) {
      return this._stack2[this._stack2.length - 1];
    }
    if (this._stack1.length) {
      return this._stack1[0];
    }
    return undefined;
  }

  size(): number {
    return this._stack1.length + this._stack2.length;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }
}

/**
 * Clone interable into n independent instances
 */
function tee<T>(iter: Iterable<T>, n: number = 2): Array<Generator<T, void, void>> {
  const queues: Array<Queue<T>> = Array(n).fill().map(() => new Queue());

  // https://github.com/facebook/flow/issues/1163
  const it: Iterator<T> = (iter: any)[Symbol.iterator]();

  function* gen(q: Queue<T>): Generator<T, void, void> {
    while (1) {
      if (q.isEmpty()) {
        const next = it.next();
        if (next.done) {
          break;
        }

        queues.forEach(queue => queue.push(next.value));
      }

      const top = q.pop();
      invariant(top !== undefined, 'q is not empty');
      yield top;
    }
  }

  return queues.map(gen);
}

module.exports = tee;
