// 409. Longest Palindrome
// Easy

// 2862

// 164

// Add to List

// Share
// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

// Example 1:

// Input: s = "abccccdd"
// Output: 7
// Explanation:
// One longest palindrome that can be built is "dccaccd", whose length is 7.
// Example 2:

// Input: s = "a"
// Output: 1
// Example 3:

// Input: s = "bb"
// Output: 2

// Constraints:

// 1 <= s.length <= 2000
// s consists of lowercase and/or uppercase English letters only.

const longestPalindrome = (str) => {
  let dict = {},
    single = 0,
    result = 0;

  for (let char of str)
    if (!dict[char]) dict[char] = 1;
    else dict[char]++;

  for (let key in dict) {
    if (dict[key] % 2) single = 1;
    result += Math.floor(dict[key] / 2) * 2;
  }
  return result + single;
};

// Create a dict to keep track of all the chars within str
// Create an int that will keep track of whether or not there will be a single char middle point
// create result to track total pairs of letters

// iterate through str to populate dict appropriately
// iterate through dict to check for potential single values and add pairs to result
// return result + any single chars for a middle point;
