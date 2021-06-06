// 1:
// Sort an array of numbers:

// Solution:
function basicSort(arr) {
    return arr.sort((a, b) => a - b);
}

basicSort([7, 9, 2, 8, 1, 5, 2, 5, 0, 9, 5, 8, 3]);

// 2:
// Sort n array of strings by their length:

// Solution:
function basicSortStr(arr) {
    return arr.sort((str1, str2) => str1.length - str2.length);
}

console.log(basicSortStr(['asd', 'i', 'yhsdw', 'wwtsgggsfs', 'fsgs', 'pouud']));