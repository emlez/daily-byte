// Given a non-empty linked list, return the middle node of the list. If the linked list contains an even number of elements, return the node closer to the end.
// Ex: Given the following linked lists...

// 1->2->3->null, return 2
// 1->2->3->4->null, return 3
// 1->null, return 1

import { ListNode } from "./linkedListNode"

const findMiddleElement = (head: ListNode | null): number => {
  let slow = head
  let fast = head

  while (fast && fast.next) {
    slow = slow!.next
    fast = fast.next.next
  }

  return slow!.val
}

console.log(
  findMiddleElement(new ListNode(1, new ListNode(2, new ListNode(3))))
)
console.log(
  findMiddleElement(
    new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))
  )
)
console.log(findMiddleElement(new ListNode(1)))
