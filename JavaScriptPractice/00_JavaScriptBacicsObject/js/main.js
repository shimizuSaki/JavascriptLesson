'use strict';

{
    const scoreArray = [80, 90, 40];
    
    // scoreArray.unshift(20, 10);//手前へ追加
    // scoreArray.shift();//手前を削除
    // scoreArray.push(60, 50); //後ろへ追加
    // scoreArray.pop(); //後ろを削除
    
    // scoreArray.splice(2, 2); //「何番目」から「いくつ」を削除
    // scoreArray.splice(2, 0, 30, 80); //「何番目」から「削除せず」に「値, 値」を追加

    // scoreArray[2] = 44;//配列二番目の数を更新
    // console.log(scoreArray.length); //配列内の値の数

    // for (let i = 0; i < scoreArray.length; i++) {
    //     console.log(`Score ${i} : ${scoreArray[i]}`);
    // }



    // スプレッド構文(配列の中に配列を展開する)
    // const otherScores = [10, 20];
    // const scores = [80, 90, 40, 70, ...otherScores];
    // console.log(scores);
    // console.log(typeof scores); //Object

    // function sum(a,b) {
    //     console.log(a + b);
    // }

    // sum(...otherScores);



    // 名まえの割り当てとレスト構文
    // const scores = [80, 90, 40, 70];
    // const [a, b, ...others] = scores;
    // console.log(a);
    // console.log(b);
    // console.log(others);

    // 値の交換
    // let x = 2;
    // let y = 3;
    // [x, y] = [y, x];
    // console.log(x);//3
    // console.log(y);//2

    // scores.forEach((score) => {
    //     console.log(`Score : ${score}`);
    // });


    // 配列の各要素に何らかの処理をして別の配列を作りたい場合
    // const prices = [180, 190, 200];
    // const updatePrices = prices.map((prices) => {
    //     return price + 20;
    // });
    


    // const numbers = [1, 4, 7, 8, 10];
    // 偶数のみ取り出す
    // const evenNumbers = numbers.filter(number => {
    //     if (number % 2 === 0) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // });
    // 省略形
    // const evenNumbers = numbers.filter(number => number % 2 === 0);
    // console.log(evenNumbers);


    // const point = {x: 100, y: 180};
    // const point = {
    //     x: 100,
    //     y: 180,
    // };
    // // console.log(point.x);
    // console.log(point['y']);
    // point.z = 90;
    // console.log(point['z']); //90
    // delete point.y;
    // console.log(point['y']); //undefined



    // オブジェクトを操作してみよう
    // const otherProps = {
    //     r: 4,
    //     color: 'red',
    // };
    // const point = {
    //     x: 100,
    //     y: 180,
    //     ...otherProps,
    // };
    // console.log(point);

    const {x, r, ...others} = point;
    console.log(x);
    console.log(r);
    console.log(others);
}