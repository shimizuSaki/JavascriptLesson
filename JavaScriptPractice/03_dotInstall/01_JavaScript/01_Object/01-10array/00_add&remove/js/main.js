'use strict';
{
  const scores = [80, 90, 40];

  //配列の最初へ要素を追加
  scores.unshift(60, 50);
  console.log(scores);
  //60, 50, 80, 90, 40

  //配列の最初から要素を削除
  scores.shift();
  console.log(scores);
  //50, 80, 90, 40

  //配列の最後へ要素を追加
  scores.push(60, 50);
  console.log(scores);
  //50, 80, 90, 40, 60, 50

  //配列の最後から要素を削除
  scores.pop();
  console.log(scores);
  //50, 80, 90, 40, 60
  
  // scores.splice(変化開始位置, 削除する要素の数, 追加要素);
  scores.splice(2, 2, 20, 70);
  console.log(scores);
  // 50, 80, 20, 70, 60
}