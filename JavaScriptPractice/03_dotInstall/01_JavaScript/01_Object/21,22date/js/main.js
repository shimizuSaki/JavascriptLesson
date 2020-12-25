'use strict';
{
  const d = new Date();
  console.log(d);
  
  console.log(`${d.getFullYear()}年`);
  console.log(`${d.getMonth()}月`);
  console.log(`${d.getDate()}日`);
  console.log(`${d.getDay()}曜日`);
  
  console.log(`${d.getHours()}時間`);
  console.log(`${d.getMinutes()}分`);
  console.log(`${d.getSeconds()}秒`);
  console.log(`${d.getMilliseconds()}ミリ秒`);
  
  console.log(`${d.getMonth() + 1} 月 ${d.getDate()} 日`);
  console.log(`UTC（協定世界時）${d.getTime()}`);

  console.log('');
  console.log('==日付の操作==');
  const date = new Date(2019, 10, 20);
  console.log('2019年の10月(2019, 10, 20)\n' + date);
  
  date.setHours(10, 20, 60);
  console.log('時間を設定(10, 20, 60)\n' + date);
  
  date.setDate(35);
  console.log('35日を設定（無い日付）\n' + date);
  
  date.setDate(date.getDate() + 3);
  console.log('3日後に設定\n' + date);
}