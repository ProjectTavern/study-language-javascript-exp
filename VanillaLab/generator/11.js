function* minsu() {
  const myMessageList = [
    "안녕 나는 민수야",
    "만나서 반가워",
    "내일 영화 볼래?",
    "시간 안되니?",
    "내일모레는 어때?"
  ];

  for (const message of myMessageList) {
    console.log("수지:", yield message);
  }
}

function suji() {
  const myMessageList = [
    "",
    "안녕 나는 수지야",
    "그래 반가워",
    "..."
  ];

  const gen = minsu();
  for (const message of myMessageList) {
    console.log("민수:", gen.next(message).value);
  }
}

suji();