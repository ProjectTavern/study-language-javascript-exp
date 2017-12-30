/**
 * 짝수번째 친구들을 담당하는 함수 / 홀수에서 넘어옴
 * @param {*} array 
 * @param {*} arrayLength 
 * @param {*} count 
 */
function zigzagEven(array, count) {
    if(array.length < 2) return count;
    if(array[0] > array[1]) {
        array.splice(0,1);
        return zigzagOdd(array, count);
    } else {
        count++;
        return zigzagOdd(array, count);
    }
}

/**
 * 홀수번째 친구들을 담당하는 함수 / 짝수에서 넘어옴
 * @param {*} array 
 * @param {*} arrayLength 
 * @param {*} count 
 */
function zigzagOdd(array, count) {
    if(array.length < 2) return count;
    if(array[0] < array[1]) {
        array.splice(0,1);
        return zigzagEven(array, count);
    } else {
        count++;
        return zigzagEven(array, count);
    }
}

function solution(s) {
    let count = 0;
    let answer = 0;
    answer = zigzagOdd(s, count);
    return answer;
}