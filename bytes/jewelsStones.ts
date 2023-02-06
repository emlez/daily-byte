// Given a string representing your stones and another string representing a list of jewels, return the number of stones that you have that are also jewels.

// Ex: Given the following jewels and stones...

// jewels = "abc", stones = "ac", return 2
// jewels = "Af", stones = "AaaddfFf", return 3
// jewels = "AYOPD", stones = "ayopd", return 0

const jewelsStones = (jewels: string, stones: string): number => {
  const jewelsSet = new Set(jewels)
  let count = 0

  for (const stone of stones) {
    if (jewelsSet.has(stone)) count++
  }

  return count
}

console.log(jewelsStones("abc", "ac"))
console.log(jewelsStones("Af", "AaaddfFf"))
console.log(jewelsStones("AYOPD", "ayopd"))
