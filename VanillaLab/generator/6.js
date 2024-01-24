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

const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = take(3, map(filter(values, number => number % 2 === 0), number => number * 10));

/* lazy evaluation */
console.log(result.next());
console.log(result.next());
console.log(result.next());
