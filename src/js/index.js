import Quiz from "./quiz_controller"
import Question from "./question"
import "../styles/main.scss"

let populate = () => {
    if (quiz.isEnded()) {
        showScores();
    } else {
        let elem = document.getElementById("question");
        elem.innerHTML = quiz.getQuestionIndex().text;

        let choices = quiz.getQuestionIndex().choices;
        for (let i = 0; i< choices.length; i++) {
             let elem = document.getElementById("choice"+i);
             elem.innerHTML = choices[i];
             guess ("btn" + i, choices[i]);
        } 
        showProgress();
    }
}

let guess = (id, guess) => {
    let button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        populate();
    }
}

let showProgress = () => {
    let currentQuestionNamber = quiz.questionIndex + 1;
    let elem = document.getElementById("progress");
    elem.innerHTML = "Question " + currentQuestionNamber + "of " + quiz.questions.length;
}

let showScores = () => {
    let gameOverHtml = "<h1>Result</h1>";
        gameOverHtml += "<h2 id='score'>Your score: " + quiz.score +" </h2>";
        let elem = document.getElementById("quiz");
        elem.innerHTML = gameOverHtml;
}

let questions = [
    new Question("What is the maximum length of a parliamentary term?", ["Two years", "Three years", "Four years", "Five years"], "Three years"),
    new Question("How many Senate seats are contested in a double dissolution election?", ["46", "56", "66", "76"], "76"),
    new Question("How many federal elections have been held in Australia?", ["35", "40", "45", "50"], "45"),
    new Question("What proportion of votes in the 2016 House of Representatives election were informal?", ["5 percent", "7 percent", "9 percent", "11 percent"], "5 percent"),
    new Question("Which band had a hit in 1985 with 'In Between Days'?", ["Bauhaus", "The Cult", "The Cure", "The Damned"], "The Cure")
];

let quiz = new Quiz(questions)

populate()