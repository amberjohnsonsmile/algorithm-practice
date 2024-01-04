import * as assert from 'assert'
import { BinaryTreeNode } from './binary-tree-node.js'
import { getSecondLargestItem } from '../../src/trees-and-graphs/18-second-largest-item.js'

describe('getSecondLargestItem', function () {
  it('returns correct value for tiny tree', function () {
    const baseNode = new BinaryTreeNode(10)
    baseNode.insertLeft(5)
    baseNode.insertRight(15)

    const result = getSecondLargestItem(baseNode)
    assert.equal(result, 10)
  })

  it('returns correct value for medium tree', function () {
    const baseNode = new BinaryTreeNode(10)

    baseNode.insertLeft(5)
    baseNode.left.insertLeft(4)
    baseNode.left.insertRight(6)

    baseNode.insertRight(15)
    baseNode.right.insertLeft(14)
    baseNode.right.insertRight(16)

    const result = getSecondLargestItem(baseNode)
    assert.equal(result, 15)
  })

  it('returns correct value when it is an ancestor of the largest item', function () {
    const baseNode = new BinaryTreeNode(10)

    baseNode.insertLeft(5)
    baseNode.left.insertLeft(4)
    baseNode.left.insertRight(6)

    baseNode.insertRight(15)
    baseNode.right.insertLeft(14)
    baseNode.right.insertRight(16)

    const result = getSecondLargestItem(baseNode)
    assert.equal(result, 15)
  })

  it('returns correct value when it is the child of the largest item', function () {
    const baseNode = new BinaryTreeNode(10)
    baseNode.insertLeft(5)
    baseNode.left.insertLeft(4)
    baseNode.left.insertRight(9)

    baseNode.insertRight(15)
    baseNode.right.insertLeft(14)
    baseNode.right.insertRight(17)
    baseNode.right.right.insertLeft(16)

    const result = getSecondLargestItem(baseNode)
    assert.equal(result, 16)
  })
})
