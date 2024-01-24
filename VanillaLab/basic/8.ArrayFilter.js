var arr1 = [1, 2, undefined, 5, 6, 7, undefined, 8];

var arr2 = arr1.filter(function(elem) {
  return elem !== undefined;
});

console.log(arr2);