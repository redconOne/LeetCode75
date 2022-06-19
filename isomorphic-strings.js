// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true

// Constraints:

// 1 <= s.length <= 5 * 104
// t.length == s.length
// s and t consist of any valid ascii character.

const isIsomorphic = (str1, str2) => {
  let dict1 = {},
    dict2 = {};
  for (let i = 0; i < str1.length && i < str2.length; i++) {
    if (!dict1[str1[i]]) dict1[str1[i]] = str2[i];
    else if (dict1[str1[i]] !== str2[i]) return false;
    if (!dict2[str2[i]]) dict2[str2[i]] = str1[i];
    else if (dict2[str2[i]] !== str1[i]) return false;
  }
  return true;
};

// First we'll create two dictionary objects.
// When iterating through the strings we populate the dictionaries
// if the dictionary already contains the value, we check to see if the opposite string === said value
// if no, return false
// once either string is iterated completely we are done with the loop and return true;
