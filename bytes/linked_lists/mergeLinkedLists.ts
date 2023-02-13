// Given two sorted linked lists, merge them together in ascending order and return a reference to the merged list

// Ex: Given the following lists...

// list1 = 1->2->3, list2 = 4->5->6->null, return 1->2->3->4->5->6->null
// list1 = 1->3->5, list2 = 2->4->6->null, return 1->2->3->4->5->6->null
// list1 = 4->4->7, list2 = 1->5->6->null, return 1->4->4->5->6->7->null

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function mergeLinkedLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1) {
    return list2
  }

  if (!list2) {
    return list1
  }

  if (list1.val < list2.val) {
    list1.next = mergeLinkedLists(list1.next, list2)
    return list1
  } else {
    list2.next = mergeLinkedLists(list1, list2.next)
    return list2
  }
}

console.log(
  mergeLinkedLists(
    new ListNode(1, new ListNode(2, new ListNode(3))),
    new ListNode(4, new ListNode(5, new ListNode(6)))
  )
)
