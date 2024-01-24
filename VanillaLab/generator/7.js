function* map(iterable, mapper) {
  for (const value of iterable) {
    console.log('map', value);
    yield mapper(value);
  }
}

function* filter(iterable, test) {
  for (const value of iterable) {
    if (test(value)) {
      console.log('filter', value);
      yield value;
    }
  }
}

function* take(number, iterable) {
  for (const value of iterable) {
    if (number <= 0) return;
    console.log('take', value);
    yield value;
    number--;
  }
}

function* naturalNumbers() {
  let number = 1;
  while (true) {
    yield number++;
  }
}

const values = naturalNumbers();
const result = take(17, map(filter(values, number => number % 2 === 0), number => number + 10));
console.log([...result]);
