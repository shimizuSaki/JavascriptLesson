'use strict';
{
  const timer = document.getElementById('timer');
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const reset = document.getElementById('reset');

  let startTime;
  let timeoutId;
  let elapsedTime = 0;

  function countUp() {
    const d = new Date(Date.now() - startTime + elapsedTime);
    const year = d.getUTCFullYear() - 1970;
    const month = d.getUTCMonth();
    const date = d.getUTCDate() - 1;
    const hour = d.getUTCHours();
    const min = String(d.getUTCMinutes()).padStart(2, '0');
    const sec = String(d.getUTCSeconds()).padStart(2, '0');
    const ms = String(d.getUTCMilliseconds()).padStart(3, '0');
    timer.textContent = `${year}年${month}月${date}日${hour}:${min}:${sec}.${ms}`
    timeoutId = setTimeout(() => {
      countUp();
    }, 10);
  }

  function setButtonStateInitial() {
    start.classList.remove('inactive')
    stop.classList.add('inactive')
    reset.classList.add('inactive')
  }
  function setButtonStateRunning() {
    start.classList.add('inactive')
    stop.classList.remove('inactive')
    reset.classList.add('inactive')
  }
  function setButtonStateStopped() {
    start.classList.remove('inactive')
    stop.classList.add('inactive')
    reset.classList.remove('inactive')
  }

  setButtonStateInitial();

  start.addEventListener('click', () => {
    setButtonStateRunning();
    startTime = Date.now();
    countUp();
  });
  
  stop.addEventListener('click', () => {
    setButtonStateStopped();
    clearTimeout(timeoutId);
    elapsedTime += Date.now() - startTime;
  });

  reset.addEventListener('click', () => {
    setButtonStateInitial();
    timer.textContent = '0年0月0日0:00:00.000';
    elapsedTime = 0;
  });
}