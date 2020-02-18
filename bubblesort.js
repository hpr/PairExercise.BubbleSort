const helpers = {};

helpers.swap = function(arr, idx1, idx2) {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
  return arr;
};

function bubbleSort(arr, comparator = (a,b) => a - b) {
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (comparator(arr[i], arr[i+1]) > 0) {
        arr = helpers.swap(arr, i, i+1);
      }
    }
  }
  return arr;
}
