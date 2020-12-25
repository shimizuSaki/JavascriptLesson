'use strict';

// メソッド（オブジェクトの中に含まれる処理）
{
  const posts = [
    {
      text: 'JavaScriptの勉強中。',
      likeCount: 0,
      // show: function() {
      //   console.log(`${this.text} - ${this.likeCount}likes`);
      // }
      show() {
        console.log(`${this.text} - ${this.likeCount}likes`);
      }
    },
    {
      text: 'プログラミングたのしい！',
      likeCount: 0,
      show() {
        console.log(`${this.text} - ${this.likeCount}likes`);
      }
    },
  ];
  // show(posts[0]); 
  posts[0].show()
  posts[1].show()
}

/*
デメリット：
同じ目的の処理がしたいのに各オブジェクトごとに処理を書かなくてはいけない。（カプセル化）
投稿内容の型？がないため管理がしづらい？
関数名や変数名の変更に弱い。
*/

/*
メリット：
データと処理内容がまとまっているので何に使いたいのかが明確でわかりやすい。
*/

/*
思ったこと：
明確な"特定の要素"に対してのみ使いたい処理を書くのに適切？
*/