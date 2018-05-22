function quicksort (array) {
    if (array.length < 2) {
        return array;
    } else {
        const pivot = array[0];
        array = array.slice(1);
        const less = array.filter(item => item <= pivot);
        const greater = array.filter(item => item > pivot);
        return quicksort(less).concat(pivot).concat(quicksort(greater));
    }
}

console.log(quicksort([7,4,8,2,3,4,5,6,7,4,3,2,1,3,5,6,7,3]));