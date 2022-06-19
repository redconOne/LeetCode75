// 724. Find Pivot Index
// Easy

// 3389

// 387

// Add to List

// Share
// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.

// Example 1:

// Input: nums = [1,7,3,6,5,6]
// Output: 3
// Explanation:
// The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11
// Example 2:

// Input: nums = [1,2,3]
// Output: -1
// Explanation:
// There is no index that satisfies the conditions in the problem statement.
// Example 3:

// Input: nums = [2,1,-1]
// Output: 0
// Explanation:
// The pivot index is 0.
// Left sum = 0 (no elements to the left of index 0)
// Right sum = nums[1] + nums[2] = 1 + -1 = 0

// Constraints:

// 1 <= nums.length <= 104
// -1000 <= nums[i] <= 1000

// Note: This question is the same as 1991: https://leetcode.com/problems/find-the-middle-index-in-array/

const pivotIndex = (nums) => {
  let leftSum = 0,
    rightSum = nums.slice(1).reduce((sum, item) => sum + item, 0);
  if (leftSum === rightSum) return 0;
  for (let i = 1; i < nums.length; i++) {
    leftSum += nums[i - 1];
    rightSum -= nums[i];
    if (leftSum === rightSum) return i;
  }
  return -1;
};

// First we declare left and right values
// leftVal will be 0, as when we start there will be nothing to the left of index 0
// rightVal will be everything from index1 onwards, added together.
// Once values are set we check to see if they are equal, which would result in a return of 0;
// Create a for loop starting at index 1 and iterate through every item in the array from 1 onward
// Add each preceeding item: nums[i-1] to leftVal and subtract each current item: nums[i] from rightVal
// check to see if left === right and if so return index;
// if we make it through the loop without finding the proper index we return -1 as there is no pivot index
