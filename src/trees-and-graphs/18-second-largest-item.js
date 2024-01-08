export function getSecondLargestItem(baseNode) {
  if (!baseNode || (!baseNode.left && !baseNode.right)) {
    throw new Error('The binary search tree needs at least 2 nodes')
  }

  let node = baseNode
  while (node) {
    // The largest is the baseNode and it has a left subtree
    if (node.left && !node.right) {
      return getLargestItem(node.left)
    }

    // The largest is a childless child of the baseNode
    if (node.right && !node.right.left && !node.right.right) {
      return node.value
    }

    node = node.right
  }
}

function getLargestItem(baseNode) {
  let node = baseNode
  while (node) {
    if (!node.right) {
      return node.value
    }
    node = node.right
  }
}
