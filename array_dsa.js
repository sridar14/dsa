function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

const arr = [10, 20, 30, 40, 50];
const target = 30;

const result = linearSearch(arr, target);
console.log(result)

function reverse(arr) {
  const reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
  // return arr.reverse()
}
// console.log(reverse([9, 8, 7, 6, 2]));
