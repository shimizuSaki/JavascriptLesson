'use strict';
{
  document.querySelector('button').addEventListener('click', () => {
    const li = document.createElement('li');
    const colors = document.querySelectorAll('input');
    
    if (colors.value === '') {
      alert('内容が入力されていません');
      return false;
    }
    
    let selectedColor;
    let selectedNumber;
    colors.forEach((color, i) => {
      if (color.checked === true) {
        selectedColor = color.value;
        selectedNumber = `${i}`;
      }
    });

    li.textContent = selectedNumber + ' : ' + selectedColor;
    document.querySelector('ul').appendChild(li);
  });
}