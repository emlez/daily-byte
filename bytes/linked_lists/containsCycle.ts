// Given a linked list, containing unique numbers, return whether or not it has a cycle.
// Note: a cycle is a circular arrangement (i.e. one node points back to a previous node)

// Ex: Given the following linked lists...

// 1->2->3->1 -> true (3 points back to 1)
// 1->2->3 -> false
// 1->1 true (1 points to itself)

import { ListNode } from "./linkedListNode"

const containsCycle = (head: ListNode | null): boolean => {
  let slow = head
  let fast = head

  while (fast && fast.next) {
    slow = slow!.next
    fast = fast.next.next

    if (slow === fast) {
      return true
    }
  }

  return false
}

// A cyclic linked list.
const listNode1 = new ListNode(1, new ListNode(2, new ListNode(3)))
listNode1.next!.next!.next = listNode1

// A non-cyclic linked list.
const listNode2 = new ListNode(1, new ListNode(2, new ListNode(3)))

// A cyclic linked list where the last node points to the first node.
const listNode3 = new ListNode(1)
listNode3.next = listNode3

console.log(containsCycle(listNode1))
console.log(containsCycle(listNode2))
console.log(containsCycle(listNode3))
