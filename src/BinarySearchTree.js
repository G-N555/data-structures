class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
  insert(value) {
    const newNode = new BinarySearchTree(value);

    const recurse = (node) => {
      if (value === node.value) {
        return;
      }
      if (value > node.value) {
        if (node.right === null) {
          node.right = newNode;
        } else {
          recurse(node.right);
        }
      } else {
        if (node.left === null) {
          node.left = newNode;
        } else {
          recurse(node.left);
        }
      }
    };
    recurse(this);
    return this;
  }

  contains(target) {
    let result = false;

    const recurse = (node) => {
      if (target === node.value) {
        result = true;
        return result;
      }
      if (target > node.value) {
        if (node.right === null) {
          return result;
        } else {
          recurse(node.right);
        }
      } else {
        if (node.left === null) {
          return result;
        } else {
          recurse(node.left);
        }
      }
    };
    recurse(this);
    return result;
  }
}

module.exports = BinarySearchTree;

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   Basic Requirements:         X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
