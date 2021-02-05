'use strict';
{
  const dices = document.querySelectorAll('.js-dice');

  let sum = 0;
  let pips = [];

  function resetDice() {
    sum = 0;
    pips = [];
  }

  function recordResult(dice, pips, result) {
    const tbody = document.querySelector('#recordTable > tbody');
    const tr = document.createElement('tr');
    const records = [
      dice.name,
      result,
      pips,
    ];

    records.forEach(num => {
      const td = document.createElement('td');
      td.textContent = num;
      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  }

  function rollDice(dice) {
    resetDice();
    console.log(dice);

    for (let i = 0; i < dice.quantity; i++) {
      let pip = Math.floor(Math.random() * dice.type) + 1;
      pips[i] = pip;
      sum += pip;
    }
    recordResult(dice, pips, sum);
  }
  
  for (let i = 0; i < dices.length; i++) {
    dices[i].addEventListener('click', (e) => {

      const dice = {
        name: e.target.name,
        quantity: e.target.name.split( 'D' )[0],
        type: e.target.name.split( 'D' )[1],
      }

      rollDice(dice);
    });
  }
}