// Sort in better than O(nlogn) time
export function sortScores(scores, highestPossible) {
  // Use a map of every possible value and count them
  const scoreMap = createScoreMap(highestPossible)
  for (let i = 0; i < scores.length; i++) {
    const score = scores[i]
    scoreMap[score] = scoreMap[score] + 1
  }

  const sortedScores = []
  for (let i = highestPossible; i >= 0; i--) {
    if (scoreMap[i] >= 1) {
      sortedScores.push(i)
    }
  }

  return sortedScores
}

function createScoreMap(highestPossible) {
  const scoreMap = {}
  for (let i = 0; i <= highestPossible; i++) {
    scoreMap[i] = 0
  }
  return scoreMap
}
