function convertArrToObj(arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[i] = arr[i];
  }
  return obj;
}
const arr = [1, null, 'test', undefined];
const obj = convertArrToObj(arr);
console.log(obj); // Вывод: { 0: 1, 1: null, 2: 'test', 3: undefined }
