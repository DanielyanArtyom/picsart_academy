class Queue {
  _queue = null;
  _front = null;
  _back = null;

  constructor() {
    this._queue = [];
  }

  push(element) {
    if (!this._queue.length) {
      this._queue.push(element);
      this._back = element;
      this._front = element;
    } else {
      this._queue = [...this._queue, element];
      this._back = this._queue[0];
      this._front = element;
    }
  }

  pop() {
    if (!this._queue.length) {
      return null;
    }
    this._queue.pop();
    this._front = this._queue[this._queue.length - 1];
  }

  front() {
    return this._front;
  }
  back() {
    return this._back;
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

const queue = new Queue();
console.log("start", queue._queue);
queue.push(5);
queue.push(125);
queue.push(4);
queue.push(35);

console.log("push", queue._queue);

console.log("back", queue.back());
console.log("front", queue.front());

queue.pop();
queue.pop();
queue.pop();
queue.pop();
queue.pop();

console.log("pop", queue._queue);
