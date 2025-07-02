function digitsBetween1AndN(n) {
  let qtt = 0;

  for (let i = 1; i < n; i++) {
    qtt += i.toString().length;
  }
  return qtt
}

console.log(digitsBetween1AndN(2020))

