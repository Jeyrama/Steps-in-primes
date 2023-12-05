/*
The prime numbers are not regularly spaced. 
For example from 2 to 3 the step is 1. 
From 3 to 5 the step is 2. From 7 to 11 it is 4. 
Between 2 and 50 we have the following pairs of 2-steps primes:
  3, 5 - 5, 7, - 11, 13, - 17, 19, - 29, 31, - 41, 43

We will write a function step with parameters:
  g (integer >= 2) which indicates the step we are looking for,
  m (integer >= 2) which gives the start of the search (m inclusive),
  n (integer >= m) which gives the end of the search (n inclusive)

In the example above step(2, 2, 50) will return [3, 5] 
which is the first pair between 2 and 50 with a 2-steps.

So this function should return the first pair of the two 
prime numbers spaced with a step of g between the limits m, 
n if these g-steps prime numbers exist otherwise null or [] or "0, 0".

Examples:
  step(2, 5, 7) --> [5, 7] or (5, 7) or {5, 7} or "5 7"
  step(2, 5, 5) --> null or [] or '0, 0'
  step(4, 130, 200) --> [163, 167] or (163, 167) or {163, 167}

Remarks:
  ([193, 197] is also such a 4-steps primes between 130 and 200 but it's not the first pair).
  step(6, 100, 110) --> [101, 107] though there is a prime between 101 and 107 which is 103; 
  the pair 101-103 is a 2-step.

Notes:
  The idea of "step" is close to that of "gap" but it is not exactly the same.
  A "gap" is more restrictive: there must be no primes in between 101-107 is a "step" but not a "gap".
*/


// Solution

function isPrime(n) {
  let r = Math.sqrt(n) | 0;
  for (let i = 2; i <= r && n % i; i++);
  return i > r;
}

function step(g, m, n) {
  for (let i = m; i <= n - g; i++) {
    if (isPrime(i) && isPrime(i + g)) {
      return [i, i + g];
    }
  }
  return null;
}

// or