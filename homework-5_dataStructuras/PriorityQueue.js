class MaxPriorityQueue {
  _heap = null;
  _heapSize = null;

  constructor() {
    this._heap = [];
    this._heapSize = 0;
  }

  insert(element) {
    ++this._heapSize;
    this._heap.push(element);
    this.increaseKey(this._heap.length - 1, element);
  }

  extractMax() {
    if (!this._heap.length) {
      return null;
    }

    let max = this._heap[0];

    this._heap[0] = this._heap[this._heap.length - 1];
    this._heap.pop();
    --this._heapSize;
    this.#maxHeapify(this._heap, 0);

    return max;
  }

  increaseKey(idx, key) {
    if (this._heap[idx] > key) {
      return null;
    }
    this._heap[idx] = key;
    while (idx >= 0 && this._heap[this.#getParent(idx)] < this._heap[idx]) {
      this.#swap(this.#getParent(idx), idx);
      idx = this.#getParent(idx);
    }
  }

  maximum() {
    if (!this._heap.length) {
      return "list is empty";
    }
    return this._heap[0];
  }

  #maxHeapify(array, idx) {
    let left = this.#getLeft(idx);
    let right = this.#getRight(idx);

    let largest = idx;

    if (left < array.length && array[left] > array[idx]) {
      largest = left;
    } else if (right < array.length && array[right] > array[idx]) {
      largest = right;
    }
    if (largest !== idx) {
      this.#swap(largest, idx);
      this.#maxHeapify(array, largest);
    }
  }

  #minHeapify(array, idx) {
    let left = this.#getLeft(idx);
    let right = this.#getRight(idx);

    let smallest = idx;

    if (left < array.length && array[left] < array[idx]) {
      smallest = left;
    } else if (right < array.length && array[right] < array[idx]) {
      smallest = right;
    }
    if (smallest !== idx) {
      this.#swap(smallest, idx);
      this.#minHeapify(array, smallest);
    }
  }

  #getLeft(idx) {
    return idx * 2 + 1;
  }

  #getRight(idx) {
    return idx * 2 + 2;
  }

  #getParent(idx) {
    return Math.floor((idx - 1) / 2);
  }

  #swap(a, b) {
    let temp = this._heap[a];
    this._heap[a] = this._heap[b];
    this._heap[b] = temp;
  }
}

maxPriority = new MaxPriorityQueue();

maxPriority.insert(5);
maxPriority.insert(22);
maxPriority.insert(1);
maxPriority.insert(7);
maxPriority.insert(0);
maxPriority.insert(10);
maxPriority.insert(30);
maxPriority.insert(15);

console.log(maxPriority._heap);

maxPriority.extractMax();

console.log(maxPriority._heap);
