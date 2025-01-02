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
if (result !== -1) {
  console.log(`Element ${target} found at index ${result}.`);
} else {
  console.log(`Element ${target} not found.`);
}
console.log("11323")
