// Given the reference to the root of a binary search tree and a search value, return the reference to the node that contains the value if it exists and null otherwise.
// Note: all values in the binary search tree will be unique.

// Ex: Given the tree...

//         3
//        / \
//       1   4
// and the search value 1 return a reference to the node containing 1.
// Ex: Given the following tree...

//         7
//        / \
//       5   9
//          / \
//         8   10
// and the search value 9 return a reference to the node containing 9.
// Ex: Given the following tree...

//         8
//        / \
//       6   9
// and the search value 7 return null.

import { TreeNode } from "./treeNode"

const findValue = (root: TreeNode | null, value: number): TreeNode | null => {
  if (!root) return null

  if (root.val === value) return root

  return value < root.val
    ? findValue(root.left, value)
    : findValue(root.right, value)
}

console.log(findValue(new TreeNode(3, new TreeNode(1), new TreeNode(4)), 1))
console.log(
  findValue(
    new TreeNode(
      7,
      new TreeNode(5),
      new TreeNode(9, new TreeNode(8), new TreeNode(10))
    ),
    9
  )
)
console.log(findValue(new TreeNode(8, new TreeNode(6)), 7))
