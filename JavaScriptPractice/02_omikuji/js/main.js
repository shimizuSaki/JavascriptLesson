'use strict';
{
    const btn = document.getElementById('btn');
    btn.addEventListener('click', () => {
        // const result = ['大吉', '中吉', '末吉', '凶']
        
        // const n = Math.floor(Math.random() * result.length);
        // btn.textContent = result[n]

        // btn.textContent = result[Math.floor(Math.random() * result.length)]

        // switch (n) {
        //     case 0:
        //         btn.textContent = '大吉'
        //         break;
        //     case 1:
        //         btn.textContent = '中吉'
        //         break;
        //     case 2:
        //         btn.textContent = '凶'
        //         break;
        // }

        const n = Math.random();
        if (n < 0.05) {
            btn.textContent = '大吉'//5%
        }　else if (n < 0.7) {
            btn.textContent = '中吉'//65%
        }　else if (n < 0.95) {
            btn.textContent = '末吉'//25％
        } else {
            btn.textContent = '凶'//5%
        }

    });
}