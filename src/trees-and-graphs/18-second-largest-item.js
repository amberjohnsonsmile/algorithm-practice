export function getSecondLargestItem(baseNode) {
  if (!baseNode.right && !baseNode.left) {
    throw new Error('The search tree needs at least 2 nodes')
  }

  let node = baseNode
  while (node) {
    if (node.left && !node.right) {
      return getLargestItem(node.left)
    }

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
