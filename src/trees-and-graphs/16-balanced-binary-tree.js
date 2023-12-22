// Superbalanced = diff between depths of any two nodes is <= 1
export function treeIsSuperBalanced(primaryNode) {
  const depths = []

  const nodes = []
  // Add the node and its depth
  nodes.push([primaryNode, 0])

  while (nodes.length) {
    const nodePair = nodes.pop()
    const node = nodePair[0]
    const depth = nodePair[1]

    // Check if it's a leaf
    if (!node.left && !node.right) {
      if (!depths.includes(depth)) {
        depths.push(depth)
      }

      const tooManyDepths = depths.length > 2
      const depthsTooFarApart =
        depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1
      if (tooManyDepths || depthsTooFarApart) {
        return false
      }
    } else {
      if (node.left) {
        nodes.push([node.left, depth + 1])
      }
      if (node.right) {
        nodes.push([node.right, depth + 1])
      }
    }
  }

  return true
}
