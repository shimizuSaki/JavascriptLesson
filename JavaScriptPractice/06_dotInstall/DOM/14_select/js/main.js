'use strict';
{
  document.querySelector('button').addEventListener('click', () => {
    const li = document.createElement('li');
    const color = document.querySelector('select');
    if (color.value === '') {
      alert('内容が入力されていません');
      return false;
    }
    li.textContent = `${color.value} - ${color.selectedIndex}`;
    document.querySelector('ul').appendChild(li);
  });
}