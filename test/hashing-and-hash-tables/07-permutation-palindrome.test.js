import * as assert from 'assert'
import { isPalindromeOrPermutation } from '../../src/hashing-and-hash-tables/07-permutation-palindrome.js'

describe('isPalindromeOrPermutation', function () {
  it('returns true when the characters already make a palindrome', function () {
    const result = isPalindromeOrPermutation('civic')
    assert.equal(result, true)
  })

  it('returns true when a permutation of the characters makes a palindrome', function () {
    const result = isPalindromeOrPermutation('ivicc')
    assert.equal(result, true)
  })

  it('returns false when the characters do not make a palindrome', function () {
    const result = isPalindromeOrPermutation('civil')
    assert.equal(result, false)
  })

  it('returns false when a permutation of the characters does not make a palindrome', function () {
    const result = isPalindromeOrPermutation('livci')
    assert.equal(result, false)
  })
})
