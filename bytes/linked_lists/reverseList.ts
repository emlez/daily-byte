// Given a linked list, containing unique values, reverse it, and return the result.

// Ex: Given the following linked lists...

// 1->2->3->null, return a reference to the node that contains 3 which points to a list that looks like the following: 3->2->1->null
// 7->15->9->2->null, return a reference to the node that contains 2 which points to a list that looks like the following: 2->9->15->7->null
// 1->null, return a reference to the node that contains 1 which points to a list that looks like the following: 1->null

import { ListNode } from "./linkedListNode"

const reverseList = (head: ListNode | null): ListNode | null => {
  let prev: ListNode | null = null
  let current = head

  while (current) {
    const next = current.next
    current.next = prev
    prev = current
    current = next
  }

  return prev
}

console.log(reverseList(new ListNode(1, new ListNode(2, new ListNode(3)))))
console.log(
  reverseList(
    new ListNode(7, new ListNode(15, new ListNode(9, new ListNode(2))))
  )
)
console.log(reverseList(new ListNode(1)))
