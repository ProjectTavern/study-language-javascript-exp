const generator = function* generator() {
  yield 10;
  yield 20;
  yield 30;
}

for (const value of generator()) {
  console.log(value);
}

const array = [...generator()];

console.log(array);
