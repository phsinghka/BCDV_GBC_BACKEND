const mulitplyTwoNumbers = (x, y) => {
  if (!Number.isInteger(x) && !Number.isInteger(y)) {
    throw Error('Please Enter only Number');
  }
  return x * y;
};

const evenDoubler = (x) => {
  if (!Number.isInteger(x)) {
    throw Error('Please Enter only Number');
  }
  if (x % 2 === 0) {
    return x * x;
  } else {
    return 0;
  }
};

exports = {
  mulitplyTwoNumbers,
  evenDoubler,
};
