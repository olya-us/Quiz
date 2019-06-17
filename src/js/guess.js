import {quiz} from './index';
export const guess = (id, guess) => {
  const button = document.getElementById(id);
  button.onclick = function() {
    quiz.guess(guess);
    populate();
    localStorage.setItem(guess, id);
    if (localStorage.getItem(id) !== null) {
      console.log(guess);
    };
  };
};
