// The Sliding Window Pattern:
// Write a function called maxSubarraySum which accepts an array of integers and a number called n. 
// The function should calculate the maximum sum of n consecutive elements in the array.

function findMaxSum(arr, n) {
    if (arr.length < n) return null;

    let maxSum = [...arr].splice(0, n).reduce((item, acc) => item + acc);

    let i = 1, j = n;

    while (j <= arr.length - 1) {
        let tempSum = maxSum - arr[i - 1] + arr[j];

        maxSum = Math.max(maxSum, tempSum);
        i += 1;
        j += 1;
    }

    return maxSum;
}

console.log(findMaxSum([1, 2, 5, 2, 8, 1, 5], 4));
// 1 2 5 2
//   2 5 2 8
//     5 2 8 1
//       2 8 1 5