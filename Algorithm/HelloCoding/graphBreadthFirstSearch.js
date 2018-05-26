let graph = {};
graph.you = ["alice", "bob", "claire"];
graph.bob = ["anuj", "peggy"];
graph.alice = ["peggy"];
graph.claire = ["thom", "jonny"];
graph.anuj = [];
graph.peggy = [];
graph.thom = [];
graph.jonny = [];

function searchQueue(){
    let queue = [];
    /* concat can not changed anything. It just return data. */
    queue = queue.concat(graph["you"]);
    while (queue.length !== 0) {
        let person = queue.shift();
        if (personIsSeller(person)) {
            console.log(`${person} is mango seller!`);
            return true;
        } else {
            queue = queue.concat(graph[person]);
        }
    }
    return false;
}

function personIsSeller (name) {
    return name.match(/m$/);
}

searchQueue();
