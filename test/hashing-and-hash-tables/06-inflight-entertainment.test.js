import * as assert from 'assert'
import { lengthsAddUp } from '../../src/hashing-and-hash-tables/06-inflight-entertainment.js'

describe('lengthsAddUp', function () {
  it('returns true when there are two movies that add up to exactly the flight length', () => {
    // 50 + 70 = 120
    const movieLengths = [50, 60, 70, 80]
    const flightLength = 120

    const result = lengthsAddUp(flightLength, movieLengths)
    assert.equal(result, true)
  })

  it('returns false when there are NOT two movies that add up to exactly the flight length', () => {
    const movieLengths = [50, 60, 70, 80]
    const flightLength = 190

    const result = lengthsAddUp(flightLength, movieLengths)
    assert.equal(result, false)
  })
})
