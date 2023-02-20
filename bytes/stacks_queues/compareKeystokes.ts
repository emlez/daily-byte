// Given two strings s and t, which represents a sequence of keystrokes, where # denotes a backspace, return whether or not the sequences produce the same result.

// Ex: Given the following strings...

// s = "ABC#", t = "CD##AB", return true
// s = "como#pur#ter", t = "computer", return true
// s = "cof#dim#ng", t = "code", return false

const compareKeystrokes = (s: string, t: string): boolean => {
  const stackS: string[] = []
  const stackT: string[] = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "#") {
      stackS.pop()
    } else {
      stackS.push(s[i])
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (t[i] === "#") {
      stackT.pop()
    } else {
      stackT.push(t[i])
    }
  }
  return stackS.join("") === stackT.join("")
}

console.log(compareKeystrokes("ABC#", "CD##AB"))
console.log(compareKeystrokes("como#pur#ter", "computer"))
console.log(compareKeystrokes("cof#dim#ng", "code"))
