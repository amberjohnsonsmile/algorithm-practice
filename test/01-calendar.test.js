import { calendar } from '../src/01-calendar.js'
import * as assert from 'assert'

describe('calendar', function () {
  it('should return the input', function () {
    const input = 'hello wool'
    const result = calendar(input)
    assert.equal(input, result)
  })
})
