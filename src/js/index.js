import Quiz from './quizController';
import {questions} from './myQuestions';
import {showScores} from './showScores';
import {showProgress} from './showProgress';
import '../styles/main.scss';


const populate = () => {
  if (quiz.isEnded()) {
    showScores();
  } else {
    const elem = document.getElementById('question');
    elem.innerHTML = quiz.getQuestionIndex().text;
    const choices = quiz.getQuestionIndex().choices;
    for (let i = 0; i< choices.length; i++) {
      const elem = document.getElementById('choice'+i);
      elem.innerHTML = choices[i];
      guess('btn' + i, choices[i]);
    }
    showProgress();
  }
};

const guess = (id, guess) => {
  const button = document.getElementById(id);
  button.onclick = function() {
    quiz.guess(guess);
    populate();
    localStorage.setItem(id, guess);
    if (localStorage.getItem(id)) {
    };
  };
};

export const quiz = new Quiz(questions);

populate();
