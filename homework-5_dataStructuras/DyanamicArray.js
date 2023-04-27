class DynamicArray {
  _array = null;
  _length = null;
  _capacity = null;
  _lastElement = null;

  constructor() {
    this._array = [];
    _length = 0;
    _capacity = 0;
  }

  updateArraySize() {
    let tmp = Array(this._capacity).fill(undefined);
    let slicedArray = tmp.slice(this._array.length, tmp.length);
    this._array = [...this._array, ...slicedArray];
  }

  addElementToArray(element) {
    const idx = this._array.findIndex((el) => el === undefined);
    this._array[idx] = element;
  }

  push(element) {
    if (this._length === 0 && this._capacity === 0) {
      this._capacity = 1;
      this._array.push(element);
      this._lastElement = element;
      ++this._length;
      return null;
    }

    if (this._capacity === this._length) {
      this._capacity *= 2;
      this.updateArraySize();
    }

    this.addElementToArray(element);
    ++this._length;
    return null;
  }

  pop() {}

  insert(position, val, count) {}

  insertArray(position, staticArray) {}

  erase(pos, count) {}
  size() {}
  isEmpty() {}
  clean() {}
  resize(count) {}
}
