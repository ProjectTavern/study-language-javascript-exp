/**
 * [문제 설명]
 * 첫 번째 원소부터 인접한 원소의 차이가 증가 -> 감소 -> 증가 -> 감소 ... 순으로 나타나는 수열을 지그재그 수열이라고 합니다. 원소의 개수가 N개인 지그재그 수열 Z는 다음을 만족합니다.
 * N이 짝수일 때 : Z[0] < Z[1] , Z[1] > Z[2] , Z[2] < Z[3] , Z[3] > Z[4] ... Z[N-2] < Z[N-1]
 * N이 홀수일 때 : Z[0] < Z[1] , Z[1] > Z[2] , Z[2] < Z[3] , Z[3] > Z[4] ... Z[N-2] > Z[N-1]
 * 어떤 수열 s가 주어질 때, 수열을 이루는 숫자들 사이에 숫자를 추가해서 지그재그 수열로 만들려고 합니다. 이때, 새로 추가하는 수는 어떠한 정수를 넣어도 괜찮습니다.
 * 예를 들어 주어진 수열이 [1, 2, 3] 일 때, 이 수열을 지그재그 수열로 만들기 위해서는 2와 3 사이에 -1을 넣어 [1, 2, -1, 3]으로 만들면 됩니다.
 * 임의의 수열 s가 매개변수로 주어질 때, 수열 s를 지그재그 수열로 만들기 위해 추가해야 하는 수의 개수의 최솟값을 return 하도록 solution 함수를 완성해주세요.
 * 
 *  제한사항
 * s는 수열을 나타내는 1차원 배열이며, 길이는 3 이상 1,000 이하입니다.
 * s의 원소는 -10,000 이상 10,000 이하의 정수입니다.
 * 입출력 예
 * s	result
 * [1,2,3]	1
 * [3,-1,0,4]	2
 * 입출력 예 설명
 * 입출력 예 #1
 * 문제의 예시와 같습니다.
 * 
 * 입출력 예 #2
 * 첫 번째 원소인 3 앞에 1, 세 번째 원소 0과 네 번째 원소 4 사이에 -1을 넣으면 [1, 3, -1, 0, -1, 4]가 되며 지그재그 수열이 됩니다. 따라서 최소 2개의 숫자를 추가하면 됩니다.
 */

 /**
  * Programmers 채점에서 69%만 통과되었다.
  * 다른 예외 사항이 있을 것 같은데 시간 내에 발견하지 못했다.
  * 초기에 40% 이상이 런타임 에러가 걸렸는데, 앞뒤가 같은 숫자일 경우를 생각하지 못했다.
  * 그 부분을 처리하고 나니 6%정도가 통과되었고, 나머지는 런타임 에러에서 실패로 바뀌었다.
  * 아마도 같은 경우의 처리를 하고 나서 또 숫자에 뭔가 걸리는 것이 있을 가능성이 높은 것 같다.
  */

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
    } else if(array[0] == array[1]) {
        count++;
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
    } else if(array[0] == array[1]) {
        count++;
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