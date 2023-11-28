import * as assert from 'assert'
import { reverseWords } from '../../src/arrays-and-strings/03-reverse-words.js'

describe('reverseWords', function () {
  it('separates words based on spaces and returns them in the opposite order', () => {
    const message = [
      'c',
      'a',
      'k',
      'e',
      ' ',
      'p',
      'o',
      'u',
      'n',
      'd',
      ' ',
      's',
      't',
      'e',
      'a',
      'l'
    ]
    const result = reverseWords(message)
    assert.deepEqual(result.join(''), 'steal pound cake')
  })
})
