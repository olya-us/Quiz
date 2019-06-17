import {quiz} from './index';

export const showProgress = () => {
  const currentQuestionNamber = quiz.questionIndex + 1;
  const elem = document.getElementById('progress');
  // eslint-disable-next-line max-len
  elem.innerHTML = 'Question ' + currentQuestionNamber + 'of ' + quiz.questions.length;
};
