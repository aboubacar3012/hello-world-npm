console.log("Hello, World!");
// test function 
const someFunction = () => {
  console.log("Hello, World!");
}

const filter = (arr, callback) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

const arr = [1, 2, 3, 4, 5];
const filteredArr = filter(arr, (num) => num % 2 === 0);
console.log(filteredArr); // [2, 4]
