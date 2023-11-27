const anagram = (s, t) => {
  s = s.split('').sort().join('');
  t = t.split('').sort().join('');

  console.log(s);
  console.log(t);
  return s === t;
};

console.log(anagram('anagram', 'nagaram'));
