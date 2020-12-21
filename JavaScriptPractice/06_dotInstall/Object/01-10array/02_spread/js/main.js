'use strict';
{
  const otherScores = [10, 20];
  let scores = [80, 90, 40, 70, ...otherScores];
  console.log(scores);
}

{
  const otherScores = [10, 20];
  let scores = [80, 90, 40, 70];
  scores = [...scores, ...otherScores];
  console.log(scores);
}