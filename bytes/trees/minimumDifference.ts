// Given a binary search tree, return the minimum difference between any two nodes in the tree.
// Ex: Given the following tree...
//         2
//        / \
//       3   1
// return 1.
// Ex: Given the following tree...
//         29
//        /  \
//      17   50
//     /     / \
//    1    42  59
// return 8.
// Ex: Given the following tree...
//         2
//          \
//          100
// return 98.

import { TreeNode } from "./treeNode"

const minimumDifference = (root: TreeNode): number => {
  let min = Number.MAX_SAFE_INTEGER
  let prev = Number.MIN_SAFE_INTEGER
  const traverse = (node: TreeNode) => {
    if (!node) return
    traverse(node.left!)
    min = Math.min(min, Math.abs(node.val - prev))
    prev = node.val
    traverse(node.right!)
  }
  traverse(root)
  return min
}

console.log(
  minimumDifference(new TreeNode(2, new TreeNode(3), new TreeNode(1)))
)
console.log(
  minimumDifference(
    new TreeNode(
      29,
      new TreeNode(17, new TreeNode(1)),
      new TreeNode(50, new TreeNode(42), new TreeNode(59))
    )
  )
)
console.log(minimumDifference(new TreeNode(2, null, new TreeNode(100))))
