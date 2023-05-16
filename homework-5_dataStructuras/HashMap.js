class Entry {
  key = null;
  value = null;
  next = null;

  constructor(key, value, next = null) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

class HashMap {
  _size = null;
  _storage = null;

  constructor() {
    this._size = 0;
    this._storage = Array(10).fill(null);
  }

  #hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this._storage.length;
  }

  set(key, value) {
    let idx = this.#hash(key);
    let newEntry = null;
    let currentEntry = null;
    if (!this._storage[idx]) {
      newEntry = new Entry(key, value, null);
      this._storage[idx] = newEntry;
    } else {
      currentEntry = this._storage[idx];
      newEntry = new Entry(key, value, null);

      while (currentEntry.next) {
        currentEntry = currentEntry.next;
      }
      currentEntry.next = newEntry;
    }
  }

  delete(key, target) {
    if (!this._storage.length) {
      return "Storage is Empty";
    }
    let idx = this.#hash(key);

    if (!this._storage[idx]) {
      return "There is no such element";
    }

    while (currentEntry.next && currentEntry.next.value !== target) {
      currentEntry = currentEntry.next;
    }

    if (!currentEntry.next) {
      return "There is no such element";
    }
    currentEntry.next = currentEntry.next.next;
  }

  get(key) {
    let idx = this.#hash(key);
    if (!this._storage[idx]) {
      return "There is no such element";
    }

    let currentEntry = this._storage[idx];
    while (currentEntry && currentEntry.key !== key) {
      currentEntry = currentEntry.next;
    }
    if (!currentEntry) {
      return "There is no such element";
    }

    if (currentEntry.key === key) {
      return [currentEntry.key, currentEntry.value];
    }
  }
}

const hashMap = new HashMap();

hashMap.set("Target", 10);
hashMap.set("Target1", 3);
hashMap.set("Target2", 15);
hashMap.set("Target2", 32);
hashMap.set("Target2", 1);
hashMap.set("Target2", 7);

console.log(hashMap.get("Target2"));
