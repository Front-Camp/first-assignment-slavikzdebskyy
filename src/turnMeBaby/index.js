/**
 * This function should just reverse string
 *
 * @param {string} str - string of any length
 * @return {string} - reversed string
 * @example
 * turnMeBaby('hello');     // 'olleh'
 * turnMeBaby('Some text'); // 'txet emoS'
 */
const turnMeBaby = str => {
  /* your logic here...*/
  if(typeof str != 'string'){
    return console.error('Value is not string');
  }
  reverseStr = '';
  for(let i = str.length-1; i >= 0; i--) {
    reverseStr += str[i];
  }
  return reverseStr;
};

export default turnMeBaby;
