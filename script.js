// function averageOf4Numbers(nr1, nr2, nr3, nr4) {
//   const nr1 = 11;
//   const nr2 = 9;
//   const nr3 = 33;
//   const nr4 = 28;
//   let average = [`${nr1}`, `${nr2}`, `${nr3}`, `${nr4}`];
//   calculateAverage(average);
//   return average;
// }

// console.log(averageOf4Numbers);

function averageOf4Numbers(nr1, nr2, nr3, nr4) {
  let sum = 0;
  const average = [`${nr1}`, `${nr2}`, `${nr3}`, `${nr4}`];

  for (let i = 0; i < average.length; i++) sum += average[i];
  console.log(sum / average.length);
  console.log(sum);
  console.log(average.length);
}

averageOf4Numbers(2, 3, 4, 5);
