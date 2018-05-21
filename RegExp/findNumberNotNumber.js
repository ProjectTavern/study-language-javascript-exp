const searchTarget = "123-4567-8992";

/* 숫자 이외의 것을 찾고 싶을 때는 d 대신 대문자 D를 활용하면 된다. 이는 문자열에도 동일한 규정이 적용된다. */
let regExp = /\d\d\d\D\d\d\d\d\D\d\d\d\d/;

console.log(searchTarget.match(regExp));