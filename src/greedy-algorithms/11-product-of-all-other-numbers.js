export function getProductOfAllIntsExceptAtIndex(intArray) {
  const productArray = []
  let productsBeforeIndex = []
  let productsAfterIndex = []

  let productSoFar = 1
  for (let i = 0; i < intArray.length; i++) {
    productsAfterIndex[i] = productSoFar
    productSoFar *= intArray[i]
  }

  productSoFar = 1
  for (let i = intArray.length - 1; i >= 0; i--) {
    productsBeforeIndex[i] = productSoFar
    productSoFar *= intArray[i]
  }

  for (let i = 0; i < intArray.length; i++) {
    productArray[i] = productsBeforeIndex[i] * productsAfterIndex[i]
  }

  return productArray
}
