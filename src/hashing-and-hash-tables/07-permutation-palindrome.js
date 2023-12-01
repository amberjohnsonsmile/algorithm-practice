export function isPalindromeOrPermutation(characters) {
  // Count the characters
  const characterHash = {}
  for (let i = 0; i < characters.length; i++) {
    const current = characters[i]
    if (current in characterHash) {
      characterHash[current] += 1
    } else {
      characterHash[current] = 1
    }
  }

  // There can only be one character that has an odd count in a palindrome
  let oddEntries = 0
  Object.values(characterHash).forEach((count) => {
    if (count % 2 != 0) {
      oddEntries++
    }
  })

  return oddEntries <= 1
}
