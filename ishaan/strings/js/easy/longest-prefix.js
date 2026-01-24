const strs = ["flower", "flow", "flight"];

function longestCommonPrefix(strs) {
  if (strs.length === 0) return;

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
