let graph = [];
graph["CAB"] = ["CAT", "CAR"];
graph["CAR"] = ["CAT", "BAR"];
graph["CAT"] = ["MAT", "BAT"];
graph["MAT"] = ["BAT"];
graph["BAR"] = ["BAT"];
graph["BAT"] = [];

function findShortenWay () {
    let queue = [];
    queue = queue.concat(graph["CAB"]);
    let searched = [];
    const target = "BAT";
    while (queue.length !== 0) {
        let word = queue.shift();
        if (!searched.includes(word)) {
            if (word === target) {
                console.log(`${word} is searched`);
                return true;
            } else {
                queue = queue.concat(graph[word]);
                searched.push(word);
            }
        }
    }
    return false;
}

findShortenWay();
/* Not yet completed.. */