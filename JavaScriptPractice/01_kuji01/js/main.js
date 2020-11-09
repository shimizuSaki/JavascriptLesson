'use strict';

// window.onload = function() {
    const num = 5;
    const winner = Math.floor(Math.random() * num); // 0-4

    for (let i = 0; i <= num; i++) {
        const div = document.createElement('div');
        div.classList.add('box');

        div.addEventListener('click', () => {
        if (i === winner) {
            div.textContent = '当たり！';
            div.classList.add('win');
        } else {
            div.textContent = 'はずれ！';
            div.classList.add('lose');
        }
        });
        document.getElementById('wrapper').appendChild(div);
    }
    const div = document.createElement('div');
    div.classList.add('box');
// }