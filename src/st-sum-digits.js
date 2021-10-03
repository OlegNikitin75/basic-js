import { NotImplementedError } from '../extensions/index.js';

export default function getSumOfDigits(n) {
  if (n < 10) return n;
  return getSumOfDigits(n.toString().split('').
    reduce((a, b) => a + Number(b), 0));
}