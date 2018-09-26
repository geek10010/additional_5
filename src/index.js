module.exports = function check(str, bracketsConfig) {
  const strLength = str.length;
  const checkStack = [];
  const bracketsPairs = {};

  if (strLength % 2 > 0) {
    return false;
  }

  bracketsConfig.forEach((element) => {
    const [openBracket, closeBracket] = element;
    bracketsPairs[openBracket] = closeBracket;
  });

  for (let i = 0; i < strLength; i += 1) {
    const currentBracket = str[i];
    const previousBracket = checkStack[checkStack.length - 1];

    if (currentBracket === bracketsPairs[previousBracket]) {
      checkStack.pop();
    } else {
      checkStack.push(currentBracket);
    }
  }

  return checkStack.length === 0;
};
