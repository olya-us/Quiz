export default class Quiz {
    constructor(questions) {
        this.score = 0
        this.questions = questions
        this.questionIndex = 0
    }
    getQuestionIndex() {
        return this.questions[this.questionIndex]
    }
    isEnded() {
        return this.questions.length === this.questionIndex
    }
    guess(answer) {
        if (this.getQuestionIndex().isCorrectAnswer(answer)) {
            this.score++
        }
         this.questionIndex++
    }
}
