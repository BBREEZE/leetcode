/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
 var carPooling = function(trips, capacity) {
  let car = []
  let sum = 0
  for(let i of trips){
    if(car[i[1]] === undefined){
      car[i[1]] = 0
    }
    if(car[i[2]] === undefined){
      car[i[2]] = 0
    }

    car[i[1]] = car[i[1]] + i[0]
    car[i[2]] = car[i[2]] - i[0]
  }
  for(let i of car){
    if(i === undefined){
      i = 0
    }
    sum = sum + i
    if(sum>capacity){
      return false
    }
  }
  return true
};
// console.assert(carPooling([[2,1,5],[3,3,7]],4)===false,'1')
// console.assert(carPooling([[2,1,5],[3,3,7]],5)===true,'2')
console.assert(carPooling([[2,1,5],[3,5,7]],3)===true,'3')
console.assert(carPooling([[3,2,7],[3,7,9],[8,3,9]],11)===true,'4')