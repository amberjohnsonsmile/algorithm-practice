export function shuffleInPlace(ints) {
  const order = []
  for (let i = 0; i < ints.length; i++) {
    // Loop to generate a random index until we get one that's not already in the array
    let randomInt = getRandom(0, ints.length)
    while (order.includes(randomInt)) {
      randomInt = getRandom(0, ints.length)
    }
    order[i] = randomInt
  }

  let temp
  for (let i = 0; i < order.length; i++) {
    // Value that will be switched out
    temp = ints[i]
    const orderIndex = order[i]

    // Switch the two values
    ints[i] = ints[orderIndex]
    ints[orderIndex] = temp
  }

  return ints
}

export function getRandom(floor, ceiling) {
  const rangeSize = ceiling - floor
  const randomValue = floor + Math.random() * rangeSize
  return Math.floor(randomValue)
}
