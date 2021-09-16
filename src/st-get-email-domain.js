import { NotImplementedError } from '../extensions/index.js';

export default function getEmailDomain(email) {
  const index = email.lastIndexOf('@');
  return email.slice(index + 1);


}
