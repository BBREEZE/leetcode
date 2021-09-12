/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
   if(nums.length === 0){
     return 0
   }
  let fast = 1
  let slow = 0
  while(fast<nums.length){
    if(nums[fast] !== nums[fast-1]){
      slow++
      nums[slow] = nums[fast]
    }
    fast++
  }
  return slow + 1
};
console.assert(removeDuplicates([1,1,2]) === 2, '[1,1,2]失败')
console.assert(removeDuplicates([0,0,1,1,1,2,2,3,3,4]) === 5, '[0,0,1,1,1,2,2,3,3,4]失败')