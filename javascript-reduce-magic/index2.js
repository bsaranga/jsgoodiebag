// mapping an filtering via reduce

var dataset = [];
for (var i = 0; i < 100000000; i++) {
  dataset.push(i);
}

function reducer(acc, value) {
  if (value % 2 == 0) acc.push(value * 2);
  return acc;
}

console.time('ReducerMethod');
dataset.reduce(reducer, []);
console.timeEnd('ReducerMethod');

console.time('FunctionalMethod');
dataset.filter((i) => i % 2 == 0).map((i) => i * 2);
console.timeEnd('FunctionalMethod');

// composing functions

function increment(input) {
  return input + 1;
}

function decrement(input) {
  return input - 1;
}

function double(input) {
  return input * 2;
}

function halve(input) {
  return input / 2;
}

const pipeline = [increment, double, decrement, halve];

let result = pipeline.reduce((acc, fn) => {
  return fn(acc);
}, 6);

console.log(result);

Number.prototype.pipe = function pipe() {
  let argFnList = [...pipe.arguments];
  return argFnList.reduce((acc, fn) => {
    return fn(acc);
  }, this.valueOf());
};

console.log(Number(6).pipe(increment, double, decrement, halve));
