var mockData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function selectCount(data, target) {
  var firstTarget = target;
  var isEven = false;
  var result = [];
  while(data.length) {
    if (data.length < firstTarget) {
      if (firstTarget < data[0]) {
        data = data.reverse();
      }
      result.push(data.pop());
    } else {
      result.push(data[target]);
      data.splice(target, 1);
      console.log(result);
      if (isEven) {
        target--;
      } else {
        target = target;
      }
      isEven = !isEven;
    }
  }

  return result;
}

console.log(selectCount(mockData, 3));