function bino(n, r) {
    if (r === 0 || n === r) return 1;
    return bino(n - 1, r - 1) + bino(n - 1, r);
  }
  
  console.time('process time');
  console.log(bino(30, 10));
  console.timeEnd('process time');