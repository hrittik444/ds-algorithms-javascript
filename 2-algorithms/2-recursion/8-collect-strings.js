// Write a function that accpts an object and returns an array of all values in the object that have typeof string.

// Solution:
function collectStrings(obj) {
    let res = [];

    (function collect(obj) {
        let arr = Object.values(obj);

        if (arr.length === 0) return;

        arr.forEach(item => {
            if (typeof item === 'string') res.push(item);
        });

        arr = arr.filter(item => typeof item !== 'string');
        arr.forEach(item => collect(item));
    })(obj);

    return res;
}

let obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj));