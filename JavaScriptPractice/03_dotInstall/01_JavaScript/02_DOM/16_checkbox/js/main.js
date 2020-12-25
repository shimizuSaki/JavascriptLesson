'use strict';
{
  document.querySelector('button').addEventListener('click', () => {
    const colors = document.querySelectorAll('input');
    const selectedColors = [];

    colors.forEach (color => {
      if (color.checked === true) {
        selectedColors.push(color.value);
      }
    });

    const li = document.createElement('li');
    // 配列が文字で出力されるときはデフォルトがカンマ区切りなので、カンマで区切りたい場合はjoinが不要。
    // li.textContent = selectedColors.join(',');
    li.textContent = selectedColors;
    document.querySelector('ul').appendChild(li);
  });
}