// Given a potentially cyclical linked list where each value is unique, return the node at which the cycle starts. If the list does not contain a cycle, return null.

// Ex: Given the following linked lists...

// 1->2->3, return null
// 1->2->3->4->5->2 (5 points back to 2), return a reference to the node containing 2
// 1->9->3->7->7 (7 points to itself), return a reference to the node containing 7

import { ListNode } from "./linkedListNode"

const returnStartCycle = (head: ListNode | null): ListNode | null => {
  const visited = new Set()
  let current = head
  while (current) {
    if (visited.has(current)) {
      return current
    }
    visited.add(current)
    current = current.next
  }
  return null
}

// Non-cyclical linked list
const listNode1 = new ListNode(1, new ListNode(2, new ListNode(3)))

// Cyclical linked list
const ListNode2 = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
)
ListNode2.next!.next!.next!.next!.next = ListNode2.next

// Self-referential linked list
const ListNode3 = new ListNode(
  1,
  new ListNode(9, new ListNode(3, new ListNode(7, new ListNode(7))))
)
ListNode3.next!.next!.next!.next!.next = ListNode3.next!.next!.next!.next

console.log(returnStartCycle(listNode1))
console.log(returnStartCycle(ListNode2))
console.log(returnStartCycle(ListNode3))
