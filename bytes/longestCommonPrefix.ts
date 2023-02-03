// Given an array of strings, return the longest common prefix that is shared amongst all strings.
// Note: you may assume all strings only contain lowercase alphabetical characters.

// Ex: Given the following arrays...

// ["colorado", "color", "cold"], return "col"
// ["a", "b", "c"], return ""
// ["spot", "spotty", "spotted"], return "spot"

const longestCommonPrefix = (strs: string[]): string => {
  if (strs.length === 0) return ""
  let prefix = strs[0]
  strs.forEach((str) => {
    while (str.indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1)
      if (prefix === "") return ""
    }
  })
  return `"${prefix}"`
}

console.log(longestCommonPrefix(["colorado", "color", "cold"]))
console.log(longestCommonPrefix(["a", "b", "c"]))
console.log(longestCommonPrefix(["spot", "spotty", "spotted"]))
