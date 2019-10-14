// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// SOLUTION 1:
function reverse(str) {
    return str.split('').reverse().join('');
}

// SOLUTION 2:
function reverse(str) {
    let newstr = '';
    for(let val of str) { 
        newstr = val + newstr;
    }
    return newstr;
}

// SOLUTION 3:
function reverse(str) {
    return str.split('').reduce((acc, val) => val + acc, '');
}