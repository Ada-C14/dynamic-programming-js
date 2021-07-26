
// Time Complexity:
// Space Complexity:

function newmanConway(num) {

  //from test, account for these base cases upfront:
  if (num == 1) {
    return "1";
  } else if (num == 2) {
    return "1 1";
  } else if (num < 1) {
    throw new Error;
  }
  
  let conwaySequence  = [1, 1];
  
  for (i = 3; i <= num; i++) {
    const lastValue = conwaySequence[i - 2];
    const newValue = conwaySequence[lastValue - 1] + conwaySequence[i - lastValue - 1];
    conwaySequence.push(newValue);
  }

  return conwaySequence.join(' ');

}

module.exports = {
  newmanConway
};