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