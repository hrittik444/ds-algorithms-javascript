// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// SOLUTION 1:
function steps(n) {
    let i = 1;
    while(i <= n) {
        let j = 1;
        let str = '';
        while(j <= i) {
            str += '#';
            j++;
        }
        let k = i+1;
        while(k <= n) {
            str += ' ';
            k++;
        }
        console.log(str);
        i++;
    }
}

// SOLUTION 2:
function steps(n) {
    for(let i = 0; i < n; i++) {
        let str = '';
        for(let j = 0; j < n; j++) {
            if(j <= i) {
                str += '#';
            } else {
                str += ' ';
            }
        }
        console.log(str);
    }
}

// SOLUTION 3 (recursion):
function steps(n, i = 0, str = '') {
    if(i === n) {
        return;
    }
    if(str.length === n) {
        console.log(str);
        return steps(n, i + 1)
    }
    if(str.length <= i) {
        str += '#';
    } else {
        str += ' ';
    }

    steps(n, i, str);
}