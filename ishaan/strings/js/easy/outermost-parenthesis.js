// Remove outermost parenthesis
const s = "((()))";

function outermost(s) {
  let result = "";
  let balance = 0;

  for (let i of s) {
    if (i === "(") {
      if (balance > 0) result += i;
      balance++;
    } else if (i === ")") {
      balance--;
      if (balance > 0) result += i;
    }
  }
  return result;
}

console.log(outermost(s));
