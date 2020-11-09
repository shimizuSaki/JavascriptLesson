'use strict';
window.onload = function() {
    const btn = document.getElementById('btn');
    btn.addEventListener('click', () => {

        const n = Math.random();
        if (n < 0.05) {
            btn.textContent = '大吉'//5%
        } else if (n < 0.7) {
            btn.textContent = '中吉'//65%
        } else if (n < 0.95) {
            btn.textContent = '末吉'//25％
        } else {
            btn.textContent = '凶'//5%
        }

    });
}