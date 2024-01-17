// Color a graph using maxDegree + 1 colors
export function colorGraph(graph, colors) {
  graph.forEach((node) => {
    if (node.neighbors.has(node)) {
      throw new Error('Graph must not have a loop')
    }

    // Add illegal colors as a set
    const illegalColors = new Set()
    node.neighbors.forEach((neighbor) => {
      if (neighbor.color !== null) {
        illegalColors.add(neighbor.color)
      }
    })

    // Iterate through colors and set as long as it's not illegal
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
