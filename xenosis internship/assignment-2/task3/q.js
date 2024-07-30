const quizData = [
    {
      question: "What is the capital of France?",
      answers: {
        a: "Paris",
        b: "London",
        c: "Rome",
        d: "Madrid"
      },
      correctAnswer: "a"
    },
    {
      question: "What is the largest planet in our solar system?",
      answers: {
        a: "Earth",
        b: "Jupiter",
        c: "Saturn",
        d: "Mars"
      },
      correctAnswer: "b"
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      answers: {
        a: "Charles Dickens",
        b: "Jane Austen",
        c: "William Shakespeare",
        d: "Mark Twain"
      },
      correctAnswer: "c"
    }
  ];
  
  const quizContainer = document.getElementById('quiz');
  const resultContainer = document.getElementById('result');
  const scoreContainer = document.getElementById('score');
  const nextButton = document.getElementById('next-btn');
  
  let currentQuestion = 0;
  let score = 0;
  
  function displayQuestion() {
    const question = quizData[currentQuestion];
    const answers = [];
  
    for (const letter in question.answers) {
      answers.push(
        `<label>
          <input type="radio" name="question${currentQuestion}" value="${letter}">
          ${letter}: ${question.answers[letter]}
        </label>`
      );
    }
  
    quizContainer.innerHTML = `
      <div class="question">${question.question}</div>
      <div class="answers">${answers.join('<br>')}</div>
    `;
  }
  
  function checkAnswer() {
    const answerInputs = document.getElementsByName(`question${currentQuestion}`);
    let selectedAnswer;
  
    answerInputs.forEach(input => {
      if (input.checked) {
        selectedAnswer = input.value;
      }
    });
  
    if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
      score++;
    }
  }
  
  function showNextQuestion() {
    checkAnswer();
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      displayQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quizContainer.style.display = 'none';
    resultContainer.classList.remove('hidden');
    scoreContainer.textContent = `Your score: ${score} out of ${quizData.length}`;
  }
  
  nextButton.addEventListener('click', showNextQuestion);
  
  
  displayQuestion();
  