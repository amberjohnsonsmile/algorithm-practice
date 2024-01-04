import * as assert from 'assert'
import { treeIsSuperBalanced } from '../../src/trees-and-graphs/16-balanced-binary-tree.js'
import { BinaryTreeNode } from '../../src/trees-and-graphs/binary-tree-node.js'

describe('treeIsSuperBalanced', function () {
  it('returns true when the diff between any two node depths is 1 or less', function () {
    // Only two leaves and they are at the same depth
    const baseNode = new BinaryTreeNode(getRandomInt())
    baseNode.insertLeft(getRandomInt())
    baseNode.insertRight(getRandomInt())

    const result = treeIsSuperBalanced(baseNode)
    assert.equal(result, true)
  })

  it('returns false when the diff between any two node depths is greater than 1', function () {
    const baseNode = new BinaryTreeNode(getRandomInt())

    baseNode.insertRight(getRandomInt())
    baseNode.right.insertRight(getRandomInt())
    baseNode.right.right.insertRight(getRandomInt())
    baseNode.insertLeft(getRandomInt())

    const result = treeIsSuperBalanced(baseNode)
    assert.equal(result, false)
  })

  it('returns false when there are more than two depths', function () {
    const baseNode = new BinaryTreeNode(getRandomInt())

    // Depth 1
    baseNode.insertRight(getRandomInt())
    baseNode.insertLeft(getRandomInt())
    // Depth 2
    baseNode.left.insertRight(getRandomInt())
    baseNode.left.insertLeft(getRandomInt())
    // Depth 3
    baseNode.left.left.insertLeft(getRandomInt())

    const result = treeIsSuperBalanced(baseNode)
    assert.equal(result, false)
  })
})

function getRandomInt() {
  return Math.floor(Math.random() * 10)
}
