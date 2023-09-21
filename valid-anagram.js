/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const smap = {};
  const tmap = {};
  let returnValue = true;

  for (const i of s) {
    if (smap[i]) {
      smap[i] = smap[i] + 1;
    } else {
      smap[i] = 1;
    }
  }
  for (const i of t) {
    if (tmap[i]) {
      tmap[i] = tmap[i] + 1;
    } else {
      tmap[i] = 1;
    }
  }
  console.log(tmap, smap);
  for (const key of Object.keys(smap)) {
    console.log(smap[key], tmap[key]);
    if (!smap[key] || !tmap[key]) {
      return false;
    }

    if (smap[key] !== tmap[key]) {
      return false;
    }
  }
  return returnValue;
};
