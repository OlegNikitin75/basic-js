import { NotImplementedError } from '../extensions/index.js';

export default function encodeLine(str) {
  const arr = str.split('')
  const stack = [];
  let stringEncodeArr = [];
  let counter = 1;
  stack.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === stack[0]) {
      counter++;
    }
    if (arr[i] !== stack[0]) {
      if (counter > 1) stringEncodeArr.push(counter);
      counter = 1;
      stringEncodeArr.push(stack[0]);
      stack[0] = arr[i];
    }
  }
  if (counter > 1) stringEncodeArr.push(counter);
  stringEncodeArr.push(stack[0]);
  return stringEncodeArr.join('');
}
