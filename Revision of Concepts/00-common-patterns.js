// 0. 
// pattern: frequency counter
// Write a function called same, which accepts two arrays.
// The function should return true if every value in the array has it's corresponding value squared in the second array.
// The frequency of values must be the same.
function same(arr1, arr2) {
	if(arr1.length !== arr2.length) return false;

	let one = {};
	let two = {};
	for(let i of arr1) one[i] = (one[i] || 0) + 1;
	for(let i of arr2) one[i] = (two[i] || 0) + 1;
	for(let key in one) {
		if(!(key**2 in two)) return false;
		if(one[key] !== two[key**2]) return false;
	}
	return true;
}


// 1. 
// pattern: frequency counter
// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another.
function anagrams(one, two) {
	if(one.length !== two.length) return false;

	const lookup = {};
	for(let i of one) {
		lookup[i] ? lookup[i] +=1 : lookup[i] = 1
	}
	for(let j of two) {
		if(!lookup[j]) return false;
		else lookup[j] -= 1;
	}
	return true;
}

// 2. 
// pattern: multiple pointers
// Write a function called sumZero which accepts a sorted array of integers. 
// The function should find the first pair where the sum is 0. 
// Return an array that includes both values that sum to zero or undefined if a pair does not exist.
function sumZero(arr) {
	let left = 0;
	let right = arr.length - 1;
	while(left < right) {
		let sum = arr[left] + arr[right];
		if(sum === 0) return [arr[left], arr[right]];
		if(sum < 0) left++;
		if(sum > 0) right--;
	}
}

// 3.
// pattern: multiple pointers
// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.
function countUniqueValues(arr) {
	if (arr.length === 0) return 0;

	let i = 0;
	for(let j = 1; j < arr.length; j++) {
		if(arr[j] !== arr[i]) {
			i++;
			arr[i] = arr[j];
		} 
	}
	return i + 1;
}

// 4.
// pattern: sliding window
// Write a function called maxSubarraySum which accepts an array of integers and a number called n.
// The function should calculate the maximum sum of n consecutive elements in the array.
function maxSubarraySum (arr, num) {
	if(arr.length < num) return null;

	let maxSum = 0;
	let tempSum = 0;
	for(let i = 0; i < num; i++) maxSum += arr[i];
	tempSum = maxSum;
	for(let j = num; j < arr.length; j++) {
		tempSum = tempSum - arr[j - num] + arr[j];
		maxSum = Math.max(tempSum, maxSum);
	}
	return maxSum;
}

// 5.
// pattern: divide and conquer
// Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located.
// If the value is not found, return -1
// ...an example of Binary Search.
function search(arr, val) {
	let min = 0;
	let max = arr.length - 1;
	while(min <= max) {
		let mid = Math.floor((max + min)/2);
		if(mid < val) min = mid + 1;
		else if(mid > val) max = mid - 1;
		else return mid;
	}
	return -1;
}

// 6.0.
// pattern: recursion
// Factorial using recursion.
function factorial(num) {
	if(num === 1) return 1;
	return num * factorial(num - 1);
}

// Fibonacci using recursion:
function fibonacci(n) {
	if(n <= 2) return 1;
	return fibonacci(n - 2) + fibonacci(n - 2);
}

// Reverse a string using recursion.
function reverse(str) {
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}

// Check for palindrome using recursion
function palindrome(str) {
	if(str.length === 1) return true;
	if(str.length === 2) return str[0] === str[1];
	if(str[0] === str.slice(-1)) return palindrome(str.slice(1, -1));
	return false;
}

// 6.1.
// pattern: recursion using helper function
// Collect all of the odd values in an array, using recursion.
function collectOdd(arr) {
	let result = [];

	function helper(input) {
		if(input.length === 0) return;
		if(input[0] % 2 !== 0) result.push(input[0]);
		helper(input.slice(1));
	}
	heper(arr);
	return result;
}

// 6.2.
// pattern: pure recursion
// Collect all of the odd values in an array, using recursion.
function collectOdd(arr) {
	let result = [];
	if(arr.length === 0) return result;
	if(arr[0] % 2 !== 0) result.push(arr[0]);
	result = result.concat(collectOdd(arr.slice(1)));
	return result;
}