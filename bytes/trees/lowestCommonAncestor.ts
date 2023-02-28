// Given a binary search tree that contains unique values and two nodes within the tree, a, and b, return their lowest common ancestor.
// Note: the lowest common ancestor of two nodes is the deepest node within the tree such that both nodes are descendants of it.

// Ex: Given the following tree...
//        7
//       / \
//     2    9
//    / \
//   1   5
// and a = 1, b = 9, return a reference to the node containing 7.
// Ex: Given the following tree...

//         8
//        / \
//       3   9
//      / \
//     2   6
// and a = 2, b = 6, return a reference to the node containing 3.
// Ex: Given the following tree...

//         8
//        / \
//       6   9
// and a = 6, b = 8, return a reference to the node containing 8.

import { TreeNode } from "./TreeNode"

const lowestCommonAncestor = (
  root: TreeNode,
  a: number,
  b: number
): TreeNode => {
  if (root.val > a && root.val > b) {
    return lowestCommonAncestor(root.left!, a, b)
  }

  if (root.val < a && root.val < b) {
    return lowestCommonAncestor(root.right!, a, b)
  }

  return root
}

console.log(
  lowestCommonAncestor(
    new TreeNode(
      7,
      new TreeNode(2, new TreeNode(1), new TreeNode(5)),
      new TreeNode(9)
    ),
    1,
    9
  )
)
console.log(
  lowestCommonAncestor(
    new TreeNode(
      8,
      new TreeNode(3, new TreeNode(2), new TreeNode(6)),
      new TreeNode(9)
    ),
    2,
    6
  )
)
console.log(
  lowestCommonAncestor(new TreeNode(8, new TreeNode(6), new TreeNode(9)), 6, 8)
)

