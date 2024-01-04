// Returns the second largest item in a valid binary search tree
export function getSecondLargestItem(baseNode) {
  if (!baseNode.right) {
    return baseNode.value
  }

  let highestNode
  let node = baseNode
  while (node.right) {
    highestNode = {
      value: node.right.value,
      ancestor: node.value,
      child: node.right.left ? node.right.left.value : null
    }
    node = node.right
  }

  return highestNode.child ? highestNode.child : highestNode.ancestor
}
