// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []

// Constraints:

// The number of nodes in the tree is in the range [0, 2000].
// -1000 <= Node.val <= 1000

const levelOrder = (root) => {
  const levels = [];
  if (!root) return levels;

  const queue = [root];

  while (queue.length) {
    const queueLen = queue.length;
    const level = [];

    for (let i = 0; i < queueLen; i++) {
      const node = queue.shift();

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);

      level.push(node.val);
    }
    levels.push(level);
  }
  return levels;
};

// first we declare an array that will hold all the values of each level
// if root is null we return an empty array
// create a queue object (FIFO) to hold root

// while there is an object in the queue we :
// create a new array to hold the values of each particular level
// going by each item in the queue, in order, we add their children to the queue and their value to level
// each level is added to levels

// return levels
