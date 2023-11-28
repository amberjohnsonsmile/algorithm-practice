export function ordersAreCorrect(takeOutOrders, dineInOrders, whenServed) {
  let i = 0
  let j = 0
  let k = 0

  for (let i = 0; i < whenServed.length; i++) {
    if (whenServed[i] === takeOutOrders[j]) {
      j++
    } else if (whenServed[i] === dineInOrders[k]) {
      k++
    } else {
      return false
    }
  }

  return true
}
