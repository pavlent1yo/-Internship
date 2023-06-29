function countFromArr(arr) {
  const countObj = {};
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (countObj[element]) {
      countObj[element] += 1;
    } else {
      countObj[element] = 1;
    }
  }
  return countObj;
}
const arr = [1, 1, 1, 'test', 'test'];
const res = countFromArr(arr);
console.log(res); // Вывод: { 1: 3, test: 2 }
