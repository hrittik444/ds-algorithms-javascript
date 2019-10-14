// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// SOLUTION 1:
function anagrams(stringA, stringB) {
    const obj1 = compare(stringA);
    const obj2 = compare(stringB);

    if(Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for(let val in obj1) {
        return !(obj1[val] !== obj2[val]);
    }
    return true;
}

function compare(str) {
    const obj = {};
    for(let c of str.replace(/[^\w]/g,'').toLowerCase()) {
        obj[c] = obj[c] + 1 || 1;
    }
    return obj;
}

// SOLUTION 2:
function anagrams(stringA, stringB) {
    return stringA.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('') === stringB.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
} 