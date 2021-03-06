// Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

// Do not modify the linked list.

// Example 1:

// Input: head = [3,2,0,-4], pos = 1
// Output: tail connects to node index 1
// Explanation: There is a cycle in the linked list, where tail connects to the second node.
// Example 2:

// Input: head = [1,2], pos = 0
// Output: tail connects to node index 0
// Explanation: There is a cycle in the linked list, where tail connects to the first node.
// Example 3:

// Input: head = [1], pos = -1
// Output: no cycle
// Explanation: There is no cycle in the linked list.

// Constraints:

// The number of the nodes in the list is in the range [0, 104].
// -105 <= Node.val <= 105
// pos is -1 or a valid index in the linked-list.

// Follow up: Can you solve it using O(1) (i.e. constant) memory?

const detectCycle = (head) => {
  if (!head || !head.next) return null;
  let intersectNode = new intersection(head);
  if (!intersectNode) return null;
  let start = head;
  while (intersectNode !== start) {
    start = start.next;
    intersectNode = intersectNode.next;
  }
  return start;
};

const intersection = (head) => {
  let slow = head,
    fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return slow;
  }
  return null;
};

// First we work on the intersection helper function. This function is used to help see if there is a loop or not.
// We use a slow and fast pointer. If fast pointer ever hits null that means there is no loop
// If fast pointer is equal to slow pointer then there is definitely a loop. We then return that intersection node

// After writing intersection we work on the main detect function
// if head or head.next are null return null
// run helper function and set that to intersectNode
// if intersectNode is null (aka there is no loop) return null
// increment startNode and intersectNode one at a time until they meet. They will meet at the intersection.
// return either node because they will both be at the same location.
