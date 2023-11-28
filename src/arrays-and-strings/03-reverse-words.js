export function reverseWords(characterArray) {
  // Compleletely reverse the whole thing
  reverseCharacters(characterArray, 0, characterArray.length - 1)

  // Reverse each word
  let wordIndex = 0
  for (let i = 0; i <= characterArray.length; i++) {
    if (characterArray[i] === ' ' || i === characterArray.length) {
      reverseCharacters(characterArray, wordIndex, i - 1)
      wordIndex = i + 1
    }
  }

  return characterArray
}

function reverseCharacters(characters, leftIndex, rightIndex) {
  while (leftIndex < rightIndex) {
    const leftCharacter = characters[leftIndex]
    characters[leftIndex] = characters[rightIndex]
    characters[rightIndex] = leftCharacter
    leftIndex++
    rightIndex--
  }
}
