import * as assert from 'assert'
import { ordersAreCorrect } from '../../src/arrays-and-strings/05-cafe-order-checker.js'

describe('ordersAreCorrect', function () {
  it('returns false for an incorrect order', () => {
    const takeOutOrders = [1, 3, 5]
    const dineInOrders = [2, 4, 6]
    const whenServed = [1, 2, 4, 6, 5, 3]

    const result = ordersAreCorrect(takeOutOrders, dineInOrders, whenServed)
    assert.equal(result, false)
  })

  it('returns true for a correct order', () => {
    const takeOutOrders = [17, 8, 24]
    const dineInOrders = [12, 19, 2]
    const whenServed = [17, 8, 12, 19, 24, 2]

    const result = ordersAreCorrect(takeOutOrders, dineInOrders, whenServed)
    assert.equal(result, true)
  })
})
