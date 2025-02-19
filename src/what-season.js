import { NotImplementedError } from '../extensions/index.js';


export default function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error('Invalid date!');
  }
  if (Object.getOwnPropertyNames(date).length > 0 ) {
    throw new Error('Invalid date!');
  }
  
  if (date.getMonth() >= 2 && date.getMonth() <= 4) return 'spring';
  if (date.getMonth() >= 5 && date.getMonth() <= 7) return 'summer';
  if (date.getMonth() >= 8 && date.getMonth() <= 10) return 'autumn';
  if (
    date.getMonth() === 11 ||
    date.getMonth() === 0 ||
    date.getMonth() === 1
  )
    return 'winter';
}
