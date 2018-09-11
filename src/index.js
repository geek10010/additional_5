module.exports = function check(str, bracketsConfig) {
  
  let strLength = str.length;
  let checkStack = [];
  let bracketsPairs = {};
  let currentBracket;
  let previousBracket;

  if (strLength % 2 > 0) {
    return false;
  }
  
  for (let i = 0; i < bracketsConfig.length; i++) {
    bracketsPairs[bracketsConfig[i][0]] = bracketsConfig[i][1];
  }
  
  for (let i = 0; i < strLength; i++) {
    currentBracket = str[i];
    previousBracket = checkStack[checkStack.length - 1];
    
    if (currentBracket === bracketsPairs[previousBracket]) {
      checkStack.pop();
    } else {
      checkStack.push(currentBracket);
    }
  }
  
  return checkStack.length === 0;
};
