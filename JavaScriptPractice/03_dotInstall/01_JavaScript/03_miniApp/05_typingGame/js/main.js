'use strict';
{
  function setWord() {
    word = words.splice(words[Math.floor(Math.random() * words.length)], 1)[0];
    target.textContent = word;
    loc = 0;
  }
  function startTyping() {
    if (isPlaying === true) {
      return;
    }
    
    isPlaying = true;
    startTime = Date.now();
    setWord();
  }
  // https://kotanglish.jp/2760
  const words = [
    'red',
    // 'brown',
    // 'orange',
    // 'yellow',
    // 'green',
    'blue',
    // 'purple',
    // 'black',
    // 'gray',
    // 'white',
    // 'vermilion',
    // 'rose',
    // 'indigo',
    // 'navy',
    // 'gold',
    // 'silver',
    // 'cooper',
    // 'rainbow'
  ];
  let word;
  let loc = 0;
  let startTime;
  let isPlaying = false;

  // const restart = document.getElementById('restart');
  const target = document.getElementById('target');


  document.addEventListener('click', () => {
    startTyping();
  });
  
  document.addEventListener('keydown', e => {
    if (isPlaying === false) {
      return
    }
    
    if (e.key !== word[loc]) {
      return;
    }
    loc ++;
    target.textContent = '_'.repeat(loc) + word.substring(loc);

    if (loc === word.length) {
      if (words.length === 0) {
        isPlaying = false;
        const elapsedTime = ((Date.now() - startTime)/1000).toFixed(2);
        const result = document.getElementById('result');
        result.textContent = `finished! ${elapsedTime} seconds!`;

      }
      setWord();
    }
  });
}