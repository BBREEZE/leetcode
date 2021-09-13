/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 二分查找 
// 先找到要找的值 然后再看左右是否也是要找的值 
 var searchRange = function(nums, target) {
  let left = 0
  let right = nums.length-1
  let res = [-1,-1]
  while(left <= right){
    let mid = left + Math.floor((right-left)/2)
    if(nums[mid] === target){
      let i = 1
      res = [mid,mid]
      while(nums[mid-i] === target){
        res[0] = mid-i
        i++
      }
      i=0
      while(nums[mid+i] === target){
        res[1] = mid+i
        i++
      }
      return res
    }else if(nums[mid] < target){
      left = mid + 1
    }else if(nums[mid] > target){
      right = mid -1
    }
  }
  return res
};
console.assert(searchRange([5,7,7,8,8,10], 8).toString() === [3,4].toString(), '1')
console.assert(searchRange([5,7,7,8,8,10], 6).toString() === [-1,-1].toString(), '2')
console.assert(searchRange([], 0).toString() === [-1,-1].toString(), '3')