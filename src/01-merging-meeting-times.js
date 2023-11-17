export function mergeRanges(ranges) {
  // Sort
  const sortedRanges = ranges.sort((a, b) => a.startTime - b.startTime)
  console.log('sortedRanges: ', sortedRanges)

  // Initialize array
  const consolidated = []
  consolidated.push(sortedRanges[0])

  // Compare and add to new array
  sortedRanges.forEach((range) => {
    if (range.startTime > consolidated[consolidated.length - 1].endTime) {
      consolidated.push(range)
    } else if (range.endTime > consolidated[consolidated.length - 1].endTime) {
      consolidated[consolidated.length - 1].endTime = range.endTime
    }
  })

  return consolidated
}
