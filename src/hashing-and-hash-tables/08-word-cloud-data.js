export function countWords(words) {
  const wordArray = words
    .toLowerCase()
    .replace(/[^\w\s]/gi, '')
    .split(' ')

  const wordCountMap = {}
  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i] in wordCountMap) {
      wordCountMap[wordArray[i]] += 1
    } else {
      wordCountMap[wordArray[i]] = 1
    }
  }

  return wordCountMap
}
