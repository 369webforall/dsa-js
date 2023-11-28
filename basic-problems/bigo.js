// Big O Notation
//Also referred to as time complexity
//which one is better Implementation

const sumUpTo = (n) => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
};

const SumUpTo2 = (n) => {
  return (n * (n + 1)) / 2;
};

console.log(sumUpTo(1000000000));

// Big O Notation gives us a precise, numeric and objective way of judging the performance of our code, just by reading it.

// Why does Big O, time complexity matter?
// It helps you write better code and becaue as inputs gets bigger and bigger, you code will be efficient . eg Users/Posts
