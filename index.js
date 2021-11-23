const num1 = 31;
const num2 = 2;

const multiply = num1 * num2;

const random = Math.floor(Math.random() * 10);

const num3 = 9;
const num4 = 5;

const mod = num3 % num4;

const max = Math.max(5, 7, 9, 12, 16, 18, 20);

//extra practice

const random1 = Math.floor(Math.random() * 100);
const random2 = Math.floor(Math.random() * 100);
const random3 = Math.floor(Math.random() * 100);

console.log(`1st random number is ${random1}`);
console.log(`2nd random number is ${random2}`);
console.log(`3rd random number is ${random3}`);

const maximum = Math.max(random1, random2, random3);

console.log(
  `Among these (${random1}, ${random2}, ${random3}) numbers; max number is ${maximum}`
);

console.log(random);
console.log(mod);
console.log(max);
