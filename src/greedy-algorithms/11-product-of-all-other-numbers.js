export function getProductOfAllIntsExceptAtIndex(intArray) {
  const productArray = []

  let productSoFar = 1
  for (let i = 0; i < intArray.length; i++) {
    productArray[i] = productSoFar
    productSoFar *= intArray[i]
  }

  productSoFar = 1
  for (let i = intArray.length - 1; i >= 0; i--) {
    productArray[i] = productArray[i] * productSoFar
    productSoFar *= intArray[i]
  }

  return productArray
}
