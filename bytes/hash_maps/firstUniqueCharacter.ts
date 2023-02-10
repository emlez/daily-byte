// Given a string, return the index of its first unique character. If a unique character does not exist, return -1.

// Ex: Given the following strings...

// "abcabd", return 2
// "thedailybyte", return 1
// "developer", return 0

const firstUniqueCharacter = (str: string): number => {
  const charMap = new Map<string, number>()
  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    charMap.set(char, (charMap.get(char) || 0) + 1)
  }
  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    if (charMap.get(char) === 1) {
      return i
    }
  }
  return -1
}

console.log(firstUniqueCharacter("abcabd"))
console.log(firstUniqueCharacter("thedailybyte"))
console.log(firstUniqueCharacter("developer"))
