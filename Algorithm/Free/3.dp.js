const cache = new Array(1000);
const cacheLength = cache.length;
for (let index = 0; index < cacheLength; index++) {
 cache[index] = new Array(1000);
}

function bino(n, r) {
  if (r === 0 || n === r) return 1;
  if (cache[n][r] !== undefined) return cache[n][r];
  return cache[n][r] = bino(n - 1, r - 1) + bino(n - 1, r);
}

console.time('process time');
console.log(bino(30, 10));
console.timeEnd('process time');