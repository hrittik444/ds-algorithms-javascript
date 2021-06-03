// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// SOLUTION 1:
function vowels(str) {
    const vowels = 'aeiou';
    let count = 0;
    str.toLowerCase().split('').forEach(char => {
        if(vowels.includes(char)) {
            count += 1;
        }
    });
    return count;
}

// SOLUTION 2:
function vowels(str) {
    const matches = str.match(/[aeiou]/gi);
    // g for checking for multiple matches and not just the first match
    // i for case-insesnitive
    return matches ? matches.length : 0
}