import * as assert from 'assert'
import { BinaryTreeNode } from './binary-tree-node.js'
import { isValidBinarySearchTree } from '../../src/trees-and-graphs/17-binary-search-tree-checker.js'

describe('isValidBinarySearchTree', function () {
  it('returns true for a tree with correct nodes', function () {
    const baseNode = new BinaryTreeNode(10)

    baseNode.insertLeft(5)
    baseNode.left.insertLeft(4)
    baseNode.left.insertRight(6)

    baseNode.insertRight(15)
    baseNode.right.insertLeft(14)
    baseNode.right.insertRight(16)

    const result = isValidBinarySearchTree(baseNode)
    assert.equal(result, true)
  })

  it('returns false for a tree with one incorrect node', function () {
    const baseNode = new BinaryTreeNode(10)
    baseNode.insertLeft(15)
    baseNode.insertRight(20)

    const result = isValidBinarySearchTree(baseNode)
    assert.equal(result, false)
  })

  it('returns false for a tree with multiple incorrect nodes', function () {
    const baseNode = new BinaryTreeNode(10)
    baseNode.insertLeft(5)
    baseNode.left.insertLeft(4)
    baseNode.left.insertRight(6)

    baseNode.insertRight(15)
    baseNode.right.insertLeft(16)
    baseNode.right.insertRight(14)

    const result = isValidBinarySearchTree(baseNode)
    assert.equal(result, false)
  })

  it('returns false for a tree with an incorrect distant ancestor', function () {
    const baseNode = new BinaryTreeNode(10)
    baseNode.insertLeft(5)
    baseNode.left.insertLeft(4)
    baseNode.left.insertRight(6)

    baseNode.insertRight(15)
    baseNode.right.insertLeft(9)
    baseNode.right.insertRight(16)

    const result = isValidBinarySearchTree(baseNode)
    assert.equal(result, false)
  })
})
