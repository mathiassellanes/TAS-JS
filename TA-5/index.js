function leapYears(año) {
  if (año % 4 === 0 && año % 100 !== 0 || año % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(leapYears(2020)); // true


console.log(leapYears(2001)); // false
