/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const map = new Map();
  for (const i of nums) {
    if (map.has(i)) {
      return true;
    }
    map.set(i, i);
  }
  return false;
};
