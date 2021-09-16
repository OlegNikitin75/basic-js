import { NotImplementedError } from '../extensions/index.js';


export default function getCommonCharacterCount(s1, s2) {
  let counter = 0;
  const arr1 = s1.split('');
  for (let i = arr1.length; i > 0; i--) {
    let elem1 = arr1.pop();
    if (s2.includes(elem1)) {
      counter++;
      s2 = s2.replace(elem1, '');
    }
  }
  return counter;
}

