// 1. Linear Search 
// Big O = O(n)
// works well when array is unsorted
// searches every item in the array from beginning to end, boringg!
function linearSearch(arr, val) {
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] === val) return i;
	}
	return -1;
}

// 2. Binary Search
// Big O = O(log n)
// array needs to be sorted already 
// uses the divide and conquer method
function binary(arr, val) {
	let left = 0;
	let right = arr.length - 1;
	while(left <= right) {
		let mid = Math.floor((left + right)/2);
		if(val < arr[mid]) right = mid - 1;
		else if(val > arr[mid]) left = mid + 1;
		else return mid;
	}
	return -1;
}


// 3. Basic Substring Search
// ...here we are counting how many times str2 occurs in str1
function substring(str1, str2) {
	let count = 0;
	for(let i = 0; i < str1.length; i++) {
		for(let j = 0; j < str2.length; j++) {
			if(str2[j] !== str1[i + j]) break;
			if(j === str2.length - 1) count++;
		}
	}
	return count;
}

// 4. KMP Search
// TODO