// Given an array of numbers sorted in ascending order, return a height-balanced binary search tree using every number from the array.
// Note: height-balanced meaning that the level of any node’s two subtrees should not differ by more than one.

// Ex: Given the following nums...

// nums = [1, 2, 3] return a reference to the following tree...
//        2
//       /  \
//      1    3
// Ex: Given the following nums...

// nums = [1, 2, 3, 4, 5, 6] return a reference to the following tree...
//         3
//        / \
//       2   5
//      /   / \
//     1   4   6

import { TreeNode } from "./treeNode"

const sortArrayToTree = (nums: number[]): TreeNode | null => {
  if (nums.length === 0) {
    return null
  }

  const mid = Math.floor(nums.length / 2)

  const root = new TreeNode(nums[mid])

  root.left = sortArrayToTree(nums.slice(0, mid))
  root.right = sortArrayToTree(nums.slice(mid + 1))

  return root
}

console.log(sortArrayToTree([1, 2, 3]))
console.log(sortArrayToTree([1, 2, 3, 4, 5, 6]))
