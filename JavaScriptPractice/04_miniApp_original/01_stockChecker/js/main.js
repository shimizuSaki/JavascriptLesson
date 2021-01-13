'use strict';
{
  const stock = {
    egg : 10,
    milk : 1000,
  };
  let cookedDishes = [];

  function confirmStock(dish) {
    let message = [];
    if (dish.milk === 0 && dish.egg === 0) {
      return false;
    }
    if (stock.egg < dish.egg && stock.milk < dish.milk) {
      return alert('卵と牛乳が足りません。');
    }
    if (dish.egg) {
      if (stock.egg < dish.egg) {
        return alert('卵が足りません。');
      }
      if (stock.egg === dish.egg) {
        message += '卵がなくなります。';
      }
    }
    if (dish.milk) {
      if (stock.milk < dish.milk) {
        return alert('牛乳が足りません。');
      }
      if (stock.milk === dish.milk) {
        message += '牛乳がなくなります。';
      }
    }
    if (confirm(`${message}材料を使って${dish.name}を作りますか？`)) {
      stock.egg -= dish.egg;
      stock.milk -= dish.milk;
      stockRender(stock);
      recordRender(dish.name);
    }
  }

  function stockRender(stock) {
    document.getElementById('stockEgg').textContent = `たまご${stock.egg}個`;
    document.getElementById('stockMilk').textContent = `牛乳${stock.milk}ml`;
  }
  function recordRender(cookDish) {
    cookedDishes.push(cookDish);
    document.getElementById('cookedRecord').textContent = cookedDishes.join('、');
  }

  // クリックされた時の処理
  const cookDish =　document.getElementsByClassName('js-cookDish');
  for (let i = 0; i < cookDish.length; i++) {
    cookDish[i].addEventListener('click', function(e) {
      if (e.target.getAttribute('value')) {
        const dish = {
          name : String(e.target.getAttribute('value')),
          egg : Math.floor(e.target.getAttribute('data-egg')),
          milk : Math.floor(e.target.getAttribute('data-milk')),
        };
        confirmStock(dish);
      }
    });
  }
}