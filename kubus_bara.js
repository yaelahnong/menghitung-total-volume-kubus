function sumVolumeKubus(arrOfSide) {
  return arrOfSide.reduce((acc, cur) => {
    return acc + Math.pow(cur, 3);
  }, 0);
}

console.log(sumVolumeKubus([2, 2, 2]));
