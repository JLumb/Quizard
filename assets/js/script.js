
let randomQuestions, currentQuestion;
let questionContainer = document.getElementsByClassName('question-container');
let questionElement = document.getElementsByClassName('question');
let answerBtns = document.getElementsByClassName('answer-btns');

function startGame () {
    console.log('game started');   
} 

function findQuestion () {
    showQuestion();
}

function showQuestion(){
    

function selectAnswer () {}

function checkAnswer () {}

let questions = [ 
    {
        question:'What is the platform number for the train to hogwarts?',
        answers:[
            {text: '10 1/2', correct: false},
            {text: '9 3/4', correct: true},
            {text:'7 1/2', correct: false},
            {text: '8 3/4', correct:false}  
        ]
    }
]