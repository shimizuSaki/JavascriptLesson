'use strict';
{
  const stock = {
    egg : 10,
    milk : 1000,
  };
  let cookedDishes = [];

  function confirmStock(data) {
    let cookDish = String(data.name);
    const useEgg = Math.floor(data.egg);
    const useMilk = Math.floor(data.milk);
    let message = [];
    if (data.milk === 0 && data.egg === 0) {
      return false;
    }
    if (stock.egg < useEgg && stock.milk < useMilk) {
      return alert('卵と牛乳が足りません。');
    }
    if (useEgg) {
      if (stock.egg < useEgg) {
        return alert('卵が足りません。');
      }
      if (stock.egg === useEgg) {
        message += '卵がなくなります。';
      }
    }
    if (useMilk) {
      if (stock.milk < useMilk) {
        return alert('牛乳が足りません。');
      }
      if (stock.milk === useMilk) {
        message += '牛乳がなくなります。';
      }
    }
    if (confirm(`${message}材料を使って${cookDish}を作りますか？`)) {
      stock.egg -= useEgg;
      stock.milk -= useMilk;
      stockRender(stock);
      recordRender(cookDish);
    }
  }

  function stockRender(stock) {
    document.getElementById('stockEgg').textContent = `たまご${stock.egg}個`;
    document.getElementById('stockMilk').textContent = `牛乳${stock.milk}ml`;
  }
  function recordRender(cookDish) {
    cookedDishes.push(cookDish);
    document.getElementById('cooked').textContent = cookedDishes.join('、');
  }

  // クリックされた時の処理
  document.addEventListener('click', function(e) {
    if (e.target.getAttribute('value')) {
      let dish = {
          name : 'name',
          egg : 0,
          milk : 0,
      };
      // 押された要素のデータ属性の値をdishに格納する
      dish.name = e.target.getAttribute('value');
      if (e.target.getAttribute('data-egg')) {
        dish.egg = e.target.getAttribute('data-egg');
      }
      if (e.target.getAttribute('data-milk')) {
        dish.milk = e.target.getAttribute('data-milk');
      }
      confirmStock(dish);
    }
  });
}