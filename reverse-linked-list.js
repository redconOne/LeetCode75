// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:

// Input: head = [1,2]
// Output: [2,1]
// Example 3:

// Input: head = []
// Output: []

// Constraints:

// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000

// Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

const reverseList = (head) => {
  let previous = null;
  while (head) {
    let nextNode = head.next;
    head.next = previous;
    previous = head;
    head = nextNode;
  }
  return previous;
};

// First we declare a variable set to null as the end of our linkedList.
// as we iterate through the list we want to keep track of previousNode, currentNode(head), and nextNode(head.next)
// So we iterate through the linkedlist with a while loop
// each iteration we create a new nextNode set to head.next
// set head.next to previous
// set previous to head
// set head to nextNode

// after the while loop return previous, which should be pointing at the last linkedList node.
