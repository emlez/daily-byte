// Given two sorted linked lists, merge them together in ascending order and return a reference to the merged list

// Ex: Given the following lists...

// list1 = 1->2->3, list2 = 4->5->6->null, return 1->2->3->4->5->6->null
// list1 = 1->3->5, list2 = 2->4->6->null, return 1->2->3->4->5->6->null
// list1 = 4->4->7, list2 = 1->5->6->null, return 1->4->4->5->6->7->null

// Ex: Given the following lists...

const list1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
    },
  },
}

const list2 = {
  val: 4,
  next: {
    val: 5,
    next: {
      val: 6,
      next: null,
    },
  },
}

const mergeLinkedLists = (list1: { val: any; next: any } | null, list2: { val: any; next: any } | null) => {
  let head = null
  let tail = null

  while (list1 && list2) {
    let node = null

    if (list1.val < list2.val) {
      node = list1
      list1 = list1.next
    } else {
      node = list2
      list2 = list2.next
    }

    if (!head) {
      head = node
      tail = node
    } else {
      tail.next = node
      tail = node
    }
  }

  if (list1) {
    tail.next = list1
  }

  if (list2) {
    tail.next = list2
  }

  return head
}

console.log(mergeLinkedLists(list1, list2))