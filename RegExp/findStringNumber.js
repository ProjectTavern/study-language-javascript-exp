const searchTarget = "123-4567-8992";

/* js에서는 g를 붙이지 않으면 첫회에 찾은 것에서 멈추고 해당 데이터와 인덱스, 인풋값을 배열의 형태로 리턴해준다. */
let regExp = /\d+/;

/* 따라서 모든 곳을 조회하고 싶을 때는 g를 붙여주고 찾아야만 한다. */
let regExpG = /\d+/g;

console.log(searchTarget.match(regExp));

console.log(searchTarget.match(regExpG));