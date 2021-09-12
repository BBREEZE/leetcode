/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
 var corpFlightBookings = function(bookings, n) {
  let diffArr = new Array(n+1).fill(0)
  let arr = new Array(n+1).fill(0)
  let sum = 0
  for(let i of bookings){
    diffArr[i[0]] = diffArr[i[0]] + i[2]
    diffArr[i[1]+1] = diffArr[i[1]+1] - i[2]
  }
  let a = arr.map((v, i) => {
    sum = sum + diffArr[i]
    return v + sum
  })
  a.shift()
  return a

};
console.assert(corpFlightBookings([[1,2,10],[2,3,20],[2,5,25]],5).toString()===[10,55,45,25,25].toString(),'1')
console.assert(corpFlightBookings([[1,2,10],[2,2,15]],2).toString()===[10,25].toString(),'2')