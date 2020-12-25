'use strict';
{
  const scores = [80, 90, 40, 70];
  
  const [a, b, c, d] = scores;
  console.log(scores);
  console.log(a); //80
}
{
  const scores = [80, 90, 40, 70];

  const [a, b, ...others] = scores;
  console.log(scores);
  console.log(a); //80
  console.log(b); //90
  console.log(others); //40, 70
}