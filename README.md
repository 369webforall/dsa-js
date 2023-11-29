# dsa-js

[Youtube video series](https://www.youtube.com/watch?v=coqQwbDezUA&list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP&index=1)

[BIG O Notation-Freecodecamp](https://www.freecodecamp.org/news/big-o-cheat-sheet-time-complexity-chart/)

Data Structures and Algorithms in JavaScript

## Class recording

[DSA-1](https://youtu.be/K0rzX_fS2MU)

[DSA-2](https://youtu.be/GqF-JUVXe8s)

[DSA-3](https://youtu.be/H7fNitXN0GI)

# Content

1. Arrays
2. Strings
3. Recursion
4. LinkedList
5. Sorting & Search
6. Trees
7. Graphs
8. Dynamic Programming (DP)

eg. if you have list of name and want to sort from A to Z then we can use sorting algorithms

## Solve problem

- Data Structures in JavaScript ( Top 4 Questions ) - Frontend DSA Interview Questions

```javascript
// Ques 1 - Palindrome Number
// An integer is a palindrome when it reads the same forward and backward.

// Input: x = 121  ----->>>>>   Output: true
// Input: x = 10   ----->>>>>   Output: false

var isPalindrome = function (x) {
  return x < 0 ? false : x === +x.toString().split('').reverse().join('');
};

const res = isPalindrome(10);
console.log(res);

// 121 => "121" => ["1","2","1"] => ["1","2","1"] => "121"
// https://leetcode.com/problems/palindrome-number/
```

```javascript
// Ques 2 - Fibonacci Number
// Fibonacci Series -> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1

// Input: n = 3  ----->>>>>  Output: 2

// Normal Solution
var fib = function (n) {
  const arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr[n];
};

// Recursive Solution

const fib = function (n) {
  if (n <= 1) return n;

  return fib(n - 1) + fib(n - 2);
};

// One Liner
const fib = (n) => (n <= 1 ? n : fib(n - 1) + fib(n - 2));

// n = 3 => 1 + 1 => 2
// fib(2) => 0 + 1 => 1
```

```javascript
// Ques 3 - Valid Anagram
// An Anagram is a word or phrase formed by rearranging the letters of
// a different word or phrase, using all the original letters exactly once.

// Input: (s = "anagram"), (t = "nagaram"); ----->>>>>   Output: true;
// Input: (s = "rat"), (t = "car");         ----->>>>>   Output: false;

// 1st Approach
const isAnagram1 = function (s, t) {
  s = s.split('').sort().join('');
  t = t.split('').sort().join('');

  return s === t;
};

// anagram => [a,n,a,g,r,a,m] => [a,a,a,m,n,r] => aaamnr
// nagaram => [n,a,g,a,r,a,m] => [a,a,a,m,n,r] => aaamnr

const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < s.length; i++) {
    obj1[s[i]] = (obj1[s[i]] || 0) + 1;
    obj2[t[i]] = (obj2[t[i]] || 0) + 1;
  }

  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
};

console.log(isAnagram('anagram', 'nagarm'));

// rat / tar

// {
//     r: 1,
//     a: 1,
//     t:1
// }

// {
//     t: 1,
//     a: 1,
//     r:1
// }
```

```javascript
// Ques 4 - Two Sum
// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1] (Because nums[0] + nums[1] == 9, we return [0, 1])
// Input: nums = [3, 2, 4], target = 6
// Output: [1, 2]

// Brute Force Solution
const twoSum1 = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      // logic
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};
// [3,2,4] => 3+2, 3+4, 2+4 => 7, 7, 6

// Using JS Objects

const twoSum = function (nums, target) {
  var obj = {};

  for (let i = 0; i < nums.length; i++) {
    var n = nums[i];

    if (obj[target - n] >= 0) {
      return [obj[target - n], i];
    } else {
      obj[n] = i;
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 26));

// nums = [2,7,11,15], target = 26
// {
//     "2":0,  // 26 - 2 = 24
//     "7": 1,
//     "11": 2,  // 26-11 = 15
//     "15":     // 26 - 15 = 11 => [obj[11],3] => [2, 3]
// }
```

## Let's solve problem using for, while, do while loops.

1. Sum of all natural number from 1 to n eg- n = 3; 1+2+3 = 6

2. Sum of digits of number , 2456 -> 2+4+5+6 = 17

3. count the number of digits - 24568 -> 5

## Leetcode - 268

Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

Example 1:

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

## Big O Notation / Time complexity

Big O Notation
Also referred to as time complexity
which one is better Implementation

```javascript
const sumUpTo = (n) => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
};
```

```javascript
const SumUpTo2 = (n) => {
  return (n * (n + 1)) / 2;
};
```

Big O Notation gives us a precise, numeric and objective way of judging the performance of our code, just by reading it.

Why does Big O / time complexity matter?
It helps you write better code and becaue as inputs gets bigger and bigger, you code will be efficient . eg Users/Posts

**Counting the Operation**

```
const sumUpTo = (n) => {
let total = 0;
for (let i = 1; i <= n; i++) {
total += i;
}
return total;
};

Takes 1 x N operation

O(n) -> order or n operation
```

```
const SumUpTo2 = (n) => {
return (n * (n + 1)) / 2;
};
```

Always just 3 operation, no matter how large is the n.

Total in above code there is 3 operation
O(3) -> O(1)

**Simplifying Big O Notation**

- Basically constant doesn't matter

O(12) -> O(1)
O(500) -> O(1)
O(n/2) ->(n)
O(2n) - O(n)
O(13n^2) ->O(n^2)
O(n+1)->O(n)
O(n^2+13n+8)-> O(n^2)

# Linked List

- How linked list work
- Understand the logic of linked list
- Write program to implement linked list
- Operation in linked list

```javascript
// Linked List in Javascript

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  // Add in begining of the list

  addFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  // add at last of node
  addLast(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }
  // find the size of list

  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  // add at certain point or index

  addAt(index, data) {
    if (index < 0 || index > this.size()) {
      console.error('Invalid Index');
      return;
    }

    const newNode = new Node(data);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    newNode.next = current.next;
    current.next = newNode;
  }

  // remove from first of the node

  removeTop() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  // remove from last of the node
  removeLast() {
    if (!this.head) {
      return;
    }

    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }

    current.next = null;
  }
  // remove at certain index

  removeAt(index) {
    if (index < 0 || index > this.size()) {
      console.error('Invalid Index');
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
    }
  }

  // print the list

  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const linkedlist = new LinkedList();

linkedlist.addFirst(5);
linkedlist.addFirst(3);
linkedlist.addFirst(8);
linkedlist.addLast(6);

linkedlist.removeTop();

linkedlist.addAt(2, 8);

linkedlist.removeLast();
linkedlist.removeAt(2);

linkedlist.print();
console.log('size = ' + linkedlist.size());
```

# from leetcode 28

Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.

```javascript
const strStr = function (haystack, needle) {
  if (needle.length === 0) return 0;
  if (haystack.length === 0) return -1;

  for (let i = 0; i < haystack.length; i++) {
    if (i + needle.length > haystack.length) break;

    for (let j = 0; j < needle.length; j++) {
      if (haystack.charAt(i + j) !== needle.charAt(j)) {
        break;
      }

      if (j === needle.length - 1) return i;
    }
  }

  return -1;
};
```
