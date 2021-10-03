import { NotImplementedError } from '../extensions/index.js';

export default function isMAC48Address(n) {
  const arrMacSymbol = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '-'];
  const arr = n.split('');
  const newArr = [];
  arr.forEach(item => {
    if (arrMacSymbol.includes(item)) newArr.push(item);
  });
  if (newArr.length === arr.length) return true;
  else return false;
}
