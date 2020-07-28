let nums = [1, 3, 5, 2, 4, 7];
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let element = nums[i];
    for (let j = 1; j < nums.length; j++) {
      let secondElement = nums[j];
      if (element + secondElement === target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum(nums, 8));
