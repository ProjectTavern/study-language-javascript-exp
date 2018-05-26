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
    let searched = [];
    while (queue.length !== 0) {
        let person = queue.shift();
        if(!searched.includes(person)){
            if (personIsSeller(person)) {
                console.log(`${person} is mango seller!`);
                return true;
            } else {
                queue = queue.concat(graph[person]);
                searched.push(person);
            }
        }

    }
    return false;
}

function personIsSeller (name) {
    return name.match(/m$/);
}

searchQueue();
