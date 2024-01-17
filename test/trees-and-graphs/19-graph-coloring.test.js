import * as assert from 'assert'
import { colorGraph } from '../../src/trees-and-graphs/19-graph-coloring.js'
import { GraphNode } from './graph-node.js'

describe('colorGraph', function () {
  it('returns a legally colored graph using maxDegree + 1 colors', function () {
    const a = new GraphNode('a')
    const b = new GraphNode('b')
    const c = new GraphNode('c')

    // a and b are connected
    a.neighbors.add(b)
    b.neighbors.add(a)
    // b and c are connected
    c.neighbors.add(b)
    b.neighbors.add(c)

    const graph = [a, b, c]
    const result = colorGraph(graph, ['red', 'green', 'blue'])

    const aColor = result[0].color
    const bColor = result[1].color
    const cColor = result[2].color

    assert.notEqual(aColor, bColor)
    assert.notEqual(bColor, cColor)
  })
})
