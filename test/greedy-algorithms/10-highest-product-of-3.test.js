import * as assert from 'assert'
import { findHighestProduct } from '../../src/greedy-algorithms/10-highest-product-of-3.js'

describe('findHighestProduct', function () {
  it('throws an error if fewer than three items are passed in', function () {
    const result = () => findHighestProduct([2, 1])
    assert.throws(result, Error)
  })

  it('returns the highest possible value of multiplying three integers', function () {
    const result = findHighestProduct([2, 1, 6, 8, 3, 10])
    const expected = 480
    assert.equal(result, expected)
  })

  it('works with negative numbers', function () {
    const result = findHighestProduct([-10, -10, 1, 3, 2])
    const expected = 300
    assert.equal(result, expected)
  })
})
