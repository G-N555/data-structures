class Heap {
  constructor() {
    this.storage = [];
  }

  insert(value) {
    this.storage.push(value);
    const bubbleUp = () => {
      let index = this.storage.length - 1;
      while (index > 0) {
        let target = this.storage[index];
        let parentInd = Math.floor((index - 1) / 2);
        let parent = this.storage[parentInd];
        if (parent > target) break;
        this.storage[index] = parent;
        this.storage[parentInd] = target;
        index = parentInd;
      }
    };
    bubbleUp();
  }

  removeMax() {}
}

module.exports = Heap;
