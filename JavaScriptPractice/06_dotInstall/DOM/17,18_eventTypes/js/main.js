'use strict';
{
  document.querySelector('button').addEventListener('dblclick', () => {
    console.log('Double Clicked!');
  });

  // 座標を取得
  document.addEventListener('mousemove', e => {
    console.log('moved!');
    console.log(e.clientX, e.clientY);
  });

  // 押されたキーボードのキーを取得
  document.addEventListener('keydown', e => {
    console.log('moved!');
    console.log(e.key);
  });


}