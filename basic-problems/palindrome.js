// palindrome
// 121 => true
// 120 => false

const checkPalindrome = (x) => {
  let reverseValue = x.toString().split('').reverse().join('');
  return x > 0 ? x === +reverseValue : false;
};

console.log(checkPalindrome(12156));
