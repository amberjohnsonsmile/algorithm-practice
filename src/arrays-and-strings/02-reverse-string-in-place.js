export function reverseStringInPlace(characterArray) {
  const half = Math.floor(characterArray.length / 2)

  for (let i = 0; i < half; i++) {
    const firstCharacter = characterArray[i]
    characterArray[i] = characterArray[characterArray.length - 1 - i]
    characterArray[characterArray.length - 1 - i] = firstCharacter
  }

  return characterArray
}
