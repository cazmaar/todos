function lastDigit(n, d) {
  const string = String(n).split("");
  const num = string.map((item) => (item = Number(item)));
  const arr = [];
  if (d <= 0) {
    console.log([]);
  } else if (d > string.length) {
    console.log(num);
  } else {
    for (let i = num.length - 1; (arr.length-1 === d); i--) {
      arr.push(num[i]);
      console.log("ok");
    }
    console.log("ss", arr);

  }
}

lastDigit(234, 2);
