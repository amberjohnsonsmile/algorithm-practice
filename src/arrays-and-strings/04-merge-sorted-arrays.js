export function mergeArrays(firstArray, secondArray) {
  const mergedArray = []

  let i = 0
  let j = 0

  while (i < firstArray.length || j < secondArray.length) {
    if (firstArray[i] < secondArray[j]) {
      mergedArray.push(firstArray[i])
      i++
    } else {
      mergedArray.push(secondArray[j])
      j++
    }
  }

  return mergedArray
}
