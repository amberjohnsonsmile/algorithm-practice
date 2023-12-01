import * as assert from 'assert'
import { getMaxProfit } from '../../src/greedy-algorithms/09-apple-stocks.js'

describe('getMaxProfit', function () {
  it('returns the highest amount possible with one buy and one sell', function () {
    const stockPrices = [10, 7, 5, 8, 11, 9]
    const result = getMaxProfit(stockPrices)
    assert.equal(result, 6)
  })

  it('returns the highest amount even when the first item is the highest', function () {
    const stockPrices = [15, 10, 7, 5, 8, 11, 9]
    const result = getMaxProfit(stockPrices)
    assert.equal(result, 6)
  })

  it('returns the highest amount when the second item is the highest', function () {
    const stockPrices = [7, 15, 10, 5, 8, 11, 9]
    const result = getMaxProfit(stockPrices)
    assert.equal(result, 8)
  })
})
