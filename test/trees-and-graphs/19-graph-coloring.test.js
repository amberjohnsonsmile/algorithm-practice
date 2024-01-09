import * as assert from 'assert'
import { colorGraph } from '../../src/trees-and-graphs/19-graph-coloring.js'
import { GraphNode } from './graph-node.js'

describe('colorGraph', function () {
  it('returns a legally colored graph using maxDegree + 1 colors', function () {
    const a = new GraphNode('a')
    const b = new GraphNode('b')
    const c = new GraphNode('c')

    a.neighbors.add(b)
    b.neighbors.add(a)
    c.neighbors.add(b)
    b.neighbors.add(c)

    const graph = [a, b, c]
    const result = colorGraph(graph, ['red', 'green', 'blue'])
    assert.notEqual(result[0].color, result[1].color)
    assert.notEqual(result[0].color, result[2].color)
    assert.notEqual(result[1].color, result[2].color)
    assert.notEqual(result[3].color, result[3].color)
  })
})
