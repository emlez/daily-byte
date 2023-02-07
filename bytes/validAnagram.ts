// Given two strings s and t return whether or not s is an anagram of t.
// Note: An anagram is a word formed by reordering the letters of another word.

// Ex: Given the following strings...

// s = "cat", t = "tac", return true
// s = "listen", t = "silent", return true
// s = "program", t = "function", return false

const validAnagram = (s: string, t: string): boolean => {
  if (s.length !== t.length) return false
  return s.split("").sort().join("") === t.split("").sort().join("")
}

console.log(validAnagram("cat", "tac"))
console.log(validAnagram("listen", "silent"))
console.log(validAnagram("program", "function"))
