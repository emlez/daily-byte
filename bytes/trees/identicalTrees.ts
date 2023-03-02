// Given two binary trees, return whether or not the two trees are identical.
// Note: identical meaning they exhibit the same structure and the same values at each node.
// Ex: Given the following trees...
//         2
//        / \
//       1   3
//     2
//    / \
//   1   3
// return true.
// Ex: Given the following trees...
//         1
//          \
//           9
//            \
//            18
//     1
//    /
//   9
//    \
//     18
// return false.
// Ex: Given the following trees...
//         2
//        / \
//       3   1
//     2
//    / \
//   1   3
// return false.

import { TreeNode } from "./TreeNode"

const identicalTrees = (root1: TreeNode, root2: TreeNode): boolean => {
  if (!root1 && !root2) return true
  if (!root1 || !root2) return false
  return (
    root1.val === root2.val &&
    identicalTrees(root1.left!, root2.left!) &&
    identicalTrees(root1.right!, root2.right!)
  )
}

console.log(
  identicalTrees(
    new TreeNode(2, new TreeNode(1), new TreeNode(3)),
    new TreeNode(2, new TreeNode(1), new TreeNode(3))
  )
)
console.log(
  identicalTrees(
    new TreeNode(1, null, new TreeNode(9, null, new TreeNode(18))),
    new TreeNode(1, new TreeNode(9, null, new TreeNode(18)))
  )
)
console.log(
  identicalTrees(
    new TreeNode(2, new TreeNode(3), new TreeNode(1)),
    new TreeNode(2, new TreeNode(1), new TreeNode(3))
  )
)
