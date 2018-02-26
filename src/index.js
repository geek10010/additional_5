module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 > 0) return false;
  let arr = [];
  for (let i=0; i<str.length; i++) {
    if (str[i] === bracketsConfig[0][0]) {
      arr.push(str[i]);
    }
    if (str[i] === bracketsConfig[0][1]) {
      arr.pop(str[i]);
    }
  }
  
  if (arr.length === 0) {
    return true;
  } else {
    return false;
  }
}
