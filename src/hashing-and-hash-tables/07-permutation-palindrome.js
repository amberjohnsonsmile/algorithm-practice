export function isPalindromeOrPermutation(characters) {
  const unpairedSet = new Set()
  for (let char of characters) {
    if (unpairedSet.has(char)) {
      unpairedSet.delete(char)
    } else {
      unpairedSet.add(char)
    }
  }
  return unpairedSet.size <= 1
}
