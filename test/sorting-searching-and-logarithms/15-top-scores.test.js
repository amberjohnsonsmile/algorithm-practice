import * as assert from 'assert'
import { sortScores } from '../../src/sorting-searching-and-logarithms/15-top-scores.js'

describe('sortScores', function () {
  it('returns array of scores in the right order', function () {
    const unsortedScores = [37, 89, 41, 65, 91, 53]
    const HIGHEST_POSSIBLE_SCORE = 100

    const result = sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE)
    const expected = [91, 89, 65, 53, 41, 37]
    assert.deepEqual(result, expected)
  })

  it('returns array of scores with repeats in the right order', function () {
    const unsortedScores = [12, 49, 99, 21, 98, 2, 5, 88, 5]
    const HIGHEST_POSSIBLE_SCORE = 100

    const result = sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE)
    const expected = [99, 98, 88, 49, 21, 12, 5, 2]
    assert.deepEqual(result, expected)
  })
})
