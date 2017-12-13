const isPair = (s) => {
    // result = 결과값, stack = 괄호를 담을 스택
    let result = true;
    let stack = new Array();

    // 받아온 스트링 s의 내용을 분석해서 괄호만 추출하여 stack Array에 담음
    for(let i=0; i < s.length; i++){
        if(")" === s[i] || "(" === s[i]) {
            stack.push(s[i]);
        }
    }

    /* ")": 항상 먼저 나와야 하므로 나온 만큼 count++ 을 해주고,
     * "(": 그 다음 마무리해야할 괄호가 나와야 하므로 count-- 를 해준다.
     * 이때 "(" 가 더 많이 나왔을 경우에 count 값이 음수가 되므로 잘못됨을 리턴
     **/ 
    let count = 0;
    while(!(stack.length === 0)) {
        let templit = stack.pop();
        if(")" === templit) count++;
        if("(" === templit) count--;
        if(count < 0) return result = false;
    }

    /**
     * stack에 있는 내용들을 전부 꺼내고 난 다음 (,)의 개수는 동일해야 하므로
     * 최종적인 count는 0이 되어야 한다.
     * 어느 것 하나라도 많으면 0이 아닌 양수나 음수의 값을 가지게 됨.
     */
    if(count === 0) return result;
    else return result = false;
}

/**
 * 테스트용 콘솔로그
 */
console.log(isPair("(Hello)()"));
console.log(isPair(")())()()"));
console.log(isPair("(())()(())"));
console.log(isPair("()()()((()))"));
console.log(isPair("((((()()))))"));
console.log(isPair("())("));