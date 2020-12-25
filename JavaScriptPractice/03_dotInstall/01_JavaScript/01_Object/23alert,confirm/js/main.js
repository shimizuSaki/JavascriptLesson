'use strict';
{
  alert('アラートですよ！');
  const answer = confirm('確認ですよ！');
  console.log(answer);
  
  if (answer) {
    alert('OKをおしました！');
  } else {
    alert('キャンセルをおしました！');
  }
}