// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

// SOLUTION 1:
function pyramid(n) {
    const mid = Math.floor(((n * 2) - 1)/2);
    for(let i = 0; i < n; i++) {
        let str = '';
        for(let j = 0; j < (n * 2) - 1; j++) {
            if(mid - i <= j && mid + i >= j) {
                str += '#';
            } else {
                str += ' ';
            }
        }
        console.log(str);
    }
}

// SOLUTION 2 (recursion):
function pyramid(n, i = 0, str = '') {
    const mid = Math.floor(((n * 2) - 1)/2);
    if(i === n) {
        return;
    }
    if(str.length === (n * 2) - 1) {
        console.log(str);
        return pyramid(n, i + 1);
    }
    if(mid - i <= str.length && mid + i >= str.length) {
        str += '#';
    } else {
        str += ' ';
    }

    pyramid(n, i, str);
} 