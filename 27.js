/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
   let fast = 0
   let slow = 0
  while(fast < nums.length){
    if(nums[fast] !== val){
      nums[slow] = nums[fast]
      slow++
    }
    fast++
  }
  return slow
};
console.assert(removeElement([3,2,2,3], 3) === 2, '1失败')
console.assert(removeElement([0,1,2,2,3,0,4,2],2) === 5, '2失败')