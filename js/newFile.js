//========== Task1

//========== Task2

const filter = (arr, fn) => {
  return arr.reduce((filteredArr, element) => {
    return fn(element) ? [...filteredArr] : [...filteredArr, element];
  }, []);
};

console.log(filter([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0)); // [1, 3, 5]

//======
// const filter = (arr, fn) =>
//   arr.reduce(
//     (filteredArr, el) => (fn(el) ? [...filteredArr] : [...filteredArr, el]),
//     []
//   );

// const arr = [1, 2, 3, 4, 5, 6];
// const fn = (n) => n % 2 === 0;
// console.log(filter(arr, fn)); // [1, 3, 5]

// console.log(fn(1));

// const newArr = arr.reduce(
//   (filteredArr, el) => (el % 2 === 0 ? [...filteredArr] : [...filteredArr, el]),
//   []
// );
// newArr;
