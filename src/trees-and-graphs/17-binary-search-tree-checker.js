// Items on the left must be smaller, right must be larger
export function isValidBinarySearchTree(baseNode) {
  const nodesAndBounds = []
  nodesAndBounds.push({
    node: baseNode,
    lowerBound: Number.NEGATIVE_INFINITY,
    upperBound: Number.POSITIVE_INFINITY
  })

  // Look depth first
  while (nodesAndBounds.length) {
    const { node, lowerBound, upperBound } = nodesAndBounds.pop()

    if (node.value <= lowerBound || node.value >= upperBound) {
      return false
    }

    if (node.left) {
      nodesAndBounds.push({
        node: node.left,
        lowerBound,
        // If it's on the left, its ancestor must be greater
        upperBound: node.value
      })
    }

    if (node.right) {
      nodesAndBounds.push({
        node: node.right,
        // If it's on the right, its ancestor must be less
        lowerBound: node.value,
        upperBound
      })
    }
  }

  return true
}
