// Given a string, return whether or not it uses capitalization correctly. A string correctly uses capitalization if all letters are capitalized, no letters are capitalized, or only the first letter is capitalized.

// Ex: Given the following strings...

// "USA", return true
// "Calvin", return true
// "compUter", return false
// "coding", return true

const correctCapitalization = (word: string) => {
  const isAllCaps = word === word.toUpperCase()
  const isAllLower = word === word.toLowerCase()
  const isFirstLetterCaps =
    word[0] === word[0].toUpperCase() &&
    word.slice(1) === word.slice(1).toLowerCase()

  return isAllCaps || isAllLower || isFirstLetterCaps
}

console.log(correctCapitalization("USA"))
console.log(correctCapitalization("Calvin"))
console.log(correctCapitalization("compUter"))
console.log(correctCapitalization("coding"))
