/**
 * @param {string} s
 * @return {string}
 */
var findPalindrome = (s, l, r) => {
  while(l>=0&&r<s.length&&s[l]===s[r]){
    l--
    r++
  }
  return s.substring(l+1, r)
}
var longestPalindrome = function (s) {
  let res = ''
  let res2 = ''
  let resT = ''
  for(let i=0;i<s.length;i++){
    res = findPalindrome(s, i-1, i+1)
    if(s.split('')[i] === s.split('')[i+1]){
      res2 = s.substring(i, i+2)
      if(resT.length < res2.length){
        resT = res2
      }
      res2 = findPalindrome(s, i-1, i+2)
    }
    if(resT.length < res.length){
      resT = res
    }
    if(resT.length < res2.length){
      resT = res2
    }
  }
  return resT
};
console.assert(longestPalindrome("babad") === "bab", '1')
console.assert(longestPalindrome("cbbd") === "bb", '2')
console.assert(longestPalindrome("a") === "a", '3')
console.assert(longestPalindrome("ac") === "a", '4')
console.assert(longestPalindrome("bb") === "bb", '5')
console.assert(longestPalindrome("cbbd") === "bb", '6')