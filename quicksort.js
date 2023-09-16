function quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[0];

  let left = [];
  let right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }

  }
  let leftSort = quicksort(left);
  let rightSort = quicksort(right);
  return [...leftSort, pivot, ...rightSort]
  // let leftArr = [];
  // let rightArr = [];
  // // Check if the input is length 1 or less
  //   // If so, it's already sorted: return
  //   console.log('Repeat: ', arr);
  // if (arr.length <= 1) {
  //   return arr;
  // }
  // // Pick the first value as the pivot
  // let pivot = arr(Math.floor(arr.length / 2));
  // // Orient the pivot so that...
  //     // every number smaller than the pivot is to the left
  //     // every number larger (or equal) than the pivot is to the right
  // for (const element of arr) {
  //   if (pivot > element) {
  //     rightArr.push(element);
  //   } else {
  //     leftArr.push(element);
  //   }
  // }

  // // Recursively sort the left
  // let LA = quicksort(leftArr);
  // // Recursively sort the right
  // let RA = quicksort(rightArr);

  // // Return the left, pivot and right in sorted order
  // return LA + pivot + RA;
}


module.exports = [quicksort];
