import * as assert from 'assert'
import { findRepeat } from '../../src/sorting-searching-and-logarithms/14-find-repeat-space-edition.js'

describe('findRepeat', function () {
  it('identifies a repeated number', function () {
    const result = findRepeat([1, 3, 4, 3])
    const expected = 3
    assert.equal(result, expected)
  })

  it('throws an error when no duplicate is present', function () {
    assert.throws(function () {
      const result = findRepeat([1, 3, 2, 4])
      console.log(result)
    }, Error)
  })
})
