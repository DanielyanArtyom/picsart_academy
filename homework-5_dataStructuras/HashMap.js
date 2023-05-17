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
  _loadFactor = null;

  constructor() {
    this._size = 0;
    this._storage = Array(10).fill(null);
    _loadFactor = 0;
  }

  #hash(key) {
    let hash = 0;

    if (typeof key === "number") {
      while (key >= this._storage.length) {
        key %= this._storage.length;
      }
      return key;
    }

    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this._storage.length;
  }

  // set(key, value) {
  //   let idx = this.#hash(key);
  //   let newEntry = null;
  //   let currentEntry = null;
  //   if (!this._storage[idx]) {
  //     newEntry = new Entry(key, value, null);
  //     this._storage[idx] = newEntry;
  //   } else {
  //     currentEntry = this._storage[idx];
  //     newEntry = new Entry(key, value, null);

  //     while (currentEntry.next) {
  //       currentEntry = currentEntry.next;
  //     }
  //     currentEntry.next = newEntry;
  //   }
  // }

  // delete(key, target) {
  //   if (!this._storage.length) {
  //     return "Storage is Empty";
  //   }
  //   let idx = this.#hash(key);

  //   if (!this._storage[idx]) {
  //     return "There is no such element";
  //   }

  //   while (currentEntry.next && currentEntry.next.value !== target) {
  //     currentEntry = currentEntry.next;
  //   }

  //   if (!currentEntry.next) {
  //     return "There is no such element";
  //   }
  //   currentEntry.next = currentEntry.next.next;
  // }

  set(key) {
    ++this._loadFactor;
    let idx = this.#hash(key);
    let newEntry = null;
    let currentEntry = null;

    if (!this._storage[idx]) {
      newEntry = new Entry(key, null);
      this._storage[idx] = newEntry;
    } else {
      currentEntry = this._storage[idx];
      newEntry = new Entry(key, null);

      while (currentEntry.next) {
        currentEntry = currentEntry.next;
      }
      currentEntry.next = newEntry;
    }
  }

  delete(key) {
    if (!this._storage.length) {
      return "Storage is Empty";
    }
    let idx = this.#hash(key);

    if (!this._storage[idx]) {
      return "There is no such element";
    }
    --this._loadFactor;
    let currentEntry = this._storage[idx];

    if (currentEntry.key === key) {
      if (!currentEntry.next) {
        this._storage[idx] = null;
        return null;
      }

      currentEntry = currentEntry.next;
      return null;
    }

    while (currentEntry.next && currentEntry.next.key !== key) {
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

hashMap.set("Target");
hashMap.set("Target1");
hashMap.set("Target2");
hashMap.set("Target2");
hashMap.set("Target2");
hashMap.set("Target2");

hashMap.delete("Target");
console.log(hashMap._storage);
