class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
    const newTree = new Tree(value);
    this.children.push(newTree);
  }

  contains(value) {
    let result = false;
    const recurse = (node) => {
      if (node.value === value) {
        result = true;
        return;
      }
      if (node.children.length > 0) {
        for (const child of node.children) {
          recurse(child);
        }
      }
    };
    recurse(this);
    return result;
  }

  /*
+-------------------------+
| Advanced Requirements!! |
+-------------------------+

The following are part of the advanced requirements.
Do not proceed until you are done with the basic
requirements for ALL data structures in this exercise.

*/
  traverseDepthFirst(fn) {}

  traverseBreadthFirst(fn) {}
}

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/

module.exports = Tree;
