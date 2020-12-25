'use strict';
{
  // function update(){
    // 複数操作したい場合はforEach回す。
    // document.querySelectorAll('p').forEach((p,index) => {
    //   p.textContent = `${index}番目のpです!`;
    // });
  // }

  // ボタンで表示が変わるように書き換え
  document.querySelector('button').addEventListener('click', () => {
    document.querySelectorAll('p').forEach((p,index) => {
      p.textContent = `${index}番目のpです!`;
    });
  });
  // この時、一箇所でしかこの処理を使っていないので、addEventListenerの第二引数に直接指定してある。
}
