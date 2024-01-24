function gen1() {
  yield 2;
  yield 3;
}

function gen2() {
  yield 1;
  yield * gen1();
  yield 4;
}

function* gen2second() {
  yield 1;
  for (const value of gen1()) {
    yield value;
  }
  yield 4;
}

function gen2third() {
  yield 1;
  yield * [2, 3];
  yield 4;
}