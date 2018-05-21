function copyObject (obj) {
    if (obj === null || typeof obj !== "object") { return obj; }

    let copiedObject = obj.constructor();

    for (const prop in obj) {
        if (obj.hasOwnProperty(prop)) { copiedObject[prop] = obj[prop]; }
    }

    return copiedObject;
}

function findSmallest (list) {
    let smallest = {
        index: 0,
        value: list[0]
    };
    list.forEach((item, index) => {
        if (smallest.value > item) {
            smallest.value = item;
            smallest.index = index;
        }
    });
    return smallest.index;
}

function selectionSort (list) {
    let tempInputList = copyObject(list);
    let sortedList = [];
    list.forEach( () => {
        const smallest = findSmallest(tempInputList);
        sortedList.push(tempInputList[smallest]);
        tempInputList.splice(smallest, 1);
    });

    return sortedList;
}

console.log(selectionSort([5,3,2,6,2,10,5,4,8,9,0,0,2,1,5]));