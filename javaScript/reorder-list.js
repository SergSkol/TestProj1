// https://leetcode.com/problems/reorder-list/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
function reorderList(head) {
  if (!head || !head.next) {
    return head;
  }

  // Find the middle of the linked list using the slow and fast pointer technique
  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse the second half of the linked list
  let prev = null;
  let curr = slow.next;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  slow.next = null;

  // Merge the first and second halves of the linked list
  let p1 = head;
  let p2 = prev;
  while (p2) {
    let next1 = p1.next;
    let next2 = p2.next;
    p1.next = p2;
    p2.next = next1;
    p1 = next1;
    p2 = next2;
  }

  return head;
}
