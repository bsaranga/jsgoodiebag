let countingNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = countingNums.reduce((acc, val) => {
  return (acc += val);
}, 0);

console.log(sum);

let colors = [
  ['red', 128],
  ['green', 56],
  ['blue', 100],
];

let reducer = function (outObj, item) {
  outObj[item[0]] = item[1];
  return outObj;
};

let result = colors.reduce(reducer, {});
console.log(result);

var data = [1, 2, 3];
var doubled = data.reduce((acc, val) => {
  acc.push(val * 2);
  return acc;
}, []);

console.log(doubled);

var allNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evens = allNums.reduce((acc, val) => {
  if (val % 2 == 0) acc.push(val);
  return acc;
}, []);

console.log(evens);

// calculating mean using a reducer

function meanReducer(acc, val, index, arr) {
  let intermediaryVal = acc + val;
  if (index == arr.length - 1) {
    return intermediaryVal / arr.length;
  }
  return intermediaryVal;
}

let nums = [5, 2, 6, 3, 2, 1, 5, 6, 7, 8, 9, 12];
console.log(nums.reduce(meanReducer, 0));
