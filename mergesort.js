function split(arr) {
  const mid = arr.length / 2;
  return [arr.slice(0, mid), arr.slice(mid)];
}

function merge(arr1, arr2, comp) {
  console.log(comp);

  let result = [];
  let p1 = 0;
  let p2 = 0;

  while (p1 < arr1.length || p2 < arr2.length) {
    if (p1 >= arr1.length) {
      return [...result, ...arr2.slice(p2)];
    }

    if (p2 >= arr2.length) {
      return [...result, ...arr1.slice(p1)];
    }

    if (comp(arr1[p1], arr2[p2]) <= 0) {
      result.push(arr1[p1]);
      p1++;
    } else {
      result.push(arr2[p2]);
      p2++;
    }
  }

  return result;
}

function mergeSort(arr, comp = (a, b) => a - b) {
  if (arr.length <= 1) {
    return arr;
  }

  const [left, right] = split(arr);
  let mergeLeft = mergeSort(left, comp);
  let mergeRight = mergeSort(right, comp);

  return merge(mergeLeft, mergeRight, comp);
}
