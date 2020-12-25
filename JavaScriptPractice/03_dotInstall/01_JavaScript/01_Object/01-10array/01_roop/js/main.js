'use strict';
{
  const scores =[80, 90, 40];

  for (let i = 0; i < scores.length; i++) {
    console.log(`Scores${i}: ${scores[i]}`);
  }
}
{
  const scores = [80, 90, 40, 70];
  scores.forEach((score, i) => {
    console.log(`Score${i}: ${score}`);
  });
}
{
  const prices = [80, 90, 40, 70];
  const updatePrices = prices.map((price) => {
    return price + 20;
  });
  console.log(updatePrices);
}
{
  const numbers = [3, 4, 5, 6];
  const evenNumbers = numbers.filter((number) => {
    if (number % 2 === 0) {
      return true;
    } else {
      return false;
    };
  });
  console.log(evenNumbers);
}