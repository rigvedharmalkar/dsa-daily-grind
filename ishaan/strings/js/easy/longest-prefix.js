// Leetcode Qts: 14. Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

const strs = ["flower", "flow", "flight"];

function longestCommonPrefix(strs) {
  if (strs.length === 0) return;

  // Sorting lexographically
  strs.sort();

  const first = strs[0];
  const last = strs[strs.length - 1];
  let common = "";

  for (let i = 0; i < Math.min(first.length, last.length); i++) {
    if (first[i] !== last[i]) {
      return common;
    }

    common += first[i];
  }
  return common;
}

console.log(longestCommonPrefix(strs));
