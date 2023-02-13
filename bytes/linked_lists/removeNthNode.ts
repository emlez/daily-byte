// Given a linked list and a value n, remove the nth to last node and return the resulting list.

// Ex: Given the following linked lists...

// 1->2->3->null, n = 1, return 1->2->null
// 1->2->3->null, n = 2, return 1->3->null
// 1->2->3->null, n = 3, return 2->3->null

import { ListNode } from "./linkedListNode"

const removeNthNode = (head: ListNode | null, n: number): ListNode | null => {
  let count = 0

  const removeNthNodeHelper = (
    head: ListNode | null,
    n: number
  ): ListNode | null => {
    if (!head) {
      return null
    }

    head.next = removeNthNodeHelper(head.next, n)

    count++

    if (count === n) {
      return head.next
    }

    return head
  }

  return removeNthNodeHelper(head, n)
}

console.log(removeNthNode(new ListNode(1, new ListNode(2, new ListNode(3))), 1))
console.log(removeNthNode(new ListNode(1, new ListNode(2, new ListNode(3))), 2))
console.log(removeNthNode(new ListNode(1, new ListNode(2, new ListNode(3))), 3))
