'use strict';
{
  // const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  // Math.floor(Math.random() * source.length);

  function createBingoColumn(col) {
    const source = [];

    console.log(`${col}回目開始`);
    // 各列の数字の配列を準備する
    for (let i = 0; i < 15; i++) {
      source[i] = i + 1 + 15 * col;
      // 1  ~ 15  ・・・・(i + 1) + (15 * 0);
      // 16 ~ 30  ・・・・(i + 1) + (15 * 1);
      // 31 ~ 45  ・・・・(i + 1) + (15 * 2);
      console.log(source[i]);
    }
    
    // 配列の中の数字をspliceでひとつ抜き取って割り当てる
    const column =[];
    // column[0] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
    // column[1] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
    // column[2] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
    for (let i = 0; i < 5; i++) {
      // spliceの返り値は配列になるので最後に[0]をつけることで中身を取り出す
      column[i] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
    }
    console.log(column);
    console.log(`${col}回目完成`);
    return column;
  }

  // 関数にcolを渡してビンゴの数字を取得する
  const columns = [];
  columns[0] = createBingoColumn(0);
  columns[1] = createBingoColumn(1);
  columns[2] = createBingoColumn(2);
  columns[3] = createBingoColumn(3);
  columns[4] = createBingoColumn(4);
  columns[2][2] = 'FREE';

  // 行と列を反転させる
  const bingo = [];
  for (let row = 0; row < 5; row++) {
    bingo[row] = [];
    for (let col = 0; col < 5; col++) {
      bingo[row][col] = columns[col][row];
    }
  }
  console.table(bingo);

  // tbodyの中身を作って挿入していく
  for (let row = 0; row < 5; row++) {
    const tr = document.createElement('tr');
    for (let col = 0; col < 5; col++) {
      const td = document.createElement('td');
      td.textContent = bingo[row][col];
      tr.appendChild(td);
    }
    document.querySelector('tbody').appendChild(tr);
  }
}