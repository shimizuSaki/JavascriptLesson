'use strict';
{
  function createColumn(col) {
    // ビンゴcol行目の数字の生成
    const source = []
    for (let i = 0; i < 15; i++) {
      source[i] = 15 * col + i + 1;
    }
    // sourceから重複しないように５つ選んで配列にする
    const column = [];
    for (let i = 0; i < 5; i++) {
      column[i] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
    }
    return column;
  }

  function createColumns() {
    const columns = [];
    for (let i = 0; i < 5; i++) {
      columns[i] = createColumn(i);
    }
    columns[2][2] = 'FREE!';
    console.table(columns);
    return columns;
  }

  function renderBingo(columns) {
    for (let col = 0; col < columns.length; col++) {
      let tr = document.createElement('tr');
      // 一列
      for (let row = 0; row < 5; row++) {
        let td = document.createElement('td');
        td.textContent = columns[row][col];
        tr.appendChild(td);
      }
      console.log(tr);
      document.querySelector('tbody').appendChild(tr);
    }
  }
  const columns = createColumns(5);
  renderBingo(columns);
}