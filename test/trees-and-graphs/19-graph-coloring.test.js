import * as assert from 'assert'
import { colorGraph } from '../../src/trees-and-graphs/19-graph-coloring'
import { GraphNode } from './graph-node'

describe('colorGraph', function () {
  it('returns a legally colored graph using maxDegree + 1 colors', function () {
    const graphNode = new GraphNode('Harry')
    graphNode.neighbors.add(new GraphNode('Bella'))
    graphNode.neighbors.add(new GraphNode('Katniss'))

    const result = colorGraph(graphNode, 2)
    assert.equal(result.color, 1)
  })
})
