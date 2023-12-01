export function lengthsAddUp(flightLength, movieLengths) {
  const movieLengthSet = new Set()

  for (let i = 0; i < movieLengths.length; i++) {
    if (movieLengthSet.has(flightLength - movieLengths[i])) {
      return true
    } else {
      movieLengthSet.add(movieLengths[i])
    }
  }

  return false
}
