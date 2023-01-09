const mergeSort = require("./2-sort");

const ARRAYS = [
  [9, 5, 2, 8, 7, 6, 1, 3, 4, 0],
  [2, 3, 1, 7, 5, 8, 9, 0, 4, 6],
  [8, 4, 9, 6, 2, 1, 7, 5, 3, 0],
  [7, 9, 0, 2, 3, 1, 5, 8, 6, 4],
  [3, 6, 2, 4, 8, 1, 0, 9, 7, 5],
  [1, 0, 3, 7, 5, 4, 6, 9, 8, 2],
  [4, 1, 7, 5, 8, 0, 9, 3, 2, 6],
  [5, 8, 1, 6, 0, 7, 3, 2, 9, 4],
  [0, 6, 8, 4, 7, 5, 2, 3, 1, 9],
  [6, 3, 9, 7, 4, 2, 1, 8, 5, 0],
];

test("mergeSort function exists", () => {
  expect(typeof mergeSort).toEqual("function");
});

test("mergeSort function sorts arrays correctly", () => {
  ARRAYS.forEach((array) => {
    expect(mergeSort(array)).toEqual(array.sort());
  });
});

test("mergeSort function sorts arrays correctly in descending order", () => {
  ARRAYS.forEach((array) => {
    expect(mergeSort(array, false)).toEqual(array.sort().reverse());
  });
});
