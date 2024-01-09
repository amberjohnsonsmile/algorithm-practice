export function colorGraph(graph, colors) {
  graph.forEach((node) => {
    if (node.neighbors.has(node)) {
      throw new Error(
        `Legal coloring impossible for node with loop: ${node.label}`
      )
    }

    // Get the node's neighbors' colors, as a set so we
    // can check if a color is illegal in constant time
    const illegalColors = new Set()

    node.neighbors.forEach((neighbor) => {
      if (neighbor.color !== null) {
        illegalColors.add(neighbor.color)
      }
    })

    // Assign the first legal color
    for (let i = 0; i < colors.length; i++) {
      const color = colors[i]

      if (!illegalColors.has(color)) {
        node.color = color
        break
      }
    }
  })
  return graph
}

// // Color a graph using maxDegree + 1 colors
// export function colorGraph(graphNode, maxDegree) {
//   const nodes = [graphNode]
//   let currentColor = 0

//   while (nodes.length) {
//     const currentNode = nodes.shift()
//     currentNode.color = currentColor
//     currentColor = getNextColor(currentColor, maxDegree)

//     currentNode.neighbors.forEach((neighbor) => {
//       if (!neighbor.color) {
//         nodes.push(neighbor)
//       }
//     })
//   }
//   return graphNode
// }

// function getNextColor(color, maxDegree) {
//   if (color + 1 > maxDegree + 1) {
//     return 0
//   } else {
//     return color + 1
//   }
// }
