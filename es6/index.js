// ES6 Features

// Shorthand property initializers
const g = 9.81;
const pi = 3.14159;
const dimensions = 3;
const timeAxis = 'forward';
const age = 13900000000;
const universeType = 'cyclic';
let ct = 25000;

function getCurrentAge() {
  return this.age + this.ct;
}

function createUniverse(constants, dimensions, timeAxis = 'forward', timeRate) {
  return {
    constants: { ...constants },
    spaceTimeFabric: { dimensions, timeAxis, timeRate },
  };
}

const universe = {
  constants: { g, pi },
  universeType,
  age,
  d: { dimensions, timeAxis },
  ct,
  getCurrentAge,
};

console.log(universe.getCurrentAge());

// Array spread (Spread operator)

const initNums = [1, 2, 3];
const allNums = [];

allNums.push(
  ...initNums,
  ...initNums.map((n, i, arr) => i + n + arr[arr.length - 1 - i])
);

console.log(allNums);

// Template literals

function print(string, ...values) {
  console.log(...string);
  console.log(values);
}

print`WOW${5 + 4} kldjfslkdf jkshdf hfkjsdf ${5}`;

// Destructuring

const attrs = {
  name: 'etc',
  color: 'red',
  id: 23,
};

let { color, id } = attrs;
console.log(color, id);

// we cannot create a new g or pi variable as they are already defined
let { g: gravitationalAcc, pi: piConst } = universe.constants;
console.log(gravitationalAcc, piConst);

const { timeAxis: TIMEAXIS } = createUniverse(
  { g: 9.81, pi: 3.1415 },
  3,
  'forward',
  1
).spaceTimeFabric;

console.log(TIMEAXIS);
