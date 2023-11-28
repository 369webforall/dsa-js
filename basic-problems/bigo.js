// Big O Notation
//Also referred to as time complexity
//which one is better Implementation

// const sumUpTo = (n) => {
//   let total = 0;
//   for (let i = 1; i <= n; i++) {
//     total += i;
//   }
//   return total;
// };

const SumUpTo2 = (n) => {
  return (n * (n + 1)) / 2;
};

console.log(SumUpTo2(3));

// O(1)- constant time operation

// Big O Notation gives us a precise, numeric and objective way of judging the performance of our code, just by reading it.

// Why does Big O, time complexity matter?
// It helps you write better code and becaue as inputs gets bigger and bigger, you code will be efficient . eg Users/Posts

// function printName(n) {
//   for (let i = 1; i <= n; i++) {
//     for (let i = 1; i <= n; i++) {
//       console.log('print Name n time');
//     }
//   }
// }

// printName(3);

// O(2n) - >O(n^2)

//Sum of digits of number , 2456 -> 2+4+5+6 = 17

// function sum(n) {
//   let arr = n.toString().split('');
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += +arr[i];
//   }
//   return total;
// }

// console.log(sum(45621));

function sumofDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

console.log(sumofDigits(45621));

//O(1)

//3. count the number of digits - 24568 -> 5

function countDigit(num) {
  num = Math.abs(num);
  let count = 0;
  do {
    count += 1;
    num = Math.floor(num / 10);
  } while (num > 0);

  return count;
}

console.log(countDigit(245682378));

// find the missing in array [0, n]

const missingNumber = function (nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return (nums.length * (nums.length + 1)) / 2 - sum;
};

//[3, 0 ,1] = 3+0+1 = 4, 1+2+3 = 6 -4 = 2

console.log(missingNumber([3, 0, 2, 1, 4, 6]));
