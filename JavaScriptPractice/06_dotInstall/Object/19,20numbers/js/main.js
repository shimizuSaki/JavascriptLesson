'use strict';
{
  const scores = [100, 36, 90];
  let sum = 0;
  scores.forEach(score => {
    sum += score;
  });
  console.log(sum);
  
  let avg = sum / scores.length;
  console.log(avg);

  console.log(Math.floor(avg));
  console.log(Math.ceil(avg));
  console.log(Math.round(avg));
  console.log(avg.toFixed(3));
  console.log(Math.random());
}