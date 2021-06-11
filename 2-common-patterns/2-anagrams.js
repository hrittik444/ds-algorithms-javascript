// The Frequency Counter Pattern:
// Find if two strings are anagrams.

function anagrams(str1, str2) {
    let strObj1 = {};
    let strObj2 = {};

    for (let item of str1.split('')) {
        strObj1[item] = (strObj1[item] || 0) + 1;
    }

    for (let item of str2.split('')) {
        strObj2[item] = (strObj2[item] || 0) + 1;
    }

    if (Object.keys(strObj1).length !== Object.keys(strObj2).length) return false;

    for (let key in strObj1) {
        if (strObj1[key] !== strObj2[key]) return false;
    }

    return true;
}

console.log(anagrams('cinema', 'iceman'));