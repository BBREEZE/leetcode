/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  let prev = 0
  let last = 0
  let content = []
  let max = 0
  let strList = s.split('')
  for(let i in strList){
    last = i
    if(content.includes(strList[i])){
      while(1){
        if(content[0] && content[0] !== strList[i]){
          content.shift()
        }else{
          content.shift()
          break
        }
      }
      content.push(strList[i])
      prev = content.indexOf(strList[i])
    }else{
      content.push(strList[i])
      max = content.length > max ? content.length : max
    }
  }
  return strList.length === 0 ? 0 : max
};
let s = "pwwkew"



var lengthOfLongestSubstring2 = function(s) {
  // 哈希集合，记录每个字符是否出现过
  const occ = new Set();
  const n = s.length;
  // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
  let rk = -1, ans = 0;
  for (let i = 0; i < n; ++i) {
      if (i != 0) {
          // 左指针向右移动一格，移除一个字符
          occ.delete(s.charAt(i - 1));
      }
      while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
          // 不断地移动右指针
          occ.add(s.charAt(rk + 1));
          ++rk;
      }
      // 第 i 到 rk 个字符是一个极长的无重复字符子串
      ans = Math.max(ans, rk - i + 1);
  }
  return ans;
};

console.log(lengthOfLongestSubstring(s))
console.log(lengthOfLongestSubstring2(s))