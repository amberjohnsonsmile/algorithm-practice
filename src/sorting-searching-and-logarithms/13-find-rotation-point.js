export function findRotationPoint(words) {
  let floorIndex = 0
  let ceilingIndex = words.length
  let half = Math.floor(words.length / 2)

  while (floorIndex < ceilingIndex) {
    // It's the rotation point if it's before the previous word AND the next word
    if (words[half] < words[half - 1] && words[half] < words[half + 1]) {
      return half
    } else if (words[half] < words[0]) {
      ceilingIndex = half
    } else {
      floorIndex = half
    }
    half = floorIndex + Math.floor((ceilingIndex - floorIndex) / 2)
  }
}
