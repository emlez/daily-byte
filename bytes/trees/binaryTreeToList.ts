// Given a binary search tree, rearrange the tree such that it forms a linked list where all its values are in ascending order.

// Ex: Given the following tree...
//         5
//        / \
//       1   6
// return...
// 1
//  \
//   5
//    \
//     6

// Ex: Given the following tree...
//        5
//       / \
//     2    9
//    / \
//   1   3
// return...
// 1
//  \
//   2
//    \
//     3
//      \
//       5
//        \
//         9

// Ex: Given the following tree...
// 5
//  \
//   6
// return...
// 5
//  \
//   6

import { TreeNode } from "./treeNode"

const binaryTreeToList = (root: TreeNode | null): TreeNode | null => {
  if (!root) return null

  const head = new TreeNode(0)
  let prev = head

  const inOrder = (node: TreeNode | null) => {
    if (!node) return

    inOrder(node.left)

    prev.right = node
    node.left = null
    prev = node

    inOrder(node.right)
  }

  inOrder(root)

  return head.right
}

console.log(binaryTreeToList(new TreeNode(5, new TreeNode(1), new TreeNode(6))))
console.log(
  binaryTreeToList(
    new TreeNode(
      5,
      new TreeNode(2, new TreeNode(1), new TreeNode(3)),
      new TreeNode(9)
    )
  )
)
console.log(binaryTreeToList(new TreeNode(5, null, new TreeNode(6))))
