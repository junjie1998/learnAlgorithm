/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
  //   if (s.length==0) {
  //       return 0
  //   }
  // let str = "",
  //   obj = {};
  // for (let i = 0; i < s.length; i++) {
  //   for (let j = i; j < s.length; j++) {
  //     const item = s[j];
  //     if (str.indexOf(item) == -1) {
  //       str += item;
  //     } else {
  //       obj[str] = str.length;
  //       str = "";
  //       break
  //     }
  //   }
  // }
  // return Object.keys(obj).length ? Math.max(...Object.values(obj)) : s.length;
  let length = s.length;
  if (length === 0 || length === 1) {
    return length;
  }
  let max = 1;
  let str = s.substr(0, 1);
  for (let i = 1; i < length; i++) {
    let index = str.indexOf(s[i]);
    if (index > -1) {
      // 当前字符重复，则更新不重复子串
      str = str.substr(index + 1) + s[i];
    } else {
      str += s[i];
    }
    if (str.length > max) {
      // 当前不重复子串长度超过max，则更新max
      max = str.length;
    }
  }
  return max;
};

const s = "jbpnbwwd";
console.log(lengthOfLongestSubstring(s));
