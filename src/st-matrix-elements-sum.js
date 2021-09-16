import { NotImplementedError } from '../extensions/index.js';

export default function getMatrixElementsSum(matrix) {
  let sum = 0;
  const row = matrix.length;
  const col = matrix[0].length;
  for (let i = 0; i < row; i++) {
    for (let k = 0; k < col; k++) {
      if (i === 0) sum += matrix[0][k];
      if (matrix[i - 1] && matrix[i - 1][k] !== 0) sum += matrix[i][k];
    }
  }
  return sum;
}
