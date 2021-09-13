/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 二分查找
// 刚开始左右指针指向整个数组，然后根据中间值与目标值的比较判断在那一边，然后移动指针减少一半范围。
var search = function(nums, target) {
  let left = 0
  let right = nums.length-1
  while(left <= right){
    let mid = left + Math.floor((right-left)/2)
    if(nums[mid] === target){
      return mid
    }else if(nums[mid] <　target){
      left = mid +1
    }else if(nums[mid] > target){
      right = mid -1
    }
  }
  return -1
};



// console.log(search([-1,0,3,5,9,12], 9), '1')
console.assert(search([-1,0,3,5,9,12], 9) === 4, '1')
console.log(search([-1,0,3,5,9,12], 2), '2')
console.assert(search([-1,0,3,5,9,12], 2) === -1, '2')