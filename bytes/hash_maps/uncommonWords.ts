// Given two strings representing sentences, return the words that are not common to both strings (i.e. the words that only appear in one of the sentences). You may assume that each sentence is a sequence of words (without punctuation) correctly separated using space characters.

// Ex: given the following strings...

// sentence1 = "the quick", sentence2 = "brown fox", return ["the", "quick", "brown", "fox"]
// sentence1 = "the tortoise beat the haire", sentence2 = "the tortoise lost to the haire", return ["beat", "to", "lost"]
// sentence1 = "copper coffee pot", sentence2 = "hot coffee pot", return ["copper", "hot"]

const uncommonWords = (sentence1: string, sentence2: string): string[] => {
  const words1 = sentence1.split(" ")
  const words2 = sentence2.split(" ")
  const map = new Map<string, number>()
  const uncommonWords: string[] = []

  for (const word of words1) {
    map.set(word, (map.get(word) || 0) + 1)
  }

  for (const word of words2) {
    map.set(word, (map.get(word) || 0) + 1)
  }

  for (const [word, count] of map) {
    if (count === 1) {
      uncommonWords.push(word)
    }
  }

  return uncommonWords
}

console.log(uncommonWords("the quick", "brown fox"))
console.log(
  uncommonWords("the tortoise beat the haire", "the tortoise lost to the haire")
)
console.log(uncommonWords("copper coffee pot", "hot coffee pot"))
