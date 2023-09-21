/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = {};
  for (const str of strs) {
    const sortedStr = str.split("").sort().join("");
    if (map[sortedStr]) {
      map[sortedStr] = [...map[sortedStr], str];
    } else {
      map[sortedStr] = [str];
    }
  }
  console.log(map);
  return Object.values(map);
};
