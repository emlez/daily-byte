// Given a string s containing only lowercase letters, continuously remove adjacent characters that are the same and return the result.

// Ex: Given the following strings...

// s = "abccba", return ""
// s = "foobar", return "fbar"
// s = "abccbefggfe", return "a"

const removeAdjacentDuplicates = (s: string): string => {
  const stack: string[] = []
  for (let i = 0; i < s.length; i++) {
    if (stack[stack.length - 1] === s[i]) {
      stack.pop()
    } else {
      stack.push(s[i])
    }
  }
  return `result: ${stack.join("")}`
}

console.log(removeAdjacentDuplicates("abccba"))
console.log(removeAdjacentDuplicates("foobar"))
console.log(removeAdjacentDuplicates("abccbefggfe"))
