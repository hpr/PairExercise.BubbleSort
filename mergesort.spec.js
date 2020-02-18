describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([1, 2, 3, 4, 5])).toEqual([
      [1, 2],
      [3, 4, 5]
    ]);
  });
});

describe('Merge function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    expect(merge([-51, -10, 3], [1, 23, 41], (a, b) => a - b)).toEqual([-51, -10, 1, 3, 23, 41]);
  });
});

describe('Merge Sort', function() {
  beforeAll(function() {});

  it('handles an empty array', function() {
    expect(mergeSort([])).toEqual([]);
  });

  it('sorts 1-5', () => {
    expect(mergeSort([1, 2, 4, 3, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it("doesn't change sorted array", () => {
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it('sorts array in reverse order', () => {
    expect(mergeSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  it('sorts the example array', () => {
    expect(mergeSort([-10, 3, -51, 23, 41, 1])).toEqual([-51, -10, 1, 3, 23, 41]);
  });

  fit('sorts objects', () => {
    const arrToSort = [{ age: 4 }, { age: 8 }, { age: 2 }, { age: 9 }];
    const sorted = mergeSort(arrToSort, function comparator(a, b) {
      if (a.age < b.age) return -1; // returning `-1` means "a goes before b"
      if (a.age > b.age) return 1; // returning  `1` means "b goes before a"
      return 0; // returning 0 means "a and b are equivalent"
    });
    expect(sorted).toEqual([{ age: 2 }, { age: 4 }, { age: 8 }, { age: 9 }]);
  });
});
