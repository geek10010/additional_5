module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 > 0) return false;
  let checkStack = [];
  let bracketsPairs = {};
  let currentBracket;
  let previousBracket;
  
  for (let i=0; i<bracketsConfig.length; i++) {
    bracketsPairs[bracketsConfig[i][0]] = bracketsConfig[i][1];
  }
  
  for (let i=0; i<str.length; i++) {
    currentBracket = str[i];
    previousBracket = checkStack[checkStack.length - 1];
    
    if (currentBracket === bracketsPairs[previousBracket]) {
      checkStack.pop();
    } else {
      checkStack.push(currentBracket);
    }
  }
  
  return (checkStack.length === 0) ? true : false;
}
