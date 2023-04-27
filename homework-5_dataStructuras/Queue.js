class Queue {
  _queue = null;
  front = null;
  back = null;

  push(element) {
    if (!this._queue.length) {
      this._queue.push(element);
      this.back = element;
    } else {
      this._queue = [element, ...this._queue];
      this.back = element;
    }
  }

  pop() {
    if (!this._queue.length) {
      return null;
    }
    this._queue.pop();
    this.front = this._queue[this._queue.length - 1];
  }

  front() {
    return this.front;
  }
  back() {
    return this.back;
  }

  size() {
    return this._queue.length;
  }

  empty() {
    this._queue = [];
    this.front = null;
    this.back = null;
  }
}
