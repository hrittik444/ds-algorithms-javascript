// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// SOLUTION 1:
function capitalize(str) {
    return str.split(' ').map(val => val[0].toUpperCase() + val.slice(1)).join(' ');
}

// SOLUTOIN 2:
function capitalize(str) {
    let newStr = '';
    let i = 0;
    while(i < str.length) {
        (str[i - 1] == ' ' || i == 0) ? newStr += str[i].toUpperCase() : newStr += str[i];
        i++;
    }
    return newStr
}