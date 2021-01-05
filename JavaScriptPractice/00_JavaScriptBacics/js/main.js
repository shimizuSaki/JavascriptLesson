'use strict';
{
    // console.log('it's me!'); //error
    // console.log('it\'s me!');
    // console.log("it's me!");

    // console.log("HELLO,\nWORLD"); //改行
    // console.log("HELLO," + "WORLD"); //連結
    
    
    // console.log(10 ** 3); //1000 (べき乗)

    // //型判定
    // console.log( typeof 5 ); //number
    // console.log( typeof { a:3, b:4 } ); //object
    // console.log( typeof null );  //object

    // // 変換
    // console.log(parseInt('5', 10) + 3); //8
    // console.log(parseInt('aaaa', 10) + 3); //Nan


    // 真偽値
    // false として評価される値は 0 、 null 、 undefined 、空文字列、そして真偽値の false 自体になります。
    // 逆にそれ以外の値は、全て true と評価されるので覚えておきましょう。


    // 条件演算子(if文の簡易版)
    // 左から順に、条件式、 ? 、条件が true だったときの処理、 : 、条件が false だったときの処理、と書いていきます。
    // const score = 85;
    // score >= 80 ? console.log('Great!'): console.log('OK...');
    

    // for テンプレートリテラル
    // for (let i = 1; i <= 10; i++) {
    //     console.log( `hello ${i}` );
    // }



    // let hp =100;
    // while (hp > 0) {
    //     console.log();
    //     hp -= 15;
    // }
    // do {
    //     console.log(`${hp} HP left`);
    //     hp -= 15;
    // } while (hp > 0) ;

    // for (let i = 1; i <= 10; i++) {
        // if (i === 4) {
        //     continue;
        // }
        // if (i % 3 === 0) {
        //     continue;
        // }
        // if (i === 4) {
        //     break;
        // }
        // console.log(i);
    // }

    // function showAd(message = 'Add') { //仮引数
    //     console.log('----------------');
    //     console.log(`-------${message}-------`);
    //     console.log('----------------');
    // }
    // showAd('Header Add'); //実引数
    // console.log('Tom is Great!');
    // console.log('Bob is Great!');
    // showAd();
    // console.log('Steve is Great!');
    // console.log('Richard is Great!');
    // showAd('Footer Add');



    // 関数宣言
    // function sum(a, b, c) {
    //     return a + b + c;
    // }

    // 関数式（無名関数）
    // const sum = function(a, b, c) {
    //     return a + b + c;
    // }; //代入するものはセミコロン必要

    // アロー関数
    // const sum = (a, b, c) => {
    //     return a + b + c;
    // };
    // アロー関数(省略)
    // const sum = (a, b, c) => a + b + c;
    // const result = sum(1, 2 ,3) + sum(3, 4, 5);
    // console.log(result);


    // 書き換え練習
    // const double = function(a) {
    //     return a * 2;
    // };
    // const double = (a) => a * 2; //丸カッコの省略可
    // console.log(double(12));
}