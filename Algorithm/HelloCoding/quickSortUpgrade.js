function quickSortUpgrade (array) {
    if (array.length < 2) {
        return array;
    } else {
        const mid = Math.floor(array.length/2);
        const pivot = array[mid];
        array.splice(mid, 1);
        const less = array.filter(item => item <= pivot);
        const greater = array.filter(item => item > pivot);
        return quickSortUpgrade(less).concat(pivot).concat(quickSortUpgrade(greater));
    }
}

console.log(quickSortUpgrade([1,2,3,5,3,1,1,3,5,7,4,6,3,2,3]));