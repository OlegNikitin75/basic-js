import { NotImplementedError } from '../extensions/index.js';

export default function sortByHeight(arr) {
  let newArr = arr;
  let index = 0;
  newArr = newArr.filter(item => {
    if (item !== -1) {
      return item;
    }
  }).sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      arr[i] = newArr[index];
      index++;
    }
  }
  return arr;
}
