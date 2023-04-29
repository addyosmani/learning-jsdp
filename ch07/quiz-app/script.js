let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let totalQuestions = 15;
let questionsAsked = 0;
let questionsPool = [];

// Fetch questions from JSON file
fetch('questions.json')
  .then((response) => response.json())
  .then((data) => {
    questions = data;
    questionsPool = getQuestionsPool(questions, totalQuestions);
    displayQuestion();
  });

function getQuestionsPool(questions, totalQuestions) {
  const pool = [];
  while (pool.length < totalQuestions) {
    const questionCategory = questions[Math.floor(Math.random() * questions.length)];
    const question = questionCategory.questions[Math.floor(Math.random() * questionCategory.questions.length)];
    if (!pool.some((q) => q.question === question.question)) {
      pool.push(question);
    }
  }
  return pool;
}

function displayQuestion() {
  if (questionsAsked >= totalQuestions) {
    displayQuizComplete();
    return;
  }

  const quizContainer = document.getElementById('quiz-container');
  const question = questionsPool[questionsAsked];

  let optionsHtml = '';
  question.options.forEach((option, i) => {
    optionsHtml += `<div class="option" data-option-index="${i}">${option}</div>`;
  });

  quizContainer.innerHTML = `
    <h2>${question.question}</h2>
    ${optionsHtml}
  `;

  const optionElements = document.querySelectorAll('.option');
  optionElements.forEach((optionElement) => {
    optionElement.addEventListener('click', () => {
      const optionIndex = parseInt(optionElement.getAttribute('data-option-index'), 10);
      const isCorrect = question.options[optionIndex] === question.answer;
      if (isCorrect) {
        score++;
        optionElement.classList.add('correct');
      } else {
        optionElement.classList.add('incorrect');
        optionElements.forEach((option) => {
          if (option.textContent === question.answer) {
            option.classList.add('correct');
          }
        });
      }
      displayScore();
      setTimeout(() => {
        optionElements.forEach((option) => {
          option.classList.remove('correct', 'incorrect');
        });
        displayNextQuestionButton();
      }, 1000);
      questionsAsked++;
    });
  });
}


function displayNextQuestionButton() {
  const nextQuestionButton = document.getElementById('next-question');
  nextQuestionButton.style.display = 'block';
  nextQuestionButton.addEventListener('click', () => {
    nextQuestionButton.style.display = 'none';
    currentQuestionIndex++;
    displayQuestion(currentQuestionIndex);
  });
}

function displayScore() {
  const scoreContainer = document.getElementById('score-container');
  scoreContainer.innerHTML = `Score: ${score}`;
}

function displayQuizComplete() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `
      <h2>Quiz complete!</h2>
      <p>You scored ${score} out of ${totalQuestions} questions.</p>
      <button id="try-again" class="try-again-button">Try Again</button>
    `;
    displayScore();
  
    const tryAgainButton = document.getElementById('try-again');
    tryAgainButton.addEventListener('click', () => {
      currentQuestionIndex = 0;
      score = 0;
      questionsAsked = 0;
      displayScore();
      displayQuestion(currentQuestionIndex);
    });
  }