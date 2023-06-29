function count(num) {
  if (typeof num !== 'number') {
    return count;
  }

  let sum = num;

  function add(nextNum) {
    if (typeof nextNum === 'number') {
      sum += nextNum;
    }
    return add;
  }

  add.toString = function () {
    return sum;
  };

  return add;
}
console.log(count(3)(2)(1)(5)(7).toString()); // Вывод: 18
console.log(count(3)(null)(1)('asad')().toString()); // Вывод: 4
