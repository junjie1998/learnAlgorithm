/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 var twoSum = function (nums, target) {
    const m = new Map();
     for (let i = 0; i < nums.length; i++) {
         let a = nums[i];
         let b = target - a;
         if (m.has(b)) {
         return [m.get(b), i];
      }
     m.set(a, i);
   }
 };

 const nums = [2,7,11,15], target = 9
 console.log(twoSum(nums,target));