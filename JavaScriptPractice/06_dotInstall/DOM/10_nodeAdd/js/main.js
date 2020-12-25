'use strict';
{
    document.querySelector('button').addEventListener('click', () => {
      // 要素を作る
      const item2 = document.createElement('li')
      item2.textContent = 'item 2';

      // 作った要素をulの一番後ろに追加する
      const ul = document.querySelector('ul');
      ul.appendChild(item2);
    });
}