/**
 * SOAL 2
 * Buatlah fungsi dengan input array integer untuk mengurutkan angka dari kecil kebesar
 * dan besar kekecil dengan manual tanpa fungsi bawaan javascript,
 */

/**
 * a helper function for mergeSort
 *
 * @param {Array} left
 * @param {Array} right
 * @param {Boolean} isAscending
 *
 * @return {Array}
 */
function merge(left, right, isAscending = true) {
  const result = [];

  while (left.length && right.length) {
    const condition = isAscending ? left[0] < right[0] : left[0] > right[0];

    if (condition) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  // menggabungkan array result dengan array yang tersisa seandainya belum habis
  return [...result, ...left, ...right];
}

/**
 * a JavaScript implementation of mergeSort - O(n log n)
 *
 * @param {Array} arr
 * @param {Boolean} isAscending
 *
 * @return {Array}
 */
function mergeSort(arr, isAscending = true) {
  if (arr.length === 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(
    mergeSort(left, isAscending),
    mergeSort(right, isAscending),
    isAscending
  );
}

module.exports = mergeSort;
