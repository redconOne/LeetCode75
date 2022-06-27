// 235. Lowest Common Ancestor of a Binary Search Tree
// Easy

// 6117

// 197

// Add to List

// Share
// Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

// Example 1:

// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// Output: 6
// Explanation: The LCA of nodes 2 and 8 is 6.
// Example 2:

// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
// Output: 2
// Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.
// Example 3:

// Input: root = [2,1], p = 2, q = 1
// Output: 2

// Constraints:

// The number of nodes in the tree is in the range [2, 105].
// -109 <= Node.val <= 109
// All Node.val are unique.
// p != q
// p and q will exist in the BST.

const lowestCommonAncestor = (root, target1, target2) => {
  while (root) {
    if (root.val > target1.val && root.val > target2.val) root = root.left;
    else if (root.val < target1.val && root.val < target2.val)
      root = root.right;
    else return root;
  }
};

// we're going to continue looping until we return some sort of value;
// if root.val is larger than both target1.val and target2.val then we need to move root to a smaller node
// else if root.val is lesser than both we need to move root to a larger node
// if root.val is less than one and larger than the other we return root
// if root is equal to one of the nodes it will also return (since we used < and > not <= and >=)
