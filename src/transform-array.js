import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  let arrInterim = [];
  let arrResult = [];

  if (Array.isArray(arr)) {
    arr.forEach((element) => arrInterim.push(element));

    for (let i = 0; i <= arrInterim.length; i++) {
      if (
        arrInterim[i] === '--discard-next' &&
        arrInterim[i] !== arrInterim[arrInterim.length - 1]
      ) {
        arrInterim.splice([i + 1], 1);
      }
      if (arrInterim[i] === '--discard-prev' && i !== 0) {
        arrInterim.splice([i - 1], 1);
      }

      if (
        arrInterim[i] === '--double-next' &&
        arrInterim[i] !== arrInterim[arrInterim.length - 1]
      ) {
        let double = arrInterim[i + 1];

        arrInterim.splice([i + 1], 0, double);
      }

      if (
        arrInterim[i] === '--double-prev' &&
        arrInterim[i] !== arrInterim[0] &&
        arrInterim[i - 1] !== '--discard-next'
      ) {
        let double = arrInterim[i - 1];

        arrInterim.splice([i + 1], 0, double);
      }
    }

    arrInterim.forEach((item) => {
      if (
        item !== '--double-prev' &&
        item !== '--discard-prev' &&
        item !== '--double-next' &&
        item !== '--discard-next'
      ) {
        arrResult.push(item);
      }
    });

    return arrResult;

  } else throw new Error("'arr' parameter must be an instance of the Array!");
}
