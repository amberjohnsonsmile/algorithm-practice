import * as assert from 'assert'
import { BinaryTreeNode } from '../../src/trees-and-graphs/binary-tree-node.js'
import { isValidBinarySearchTree } from '../../src/trees-and-graphs/17-binary-search-tree-checker.js'

describe('isValidBinarySearchTree', function () {
  it('returns true for a tree with correct nodes', function () {
    const baseNode = new BinaryTreeNode(10)
    const left1 = new BinaryTreeNode(5)
    const right1 = new BinaryTreeNode(15)
    const left2 = new BinaryTreeNode(4)
    const right2 = new BinaryTreeNode(6)
    const left3 = new BinaryTreeNode(14)
    const right3 = new BinaryTreeNode(16)

    left1.left = left2
    left1.right = right2
    right1.left = left3
    right1.right = right3
    baseNode.left = left1
    baseNode.right = right1

    const result = isValidBinarySearchTree(baseNode)
    assert.equal(result, true)
  })

  it('returns false for a tree with one incorrect node', function () {
    const baseNode = new BinaryTreeNode(10)
    baseNode.left = new BinaryTreeNode(15)
    baseNode.right = new BinaryTreeNode(20)

    const result = isValidBinarySearchTree(baseNode)
    assert.equal(result, false)
  })

  it('returns false for a tree with multiple incorrect nodes', function () {
    const baseNode = new BinaryTreeNode(10)
    const left1 = new BinaryTreeNode(5)
    const right1 = new BinaryTreeNode(15)
    const left2 = new BinaryTreeNode(4)
    const right2 = new BinaryTreeNode(6)
    const left3 = new BinaryTreeNode(16)
    const right3 = new BinaryTreeNode(14)

    left1.left = left2
    left1.right = right2
    right1.left = left3
    right1.right = right3
    baseNode.left = left1
    baseNode.right = right1

    const result = isValidBinarySearchTree(baseNode)
    assert.equal(result, false)
  })

  it('returns false for a tree with an incorrect distant ancestor', function () {
    const baseNode = new BinaryTreeNode(10)
    const left1 = new BinaryTreeNode(5)
    const right1 = new BinaryTreeNode(15)
    const left2 = new BinaryTreeNode(4)
    const right2 = new BinaryTreeNode(6)
    // This is right of the 10 so it should fail
    const left3 = new BinaryTreeNode(9)
    const right3 = new BinaryTreeNode(16)

    left1.left = left2
    left1.right = right2
    right1.left = left3
    right1.right = right3
    baseNode.left = left1
    baseNode.right = right1

    const result = isValidBinarySearchTree(baseNode)
    assert.equal(result, false)
  })
})
