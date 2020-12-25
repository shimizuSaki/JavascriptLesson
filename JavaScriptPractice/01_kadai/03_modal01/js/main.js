'use strict';

function jsModalControl(type) {
    const modal_id = "modal_" + type;
    const modal = document.getElementById(modal_id);
    modal.classList.toggle('modal--active'); //DOMTokenListの操作
    
    let scrollPosition;
    const modal_class = Array.from(modal.classList); //真偽判別用の配列
    if (modal_class.includes('modal--active')) {
        // console.log("アクティブになりました！");
        scrollPosition = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollPosition}px`;
        modal.style.position = 'fixed';
    } else {
        // console.log("アクティブではなくなりました！");
        scrollPosition = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        modal.style.position = '';
        window.scrollTo(0, parseInt(scrollPosition || '0') * -1);
    }
};