// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false

// Constraints:

// 0 <= s.length <= 100
// 0 <= t.length <= 104
// s and t consist only of lowercase English letters.

// Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?

const isSubsequence = (sub, str) => {
  let result = '';
  for (
    let idxStr = 0, idxSub = 0;
    idxStr < str.length && idxSub < sub.length;
    idxStr++
  )
    if (str[idxStr] === sub[idxSub]) {
      result += sub[idxSub];
      idxSub++;
    }
  return result === sub;
};

// First we're going to declare a result var to help account for "" inputs
// Create a for loop using the following:
// Create two trackers, one for index of substring, one for index of the string to be checked
// run until either tracker hits the end of their respective string
// increment ONLY to be checked index tracker

// for each iteration we will check to see if str[idxStr] === sub[idxSub]
// if so, add that char to result and increment idxSub by 1;

// after the loop we return whether result === substring
