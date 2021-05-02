// Newman-Conway sequence: P(n) = P( P(n - 1)) + P(n - P(n - 1)), with intial conditions P(1)=1 and P(2)=1
// Time Complexity:
// Space Complexity:

newmanConway = (num) => {
  let result = "1 1 "

  if (num < 1) {
    throw Error("Number must be greater than or equal to 1");
  } else if (num === 1) {
    return result[0];

  } else if (num === 2) {
    return result.trim();
  }

  for (let i = 3; i <= num; i++) {
    result += `${p(i)} `;
  }
  return result.trim();
}

const arr = [0, 1, 1]

p = (n) => {
  if (arr[n]) {
    return arr[n];
  }

  const pOfN = p(p(n - 1)) + p(n - p(n - 1));
  arr.push(pOfN);
  return pOfN;
}

newmanConwayIterative = (num) => {
  let result = "";
  let arr = [0, 1, 1];
  for (let i = 1; i <= num; i++) {
    if (i === 1 || i === 2) {
      result += '1 '
    } else {
      let inner = i - 1;
      right = i - tempLeft;
      pOfNum = tempLeft + tempRight;
      result += `${pOfN} `
    }
  }

}





module.exports = {
  newmanConway
};