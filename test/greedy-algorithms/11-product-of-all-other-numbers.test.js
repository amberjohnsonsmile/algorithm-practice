import * as assert from 'assert'
import { getProductOfAllIntsExceptAtIndex } from '../../src/greedy-algorithms/11-product-of-all-other-numbers.js'

describe('getProductOfAllIntsExceptAtIndex', function () {
  it('returns the correct product when there are positive integers in the array', function () {
    const result = getProductOfAllIntsExceptAtIndex([1, 7, 3, 4])
    const expected = [84, 12, 28, 21]
    assert.deepEqual(result, expected)
  })

  it('returns the correct product with a longer array', function () {
    const result = getProductOfAllIntsExceptAtIndex([3, 1, 2, 5, 6, 4])
    const expected = [240, 720, 360, 144, 120, 180]
    assert.deepEqual(result, expected)
  })

  it('works with zeros', function () {
    const result = getProductOfAllIntsExceptAtIndex([2, 5, 0, 1])
    const expected = [0, 0, 10, 0]
    assert.deepEqual(result, expected)
  })

  it('works with negative numbers', function () {
    const result = getProductOfAllIntsExceptAtIndex([-1, 2, 4, 6])
    const expected = [48, -24, -12, -8]
    assert.deepEqual(result, expected)
  })
})
