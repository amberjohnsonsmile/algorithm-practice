import * as assert from 'assert'
import {
  BinaryTreeNode,
  treeIsSuperBalanced
} from '../../src/trees-and-graphs/16-balanced-binary-tree.js'

describe('treeIsSuperBalanced', function () {
  it('returns true when the diff between any two node depths is 1 or less', function () {
    // Only two leaves and they are at the same depth
    const baseNode = new BinaryTreeNode(getRandomInt())
    baseNode.left = new BinaryTreeNode(getRandomInt())
    baseNode.right = new BinaryTreeNode(getRandomInt())

    const result = treeIsSuperBalanced(baseNode)
    assert.equal(result, true)
  })

  it('returns false when the diff between any two node depths is greater than 1', function () {
    const node1 = new BinaryTreeNode(getRandomInt())
    const node2 = new BinaryTreeNode(getRandomInt())
    const node3 = new BinaryTreeNode(getRandomInt())
    const baseNode = new BinaryTreeNode(getRandomInt())

    // Leaf at depth 3
    node3.left = new BinaryTreeNode(getRandomInt())
    node2.left = node3
    node1.left = node2
    baseNode.left = node1
    // Leaf at depth 1
    baseNode.right = new BinaryTreeNode(getRandomInt())

    const result = treeIsSuperBalanced(baseNode)
    assert.equal(result, false)
  })

  it('returns false when there are more than two depths', function () {
    // Leaf at depth 3
    const node1 = new BinaryTreeNode(getRandomInt())
    const node2 = new BinaryTreeNode(getRandomInt())
    const node3 = new BinaryTreeNode(getRandomInt())
    const node4 = new BinaryTreeNode(getRandomInt())
    const baseNode = new BinaryTreeNode(getRandomInt())

    node2.left = node4
    node2.right = node3
    node1.left = node2
    // Leaf at depth 2
    node1.right = new BinaryTreeNode(getRandomInt())
    baseNode.left = node1
    // Leaf at depth 1
    baseNode.right = new BinaryTreeNode(getRandomInt())

    const result = treeIsSuperBalanced(baseNode)
    assert.equal(result, false)
  })
})

function getRandomInt() {
  return Math.floor(Math.random() * 10)
}
