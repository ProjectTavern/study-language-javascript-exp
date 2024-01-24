const generator = function* generator(number = 0) {
  number = 10 + number;
  yield number;
  number = 20 + number;
  yield number;
  number = 30 + number;
  yield number;
}

for (const value of generator(7)) {
  console.log(value);
}

const array = [...generator()];

console.log(array);
