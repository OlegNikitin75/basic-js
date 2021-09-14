import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  let string = '';
  let array = [];

  if (Array.isArray(members)) {
    members.forEach((element) => {
      if (typeof element === 'string') {
        array.push(element.trim().toUpperCase());
      }
    });
  } else return false

  array.sort();
  array.forEach((element) => {
    let str = element.split('');

    for (let i = 0; i < str.length; i++) {
      string += str[0];
      return;
    }
  });
  return string;
}
