// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// Example 1:

// Input: root = [2,1,3]
// Output: true
// Example 2:

// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// -231 <= Node.val <= 231 - 1

const isValidBST = (root, min, max) => {
  if (!root) return true;
  if (min && root.val <= min.val) return false;
  if (max && root.val >= max.val) return false;
  return isValidBST(root.left, min, root) && isValidBST(root.right, root, max);
};

// if root is null return true
// check to see if min and max are defined if so, see if root.val is less or greater
// return false if root.val is outside bounds
// assuming root.val is inside bounds check its children to left and right
