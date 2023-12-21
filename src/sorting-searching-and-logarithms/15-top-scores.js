// Sort in better than O(nlogn) time
export function sortScores(scores, highestPossible) {
  // Use a map of every possible value and count them
  const countArray = createCountArray(highestPossible)
  for (let i = 0; i < scores.length; i++) {
    const score = scores[i]
    countArray[score] = countArray[score] + 1
  }

  const sortedScores = []
  for (let i = highestPossible; i >= 0; i--) {
    if (countArray[i] >= 1) {
      sortedScores.push(i)
    }
  }

  return sortedScores
}

function createCountArray(highestPossible) {
  const countArray = []
  for (let i = 0; i <= highestPossible; i++) {
    countArray[i] = 0
  }
  return countArray
}
