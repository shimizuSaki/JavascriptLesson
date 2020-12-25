'use strict';
{
    document.querySelector('button').addEventListener('click', () => {
      const targetNode = document.getElementById('target');
      // 書かなかったものは消えてしまう
      // targetNode.className('my-color my-border');

      // 追加してくれるのでもとのクラスを消さない
      // targetNode.classList.add('my-color');

      // 付いていない時だけつける、付いてたらはずす。
      // if (targetNode.classList.contains('my-color') === true) {
      //   targetNode.classList.remove('my-color');
      // } else {
      //   targetNode.classList.add('my-color');
      // }

      // これだけでも上記と同じ意味になる。
      targetNode.classList.toggle('my-color');
    });
}