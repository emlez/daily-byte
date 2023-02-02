// Given two binary strings (strings containing only 1s and 0s) return their sum (also as a binary string).
// Note: neither binary string will contain leading 0s unless the string itself is 0

// Ex: Given the following binary strings...

// "100" + "1", return "101"
// "11" + "1", return "100"
// "1" + "0", return  "1"

const addBinary = (a: string, b: string): string => {
  let carry = 0
  let result = ""
  let i = a.length - 1
  let j = b.length - 1

  while (i >= 0 || j >= 0 || carry > 0) {
    const sum = (parseInt(a[i]) || 0) + (parseInt(b[j]) || 0) + carry
    result = (sum % 2) + result
    carry = Math.floor(sum / 2)
    i--
    j--
  }

  return result
}

console.log(addBinary("100", "1"))
console.log(addBinary("11", "1"))
console.log(addBinary("1", "0"))
