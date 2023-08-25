module.exports = function reverse(n) {
  n = Math.abs(n);
  if (n < 10) {
      return n;
  }
  let a = n.toString();
  console.log(a);
  let b = Array.from(a);
  console.log(b);
  let c = b.reverse();
  console.log(c);
  let d = c.join("");
  console.log(d);
  return Number(d);
};
