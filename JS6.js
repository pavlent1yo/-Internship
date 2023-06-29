function groupByField(arr, fieldName) {
  const groupedObj = {};
  for (let i = 0; i < arr.length; i++) {
    const obj = arr[i];
    const fieldValue = obj[fieldName];
    if (groupedObj[fieldValue]) {
      groupedObj[fieldValue].push(obj);
    } else {
      groupedObj[fieldValue] = [obj];
    }
  }
  return groupedObj;
}
const arr = [{test: 1}, {test: 2}, {test: 3}, {test: 1}, {test: 1}];
const res = groupByField(arr, 'test');
console.log(res); // Вывод: { 1: [{test: 1}, {test: 1}, {test: 1}], 2: [{test: 2}], 3: [{test: 3}] }
