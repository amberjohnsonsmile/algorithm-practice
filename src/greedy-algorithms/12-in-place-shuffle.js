export function shuffleInPlace(ints) {
  if (ints.length < 2) {
    throw new Error('At least two integers must be provided to shuffle')
  }

  for (let i = 0; i < ints.length; i++) {
    const randomIndex = getRandom(0, ints.length)
    if (randomIndex !== i) {
      const displacedValue = ints[i]
      ints[i] = ints[randomIndex]
      ints[randomIndex] = displacedValue
    }
  }

  return ints
}

export function getRandom(floor, ceiling) {
  const rangeSize = ceiling - floor
  const randomValue = floor + Math.random() * rangeSize
  return Math.floor(randomValue)
}
