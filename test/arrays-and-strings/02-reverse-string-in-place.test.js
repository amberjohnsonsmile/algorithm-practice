import * as assert from 'assert'
import { reverseStringInPlace } from '../../src/arrays-and-strings/02-reverse-string-in-place.js'

describe('reverseStringInPlace', function () {
  it('returns array of characters in the opposite order', () => {
    const result = reverseStringInPlace(['a', 'b', 'c', 'd', 'e'])
    assert.deepEqual(result, ['e', 'd', 'c', 'b', 'a'])
  })
})
