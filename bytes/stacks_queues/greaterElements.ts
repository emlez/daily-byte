// Given two arrays of numbers, where the first array is a subset of the second array, return an array containing all the next greater elements for each element in the first array, in the second array. If there is no greater element for any element, output -1 for that number.

// Ex: Given the following arrays…

// nums1 = [4,1,2], nums2 = [1,3,4,2], return [-1, 3, -1] because no element in nums2 is greater than 4, 3 is the first number in nums2 greater than 1, and no element in nums2 is greater than 2.
// nums1 = [2,4], nums2 = [1,2,3,4], return [3, -1] because 3 is the first greater element that occurs in nums2 after 2 and no element is greater than 4.

const greaterElements = (nums1: number[], nums2: number[]): number[] => {
  const result: number[] = []
  const stack: number[] = []

  const map = new Map<number, number>()

  for (const num of nums2) {
    while (stack.length && stack[stack.length - 1] < num) {
      map.set(stack.pop()!, num)
    }
    stack.push(num)
  }

  for (const num of nums1) {
    result.push(map.get(num) || -1)
  }

  return result
}

console.log(greaterElements([4, 1, 2], [1, 3, 4, 2]))
console.log(greaterElements([2, 4], [1, 2, 3, 4]))
