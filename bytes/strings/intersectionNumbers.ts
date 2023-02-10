// Given two integer arrays, return their intersection.
// Note: the intersection is the set of elements that are common to both arrays.

// Ex: Given the following arrays...

// nums1 = [2, 4, 4, 2], nums2 = [2, 4], return [2, 4]
// nums1 = [1, 2, 3, 3], nums2 = [3, 3], return [3]
// nums1 = [2, 4, 6, 8], nums2 = [1, 3, 5, 7], return []

const intersectionNumbers = (nums1: number[], nums2: number[]): number[] => {
  const set1 = new Set(nums1)
  const set2 = new Set(nums2)

  return [...set1].filter((num) => set2.has(num))
}

console.log(intersectionNumbers([2, 4, 4, 2], [2, 4]))
console.log(intersectionNumbers([1, 2, 3, 3], [3, 3]))
console.log(intersectionNumbers([2, 4, 6, 8], [1, 3, 5, 7]))
