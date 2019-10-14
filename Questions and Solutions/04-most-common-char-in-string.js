// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// SOLUTION 1:
function maxChar(str) {
    const chars = {};
    let max = 0;
    let maxchar = '';
    str.split('').forEach(val => (!chars[val] ? chars[val] = 1 : chars[val] += 1));
    for(let c in chars) {
       if(chars[c] > max) {
           max = chars[c];
           maxchar = c;
       }
    }
    return maxchar;
}

// SOLUTION 2:
function maxChar(str) {
    const chars = {};
    let max = 0;
    let maxchar = '';
    for(let val of str) {
        chars[val] = chars[val] + 1 || 1;
    }
    for(let c in chars) {
        if(chars[c] > max) {
            max = chars[c];
            maxchar = c;
        }
    }
    return maxchar;
}


// remember:
// use for ...of loop to iterate over arryas/strings
// use for ...in loop to iterate over objects


// also note:
// this kind of approach is also applicable in case of anagram problems