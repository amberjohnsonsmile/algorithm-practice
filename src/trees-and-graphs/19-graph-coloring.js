// Color a graph using maxDegree + 1 colors
export function colorGraph(graphNode, maxDegree) {
  // Colors will be represented by an array of numbers
  let currentNode = graphNode
  let colors = getColors(maxDegree + 1)

  while (currentNode) {
    // Set the color as long as the adjacent neighbors dont' have that color
  }

  return graphNode
}
