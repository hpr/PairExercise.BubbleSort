function insertionSort (arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j-1] > arr[j]) {
      const temp = arr[j];
      arr[j] = arr[j-1];
      arr[j-1] = temp;
      j--;
    }
  }
  return arr;
}

console.log(insertionSort([5,4,3,2,1]));
