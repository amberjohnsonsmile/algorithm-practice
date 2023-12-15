import * as assert from 'assert'
import { findRotationPoint } from '../../src/sorting-searching-and-logarithms/13-find-rotation-point.js'

describe('findRotationPoint', function () {
  it('correctly identifies the index near the middle', function () {
    const words = [
      'ptolemaic',
      'retrograde',
      'supplant',
      'undulate',
      'xenoepist',
      'asymptote', // <-- rotates here!
      'babka',
      'banoffee',
      'engender',
      'karpatka',
      'othellolagkage'
    ]
    const result = findRotationPoint(words)
    const expected = 5
    assert.equal(result, expected)
  })

  it('correctly identifies the index in the first half', function () {
    const words = [
      'undulate',
      'xenoepist',
      'asymptote', // <-- rotates here!
      'babka',
      'banoffee',
      'engender',
      'karpatka',
      'othellolagkage',
      'ptolemaic',
      'retrograde',
      'supplant'
    ]
    const result = findRotationPoint(words)
    const expected = 2
    assert.equal(result, expected)
  })

  it('correctly identifies the index in the second half', function () {
    const words = [
      'engender',
      'karpatka',
      'othellolagkage',
      'ptolemaic',
      'retrograde',
      'supplant',
      'undulate',
      'xenoepist',
      'asymptote', // <-- rotates here!
      'babka',
      'banoffee'
    ]
    const result = findRotationPoint(words)
    const expected = 8
    assert.equal(result, expected)
  })
})
