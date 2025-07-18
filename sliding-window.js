// Q1 sliding Window problem

function slidingWindow(arr, k) {
  if (arr.length === 0 || k <= 0 || k > arr.length) {
    return [];
  }

  const result = [];
  let windowSum = 0;

  // Calculate the sum of the first 'k' elements
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  
  result.push(windowSum);

  // Slide the window across the array
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    result.push(windowSum);
  }

  return result;
}
// Example usage
const arr = [1, 2, 3, 4, 5];
const k = 3;
console.log(slidingWindow(arr, k)); // Output: [6, 9, 12]
module.exports = slidingWindow; 
// Example usage
// const arr = [1, 2, 3, 4, 5];
// const k = 3;
// console.log(slidingWindow(arr, k)); // Output: [6, 9, 12]
// module.exports = slidingWindow;  