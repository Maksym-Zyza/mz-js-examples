// function Kong(Name, Limit) {
//   this.Name = Name;
//   this.Limit = Limit;
// }

// const consumers = 2;
// const healthchecks = 5;

// const name1 = new Kong("kong_reports_consumers", consumers + 1);
// const limit = new Kong("kong_healthchecks", 5);

// console.table([name1, limit]);

// ========
// const str = "sdsdfsdf";

// function removeChar(str) {
//   const result = str.slice(1, -1);
//   return result;
// }
// console.log(removeChar(str));

// ========
// const n = 4;

// // function sumTriangularNumbers(n) {
// //   let a = 0;
// //   let arr = [];

// //   for (let i = 0; i < n + 1; i++) {
// //     a = a + i;
// //     arr.push(a);
// //   }

// //   let sum = 0;
// //   for (let i = 0; i < arr.length; i++) {
// //     sum = sum + arr[i];
// //   }
// //   return n > 0 ? sum : 0;
// // }

// function sumTriangularNumbers(n) {
//   return n < 0 ? 0 : (n * (n + 1) * (n + 2)) / 6;
// }

// console.log(sumTriangularNumbers(n));

// =======
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
// const num = 999;

// function persistence(num) {
//   const str = num.toString();
//   if (str.length === 1) {
//     return 0;
//   }
//   const next = str.split("").reduce((a, b) => a * b, 1);
//   return 1 + persistence(next);
// }

// console.log(persistence(num));

// ======
const limit = 5;
for (let i = 0; i < limit; i++) {
  i;
}
