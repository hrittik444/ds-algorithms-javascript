// Given a string, return true if the string is a palindrome
// or false if it is not. 
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// SOLUTION 1:
function palindrome(str) {
    return str === str.split('').reverse().join('')
}

// SOLUTION 2:
function palindrome(str) {
    return str.split('').every((val, i) => val == str[str.length -i -1]);
}