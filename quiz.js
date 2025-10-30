let myQuestions = [
  {
    question: "Which year was Badminton introduced to the Olympics?",
    answers: {
      a: "2000",
      b: "1992",
      c: "1972",
    },
    correctAnswer: "b",
  },
  {
    question: "How many feathers are typically used in a feather shuttlecock?",
    answers: {
      a: "12",
      b: "14",
      c: "16",
    },
    correctAnswer: "c",
  },{
    question: "How fast is fastest badminton smash recorded?",
    answers: {
      a: "493 km/h",
      b: "565 km/h",
      c: "603 km/h",
    },
    correctAnswer: "b",
  },{
    question: "What is the world's oldest badminton tournament",
    answers: {
      a: "The All England Open Badminton Championships",
      b: "The BWF World Championships",
      c: "The Sudirman Cup",
    },
    correctAnswer: "a",
  }
];

function generateQuiz(
  questions,
  quizContainer,
  resultsContainer,
  submitButton
) {
  function showQuestions(questions, quizContainer) {
    // we'll need a place to store the output and the answer choices
    let output = [];
    let answers;

    // for each question...
    for (let i = 0; i < questions.length; i++) {
      // first reset the list of answers
      answers = [];

      // for each available answer to this question...
      for (let letter in questions[i].answers) {
        // ...add an html radio button
        answers.push(
          "<label>" +
            '<input type="radio" name="question' +
            i +
            '" value="' +
            letter +
            '">' +
            letter +
            ": " +
            questions[i].answers[letter] +
            "</label>"
        );
      }

      // add this question and its answers to the output
      output.push(
        '<div class="question">' +
          questions[i].question +
          "</div>" +
          '<div class="answers">' +
          answers.join("") +
          "</div>"
      );
    }

    // finally combine our output list into one string of html and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults(questions, quizContainer, resultsContainer) {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let userAnswer = "";
    let numCorrect = 0;

    // for each question...
    for (let i = 0; i < questions.length; i++) {
      // find selected answer
      userAnswer = (
        answerContainers[i].querySelector(
          "input[name=question" + i + "]:checked"
        ) || {}
      ).value;

      // if answer is correct
      if (userAnswer === questions[i].correctAnswer) {
        // add to the number of correct answers
        numCorrect++;
      }
    }

    // show number of correct answers out of total
    if (numCorrect===questions.length){resultsContainer.innerHTML = "You got "+ numCorrect + " out of " + questions.length + "! Wow! You are a badminton guru!";} else{
      resultsContainer.innerHTML = "You got "+ numCorrect + " out of " + questions.length + "! Let's try again!";
    }
  }

  submitButton.onclick = function () {
    showResults(questions, quizContainer, resultsContainer);
  };

  // show the questions
  showQuestions(questions, quizContainer);

  // when user clicks submit, show results
  submitButton.onclick = function () {
    showResults(questions, quizContainer, resultsContainer);
  };
}

var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
