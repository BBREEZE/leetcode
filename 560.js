/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let map = new Map()
  map.set(0, 1)
  let count = 0
  let sums = 0
  for(let i=0;i<nums.length;i++){
    sums = sums + nums[i]
    if(map.has(sums-k)){
      count = count + map.get(sums-k)
    }
    if(map.has(sums)){
      map.set(sums, map.get(sums) + 1)
    }else{
      map.set(sums, 1)
    }
  }
  return count
};


console.assert(subarraySum([1,1,1], 2) === 2, '1')
console.assert(subarraySum([1,2,3], 3) === 2, '2')
console.assert(subarraySum([1,1,2,3,-2], 3) === 3, '3')
console.assert(subarraySum([1], 0) === 0, '4')