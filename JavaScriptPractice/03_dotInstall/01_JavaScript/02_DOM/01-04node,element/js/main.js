'use strict';
{
  function update(){
    // document.querySelector('h1').textContent = 'Changed!';
    // document.querySelector('#target').textContent = 'Changed!';
    // document.getElementById('target').textContent = 'Changed!';
    // 最初に見つかった１つだけ操作することが可能。

    // 最初以外を操作したいときは下記を利用。
    // document.querySelectorAll('p')[1].textContent = 'Changed!';
  
    // 複数操作したい場合はforEach回す。
    document.querySelectorAll('p').forEach((p,index) => {
      p.textContent = `${index}番目のpです!`;
    });
  }
  setTimeout(update, 1000);
  // そのほかにも
  // document.getElementsByTagName('');
  // document.getElementsByClassName('');
  // などが利用できる。
}
