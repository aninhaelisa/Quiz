
(function(){
    function buildQuiz(){
      const output = [];
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          const answers = [];
 
          for(letter in currentQuestion.answers){
  
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }

          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
  
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){

      const answerContainers = quizContainer.querySelectorAll('.answers');

      let numCorrect = 0;

      myQuestions.forEach( (currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        if(userAnswer === currentQuestion.correctAnswer){

          numCorrect++;
  
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        else{
          answerContainers[questionNumber].style.color = 'red';
        }
      });

      resultsContainer.innerHTML = `Resultado: ${numCorrect} de ${myQuestions.length}`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "Quantas temporadas existem na série animada Winx?",
        answers: {
          a: "9",
          b: "6",
          c: "8"
        },
        correctAnswer: "c"
      },
      {
        question: "Qual é o poder de Flora?",
        answers: {
          a: "Natureza",
          b: "Tecnologia",
          c: "Música"
        },
        correctAnswer: "a"
      },
      {
        question: "Qual é o melhor amigo de helia?",
        answers: {
          a: "Brandon",
          b: "Riven",
          c: "Sky",
          d: "Timmy"
        },
        correctAnswer: "d"
      },
      {
        question: "Quem é o namorado de Stella?",
        answers: {
          a: "Brandon",
          b: "Brendon",
          c: "Roy",
          d: "A.j"
        },
        correctAnswer: "a"
      },
      {
        question: "Qual nome da irmã da Bloom?",
        answers: {
          a: "Sofie",
          b: "Daphne",
          c: "Sophie"
        },
        correctAnswer: "b"
      },
      {
        question: "Qual nome da irmã de flora?",
        answers: {
          a: "Mayre",
          b: "Daphne",
          c: "Sophie",
          d: "Mieli"
        },
        correctAnswer: "d"
      },
      {
        question: "Quais os nomes dos pais adotivos de Bloom?",
        answers: {
          a: "Marcos e Vanessa",
          b: "Mairon e Oritel",
          c: "Mike e Vanessa",
          d: "Mayke e Vanessa"
        },
        correctAnswer: "c"
      },
      {
        question: "Quais os nomes dos pais biológicos de Bloom?",
        answers: {
          a: "Mairon e Oritel",
          b: "Mariam e Oritel",
          c: "Mike e Vanessa"
        },
        correctAnswer: "a"
      },
      {
        question: "Qual é o nome da rainha das fadas? ",
        answers: {
          a: "Morgana",
          b: "Roxy",
          c: "Nebula"
        },
        correctAnswer: "a"
      },
      {
        question: "Quem é a mãe de roxy?",
        answers: {
          a: "Nebula",
          b: "Morgana",
          c: "Helena"
        },
        correctAnswer: "b"
      },
      {
        question: "Qual é a Pixie de musa?",
        answers: {
          a: "Amore",
          b: "Tune",
          c: "Lockte"
        },
        correctAnswer: "b"
      }
    ];
  
    buildQuiz();

    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    showSlide(currentSlide);

    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();


 