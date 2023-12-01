import * as assert from 'assert'
import { countWords } from '../../src/hashing-and-hash-tables/08-word-cloud-data.js'

describe('countWords', function () {
  it('returns the correct number for each word', function () {
    const result = countWords(
      'After beating the eggs, Dana read the next step: Add milk and eggs, then add flour and sugar.'
    )
    const expected = {
      add: 2,
      after: 1,
      and: 2,
      beating: 1,
      dana: 1,
      eggs: 2,
      flour: 1,
      milk: 1,
      next: 1,
      read: 1,
      step: 1,
      sugar: 1,
      the: 2,
      then: 1
    }
    assert.deepEqual(result, expected)
  })
})
