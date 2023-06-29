function plus(initialValue) {
  return function(num) {
    return initialValue + num;
  };
}
console.log(plus(1)(2)); // Вывод: 3
