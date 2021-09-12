/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes2 = function(nums) {
  for(let i=0;i<nums.length;i++){
    if(nums[i] === 0){
      for(let j=i+1;j<nums.length;j++){
        if(nums[j] !== 0){
          nums[i] = nums[j]
          nums[j] = 0
          break
        }
      }
    }
  }
  return nums
};
var moveZeroes = function(nums) {
  let j = 0
  for(let i=0;i<nums.length;i++){
    if(nums[i] !== 0){
      nums[j] = nums[i]
      j++
    }
  }
  for(;j<nums.length;j++){
    nums[j] = 0
  }
  return nums
};
console.assert(moveZeroes([0,1,0,3,12]).toString() === [1,3,12,0,0].toString(), '1失败')