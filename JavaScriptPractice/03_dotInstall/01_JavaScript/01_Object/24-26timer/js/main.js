'use strict';
{
  let i = 0;
  function showTime() {
    i++;
    console.log(`${i}回目の処理`);
    if (i >= 3) {
      clearInterval(intervalId);
    }
  }
  const intervalId = setInterval(showTime, 1000);

  function periodTime() {
    console.log('リロード5秒後に1度だけメッセージ');
  };
  setTimeout(periodTime, 5000);


  let j = 0;
  function timeLap() {
    console.log('タイムラップ' + `${j}`);
    const timeLapId = setTimeout(timeLap, 1000);
    j++;
    if (j > 4) {
      clearTimeout(timeLapId);
    }
  };
  timeLap();
}