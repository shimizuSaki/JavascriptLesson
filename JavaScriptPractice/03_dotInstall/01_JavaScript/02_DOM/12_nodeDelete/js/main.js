'use strict';
{
    document.querySelector('button').addEventListener('click', () => {
      const item1 = document.querySelectorAll('li')[1];

      // 古いブラウザでは使えない。
      // item1.remove();

      document.querySelector('ul').removeChild(item1);
      // 親ノード.removeChild(削除するノード);

    });
}