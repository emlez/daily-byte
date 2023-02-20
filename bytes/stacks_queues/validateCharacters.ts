// Given a string only containing the following characters (, ), {, }, [, and ] return whether or not the opening and closing characters are in a valid order.

// Ex: Given the following strings...

// "(){}[]", return true
// "(({[]}))", return true
// "{(})", return false

const validateCharacters = (str: string): boolean => {
  const stack: string[] = []
  const open = ["(", "{", "["]
  const close = [")", "}", "]"]
  for (let i = 0; i < str.length; i++) {
    if (open.includes(str[i])) {
      stack.push(str[i])
    } else if (close.includes(str[i])) {
      if (stack.length === 0) return false
      const last = stack.pop()
      if (open.indexOf(last!) !== close.indexOf(str[i])) return false
    }
  }
  return stack.length === 0
}

console.log(validateCharacters("(){}[]"))
console.log(validateCharacters("(({[]}))"))
console.log(validateCharacters("{(})"))
