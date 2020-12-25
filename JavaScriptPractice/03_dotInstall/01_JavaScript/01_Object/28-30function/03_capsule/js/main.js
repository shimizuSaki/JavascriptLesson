'use strict';

// プロパティの操作
// カプセル化
{
  class Post {
    constructor(text) {
      this.text = text;
      this.likeCount = 0;
    }

    show() {
      console.log(`${this.text} - ${this.likeCount}likes`);
    }

    like() {
      this.likeCount++;
      // this.show(); //機能拡張
    }
  }

  const posts = [
    new Post('JavaScriptの勉強中…'), 
    new Post('プログラミング楽しい！'),
  ];

  posts[0].like();

  // posts[0].likeCount++;
  // 同じ処理ではあるが名称変更や機能拡張に不便
  
  posts[0].show();
  posts[1].show();
}

/*

ポイント：
メソッド内でthisを使うと、同じクラス内の別メソッドを呼び出せる。
単純な機能でも「役割」である場合はメソッドにしておくと変更がしやすい。

デメリット：
オブジェクトの結合が密（依存的）になってしまう。

メリット：


思ったこと：
なんかどっかでカプセル化しすぎるとやばいと聞いたことがあるから、その辺りしっかり把握した上で利用したい。

関連サイト：
https://blog.ohgaki.net/%E3%82%B3%E3%83%BC%E3%83%89%E3%81%AE%E5%85%B1%E9%80%9A%E5%8C%96%E3%82%92%E5%8E%9F%E5%89%87%E3%81%A8%E3%81%99%E3%82%8B%E3%81%AE%E3%81%AF%E3%82%A2%E3%83%B3%E3%83%81%E3%83%97%E3%83%A9%E3%82%AF%E3%83%86
https://qiita.com/azk0305/items/914f6e447b41d4ced25e

*/
