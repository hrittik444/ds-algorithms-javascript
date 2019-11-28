// -----------------------------------------------------
// BASIC SORTING ALGORITHMS:
// 1. Bubble Sort (optimized version)
// Big O Time = O(n^2)
// Big O Space = O(1)
function bubbleSort(arr) {
	let noSwaps, temp;
	for(let i = arr.length; i > 0; i--) {
		noSwaps = true
		for(let j = 0; j < i - 1; j++) {
			if(arr[j] > arr[j+1]) {
				temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
				noSwaps = false;
			}
		}
		if(noSwaps) break;
	}
	return arr;
}

// 2. Selection Sort
// Big O Time = O(n^2)
// Big O Space = O(1)
function selectionSort(arr) {
	let lowest, temp;
	for(let i = 0; i < arr.length; i++) {
		let lowest = i;
		for(let j = i + 1; j < arr.length; j++) {
			if(arr[j] < arr[lowest]) {
				lowest = j;
			}		
		}
		if(lowest !== i) {
			temp = arr[i];
			arr[i] = arr[lowest];
			arr[lowest] = temp;
		}
	}
	return arr;
}

// ...another way of doing Bubble Sort and Selection Sort:
// in both the above cases, we could call another function to swap elements
// const swap = (arr, idx1, idx2) => ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

// 3. Insertion Sort:
// Big O Time = O(n^2)
// Big O Space = O(1)
function insertionSort(arr) {
	let currentVal;
	for(let i = 1; i < arr.length; i++) {
		currentVal = arr[i];
		for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
		// use var j, as it needs to be accessed outside the scope of the loop	
			arr[j+1] = arr[j];
		}
		arr[j+1] = currentVal;
	}
	return arr;
}

// Comparison of Basic Sorting Algorithms:
// Bubble Sort works well when data is almost sorted already.
// Selection Sort is better than Bubble Sort in cases where we need to minimize the number of swaps to be made.
// Insertion Sort works well as online/live sorting algorithm, where data is coming in and being sorted simultaneously in real time.
// Worst case time complexity for all three is O(n^2).
// Best case time complexity for Bubble and Insertion Sorti is O(n), while for Selection Sort is O(n^2).

// -----------------------------------------------------
// INTERMEDIATE SORTING ALGORITHMS:
// 1. Merge Sort:
// Big O Time = O(n log n)
// Big O Space = O(n)
function merge(arr1, arr2) {
	let result = [];
	let i = 0;
	let j = 0;
	while(i < arr1.length && j < arr2.length) {
		if(arr1[i] < arr2[j]) {
			result.push(arr1[i]);
			i++;
		} else {
			result.push(arr2[j]);
			j++;
		}
	}
	while(i < arr1.length) {
		result.push(arr1[i]);
		i++;
	}
	while( j < arr2.length) {
		result.push(arr2[j]);
		j++;
	}
	return result;
}

function mergeSort(arr) {
	if(arr.length <= 1) return arr;
	let mid = Math.floor(arr.length/2);
	let left = mergeSort(arr.slice(0, mid));
	let right = mergeSort(arr.slice(mid));
	return merge(left, right);
}

// 2. Quick Sort:
// Big O Time = O(n log n)
// Big O Space = O(log n)  
// ...can change start in pivot to midpoint of arr or some random element in arr, can affect complexity depending on the state of the array
function pivot(arr, start = 0, end = arr.length-1) {
	function swap(arr, i, j) {
		let temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}

	let pivot = arr[start];
	let swapIndex = start;
	for(let i = start + 1; i <= end; i++) {
		if(pivot > arr[i]) {
			swapIndex++;
			swap(arr, i, swapIndex);
		}
	}
	swap(arr, start, swapIndex);
	return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length-1) {
	if(left < right) {
		let pivotIndex = pivot(arr, left, right);
		quickSort(arr, left, pivotIndex-1);
		quickSort(arr, pivotIndex+1, right);
	}
	return arr;
}

// -----------------------------------------------------
// SPECIAL SORTING ALGORITHMS:
// 1. Radix Sort:
// Big O Time = O(nk)
// Big O Space = O(n + k) 
// ...where k is the word size (or maxDigitCount)
function getDigit(num, i) {
	return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount() {
	if(num === 0) return 1;
	return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
	let maxDigits = 0;
	for(num of nums) {
		maxDigits = Math.max(maxDigits, digitCount(num));
	}
	return maxDigits;
}

function radixSort(arr) {
	maxDigitCount = mostDigits(arr);
	for(let i = 0; i < maxDigitCount; i++) {
		// making an empty array wth 10 empty sub-arrays
		let digitBuckets = Array.from({length: 10}, () => []);
		for(let j = 0; j < arr.length; j++) {
			let digit = getDigit(arr[j], i);
			digitBuckets[digit].push(arr[j]);
		}
		arr = [].concat(...digitBuckets);
	}
	return arr;
}
