'use strict';
{
    document.querySelector('button').addEventListener('click', () => {

      const item0 = document.querySelectorAll('li')[0];

      // trueは要素の中身を複製する、falseは要素の中身を複製しない。
      const copy = item0.cloneNode(true);

      // 親要素とitem2を取得
      const ul = document.querySelector('ul');
      const item2 = document.querySelectorAll('li')[2];

      // ul内に挿入、copyをitem2の手前へ
      ul.insertBefore(copy, item2);
    });
}