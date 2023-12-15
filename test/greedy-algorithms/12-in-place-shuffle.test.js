import * as assert from 'assert'
import {
  getRandom,
  shuffleInPlace
} from '../../src/greedy-algorithms/12-in-place-shuffle.js'

describe('in place shuffle', function () {
  describe('getRandom', function () {
    it('returns a random integer between the given range', function () {
      const result = getRandom(1, 10)
      assert.equal(result >= 1, true)
      assert.equal(result <= 10, true)
    })
  })

  describe('shuffleInPlace', function () {
    it('returns the same values in a different order', function () {
      const ints = [2, 1, -6, 3, -5]
      const result = shuffleInPlace(ints)
      assert.equal(result.length, 5)

      ints.forEach((int) => {
        assert.equal(result.includes(int), true)
      })
    })

    it('throws an error if there are fewer that two items', function () {
      const ints = [3]
      assert.throws(() => {
        shuffleInPlace(ints)
      }, Error)
    })
  })
})
