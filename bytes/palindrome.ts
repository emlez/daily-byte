// This question is asked by Facebook. Given a string, return whether or not it forms a palindrome ignoring case and non-alphabetical characters.
// Note: a palindrome is a sequence of characters that reads the same forwards and backwards.

// Ex: Given the following strings...

// "level", return true
// "algorithm", return false
// "A man, a plan, a canal: Panama.", return true

const palindrome = (str: string) => {
  const strippedStr = str.replace(/[^a-z]/gi, "").toLowerCase()
  const reversedStr = strippedStr.split("").reverse().join("")
  return strippedStr == reversedStr
}

console.log(palindrome("level"))
console.log(palindrome("algorithm"))
console.log(palindrome("A man, a plan, a canal: Panama."))
console.log(palindrome("anime"))
console.log(palindrome("Anita lava la tina."))
