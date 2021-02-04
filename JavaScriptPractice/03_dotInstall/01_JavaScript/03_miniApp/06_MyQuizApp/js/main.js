'use strict';
{
  const question = document.getElementById('question');
  const choices = document.getElementById('choices');
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  const scoreLabel = document.querySelector('#result > p');

  const quizSet = shuffle([
    {q: '世界で一番大きな湖は？', c: ['カスピ海', 'カリブ海', '琵琶湖']},
    {q: '2の8乗は？', c: ['256', '64', '1024']},
    {q: '次のうち、最初にリリースされた言語は？', c: ['Python', 'JavaScript', 'HTML']},
  ]);
  let currentNum = 0;
  let isAnswerd;
  let score = 0;

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i],arr[j]] = [arr[j],arr[i]];
    }
    return arr;
  }
  function checkAnswer(li) {
    if (isAnswerd) {
      return;
    }
    if(li.textContent === quizSet[currentNum].c[0]){
      li.classList.add('correct');
      console.log('correct');
      score++;
    } else {
      li.classList.add('wrong');
      console.log('wrong');
    }
    isAnswerd = true;
    btn.classList.remove('disabled')
  }

  function setQuiz() {
    
    while (choices.firstChild) {
      choices.removeChild(choices.firstChild);
    }
    
    isAnswerd = false;
    btn.classList.add('disabled');
    question.textContent = quizSet[currentNum].q;
    
    const shuffledChoices = shuffle([...quizSet[currentNum].c]);
    shuffledChoices.forEach(choice => {
      const li = document.createElement('li');
      li.textContent = choice;
      li.addEventListener('click', () => {
        checkAnswer(li);
      });
      choices.appendChild(li);
    });

    if (currentNum === quizSet.length - 1) {
      btn.textContent = 'Show Score';
    }
  }

  setQuiz();


  btn.addEventListener('click', () => {
    if (btn.classList.contains('disabled')) {
      return;
    }

    if (currentNum === quizSet.length - 1) {
      result.classList.remove('hidden');
      scoreLabel.textContent = `Score : ${score} / ${quizSet.length}`;
      // console.log(`Score : ${score} / ${quizSet.length}`);
    } else {
      currentNum++;
      setQuiz();
    }
    
  });
  // for (let i = 0; i < currentNum; i++) {
  //   for (let i = 0; i < 3; i++) {
  //     const li = document.createElement('li');
  //     li.textContent = quizSet[currentNum].c[i]; //自分で試してみて動かなかったコード
  //     choices.appendChild(li);
  //   }
  // }
}