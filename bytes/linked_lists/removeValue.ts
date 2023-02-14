// Given a linked list and a value, remove all nodes containing the provided value, and return the resulting list.

// Ex: Given the following linked lists and values...

// 1->2->3->null, value = 3, return 1->2->null
// 8->1->1->4->12->null, value = 1, return 8->4->12->null
// 7->12->2->9->null, value = 7, return 12->2->9->null

import { ListNode } from "./linkedListNode"

const removeValue = (head: ListNode | null, value: number): ListNode | null => {
  if (!head) return head
  let current = head
  while (current.next) {
    if (current.next.val === value) {
      current.next = current.next.next
    } else {
      current = current.next
    }
  }
  return head.val === value ? head.next : head
}

console.log(removeValue(new ListNode(1, new ListNode(2, new ListNode(3))), 3))
console.log(removeValue(new ListNode(8, new ListNode(1, new ListNode(1, new ListNode(4, new ListNode(12))))), 1))
console.log(removeValue(new ListNode(7, new ListNode(12, new ListNode(2, new ListNode(9)))), 7))
