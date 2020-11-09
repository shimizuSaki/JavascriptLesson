'use strict';
var button01 = document.getElementById("button01");
button01.addEventListener("click", function(e) {
    e.preventDefault();
    // https://qiita.com/tochiji/items/4e9e64cabc0a1cd7a1ae
    let result = "";
    // 入力フォームの値を取得
    let W = parseInt(document.getElementById('W').value, 10);
    let first_distance = parseInt(document.getElementById('K').value, 10);
    let can_jump = parseInt(document.getElementById('D').value, 10);
    let second_distance = W-first_distance;
    if ((first_distance <= can_jump) && (second_distance <= can_jump)) {
        result = "Yes";
    } else {
        result = "No";
    }
    // 取得した値を結果表示入力フォームに表示
    alert(result);
});

var button02 = document.getElementById("button02");
button02.addEventListener("click", function(e) {
    e.preventDefault(); // https://qiita.com/tochiji/items/4e9e64cabc0a1cd7a1ae

    // 入力フォームの値を取得
    let result = "";
    let str = document.getElementById('S').value;
    let str_lower = str.toLowerCase();

    if ((str === "AtCoder")) {
        result = "Yes";
        // console.log(str);
        // console.log("Yes");
    } else if (str_lower === "atcoder") {
        result = "Maybe";
        // console.log(str);
        // console.log("Maybe");
    } else {
        result = "No";
        // console.log(str);
        // console.log("No");
    }

    // 取得した値を結果表示入力フォームに表示
    // 取得した値を結果表示入力フォームに表示
    alert(result);
});

// var button03 = document.getElementById("button03");
// button03.addEventListener("click", function(e) {
//     e.preventDefault(); // https://qiita.com/tochiji/items/4e9e64cabc0a1cd7a1ae

//     let result = "";

//     // データの取得
//     let doc = document.getElementById('slide_ball');
//     const number_of_people = parseInt(document.getElementById('N').value); // 人数
//     const number_of_pin = parseInt(document.getElementById('M').value); // 本数
//     var person_box = doc.getElementsByClassName("js_person_box");
//     var person_data = doc.getElementsByClassName("js_person_data");

//     if (number_of_people !== person_box.length) {
//         alert ('おっと！人数がデータの数と一致しないようです！');
//         return false;
//     }

//     // 倒されたピンの初期値（倒されていない状態）
//     let pin_record = [];
//     pin_record.length = number_of_pin;
//     for (let i = 0; i < pin_record.length; i++) {
//         pin_record[i] = false;
//     }

//     for (let i = 0; i <= person_data.length; i++) { //個人の時間データごとの処理。iはターン経過
//         let data_a = 0;
//         let data_b = 0;
//         if (i % 2 == 0) { //偶数
//             data_a = person_data[i].value;
//         } else {
//             data_b = person_data[i].value;
//         }
//         console.log([i] +'週目のdata_a：' + data_a);
//         console.log([i] +'週目のdata_b：' + data_b);
//         arrive_time = [i] + data_a + data_b;
//         fallenPinCounter(data_a, data_b, pin_record)
//     }

//     // 取得した値を結果表示入力フォームに表示
//     // alert(result);
//     alert("結果が表示されます");
// });

// function fallenPinCounter(data_a, data_b, pin_record) {
    
// }