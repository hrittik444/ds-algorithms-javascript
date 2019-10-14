// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// SOLUTION 1:
function chunk(array, size) {
    let newArr = [];
    for(val of array) {
        const last = newArr[newArr.length - 1];
        if(!last || last.length === size) {
            newArr.push([val]);
        } else {
            last.push(val);
        }
    }
    return newArr;
}

// SOLUTION 2:
function chunk(array, size) {
    let newArr = [];
    let i = 0;
    while(i < array.length) {
        newArr.push(array.slice(i, i + size));
        i = i + size;
    }
    return newArr;
}