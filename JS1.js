function getArgumentType(arg) {
  return typeof arg;
}
console.log(getArgumentType(42)); // Вывод: "number"
console.log(getArgumentType("Hello")); // Вывод: "string"
console.log(getArgumentType(true)); // Вывод: "boolean"
console.log(getArgumentType({})); // Вывод: "object"
