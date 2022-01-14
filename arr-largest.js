const sampleArr = [1, 2, -11, 4, 22, 22, 8, 5, 11, 22, 0, -3];

let largest = sampleArr[0];
let secondLargest = sampleArr[0];
let smallest = sampleArr[0];

for (const item of sampleArr) {
  if (largest < item) {
    secondLargest = Math.min(item, largest);
  } else if (largest > item) {
    secondLargest = Math.max(item, secondLargest);
  }
  largest = Math.max(item, largest);
  smallest = Math.min(item, smallest);
}

/* ------------------- OR --------------------------- */

for (const item of sampleArr) {
  if (largest < item) {
    secondLargest = largest;
    largest = item;
  } else if (largest > item && item > secondLargest) {
    secondLargest = item;
  }
  if (item < smallest) {
    smallest = item;
  }
}

console.log(largest, secondLargest, smallest);
