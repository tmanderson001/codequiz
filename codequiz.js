function Quiz(questions){
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = fucntion() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}

function Question(text, choice, answer) {
    this.text = text;
    this.choice = choice;
    this.answer = answer;

}

question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}

function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        //show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        //show options
        var choice = quiz.getQuestionIndex().choices;
        for( var i = 0; i < choices.length; i++) {
            var element =  document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choice[i]);
        }
        showProgress();
    }
};

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question" + currentQuestionNumber + "of" + quiz.question.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions here
var questions = [
    new Question("Hyper Text Markup Language Stand For?", ["JavaScript", "XHTML","CSS", "HTML"], "HTML"),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("Inside which HTML element do we put the JavaScript?", ["<js>", "<javascript>", "<scripting>","<script>"], "<js>"),
    new Question("Arrays in Javascript can be used to store", ["text", "numbers", "values", "All"], "All"),
    new Question("Javascript variables are containers for storing", ["Data", "Graphic Design", "Development", "All"], "Data")
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();