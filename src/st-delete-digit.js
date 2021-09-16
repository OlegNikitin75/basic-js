import { NotImplementedError } from '../extensions/index.js';


export default function deleteDigit(n) {

  const string = n.toString();
  for (let i = 0; i < string.length; i++) {
    if (string[i] < string[i + 1]) {
      return Number(string.replace(string[i], ''));
    }
    if (string[string.length - 2] > string[string.length - 1])
      return Number(string.slice(0, -1));
  }
}