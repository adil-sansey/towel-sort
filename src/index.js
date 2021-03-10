module.exports = function towelSort(matrix) {
  if (!matrix) return [];

  let sortedResult = [];
  let arr = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 == 0) sortedResult = arr.concat(sortedResult, matrix[i]); else
      sortedResult = arr.concat(sortedResult, matrix[i].reverse());
  }
  return sortedResult;
}