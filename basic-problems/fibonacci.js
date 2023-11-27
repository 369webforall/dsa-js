// 0, 1, 1, 2, 3, 5, 8,

const fib = (n) => {
  const arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[n];
};

console.log(fib(6));

// Recursive function

const fibR = function (n) {
  if (n <= 1) return n;

  return fibR(n - 2) + fibR(n - 1);
};

// 1  + 1

console.log(fibR(3));
