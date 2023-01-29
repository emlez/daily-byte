// This question is asked by Google. Given a string, reverse all of its characters and return the resulting string.

// Ex: Given the following strings...

// “Cat”, return “taC”
// “The Daily Byte”, return "etyB yliaD ehT”
// “civic”, return “civic”

const reverseString = (str: string): string => {
  return str.split("").reverse().join("")
}

console.log(reverseString("Cat"))
console.log(reverseString("The Daily Byte"))
console.log(reverseString("civic"))
