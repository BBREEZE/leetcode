/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome2 = function(x) {
  if(x < 0){
    return false
  }
  if(x === 0){
    return true
  }
  if(String(x).split('').reverse()[0] === '0'){
    return false
  }
  return Number(String(x).split('').reverse().join('')) === x
};
var isPalindrome = function(x) {

  if(x<0){
    return false
  }else if(x===0){
    return true
  }else if(x%10===0){
    return false
  }
  let num = 0
  let sNum = x
  while(sNum>num){
    num = num*10+sNum%10
    if(sNum>num){
      sNum=Math.floor(sNum/10)
    }else{
      return sNum === num
    }
  }
  return sNum === num
};


console.assert(true === isPalindrome(121), '121错误')
console.assert(false === isPalindrome(-121), '-121错误')
console.assert(false === isPalindrome(10), '10错误')
console.assert(false === isPalindrome(-101), '-101错误')
console.assert(true === isPalindrome(0), '0错误')
console.assert(true === isPalindrome(11), '11')