// Optimized for space
export function findRepeat(numbers) {
  let floor = 1
  let ceiling = numbers.length - 1

  while (floor < ceiling) {
    const midpoint = Math.floor(floor + (ceiling - floor) / 2)
    const lowerRangeFloor = floor
    const lowerRangeCeiling = midpoint
    const upperRangeFloor = midpoint + 1
    const upperRangeCeiling = ceiling

    const distinctPossibleIntegersInLowerRange =
      lowerRangeCeiling - lowerRangeFloor + 1
    const distinctPossibleIntegersInUpperRange =
      upperRangeCeiling - upperRangeFloor + 1

    let itemsInLowerRange = 0
    let itemsInUpperRange = 0
    numbers.forEach((item) => {
      if (item >= lowerRangeFloor && item <= lowerRangeCeiling) {
        itemsInLowerRange += 1
      } else if (item >= upperRangeFloor && item <= upperRangeCeiling) {
        itemsInUpperRange += 1
      }
    })

    if (itemsInLowerRange > distinctPossibleIntegersInLowerRange) {
      floor = lowerRangeFloor
      ceiling = lowerRangeCeiling
    } else if (itemsInUpperRange > distinctPossibleIntegersInUpperRange) {
      floor = upperRangeFloor
      ceiling = upperRangeCeiling
    } else {
      throw new Error('No duplicates found')
    }
  }

  return floor
}

// Optimized for time
// export function findRepeat(numbers) {
//   const numberSet = new Set()
//   for (let i = 0; i < numbers.length; i++) {
//     if (numberSet.has(numbers[i])) {
//       return numbers[i]
//     }
//     numberSet.add(numbers[i])
//   }

//   throw new Error('No duplicates found')
// }
