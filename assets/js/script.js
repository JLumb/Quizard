const question = document.getElementById ('question');
const answers = array.from(document.getElementsByClassName ('btn'));
const scoreNum = document.getElementByClassName ('score');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let selectQuestions = [];



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
     question: 'What is the platform number for the train to hogwarts?',
        answer1: '10 1/2', 
        answer2: '9 3/4', 
        answer3: '7 1/2', 
        answer4: '8 3/4',
        answer:2 
    },
    {
    question: 'What is the platform number for the train to hogwarts?',
        answer1: '10 1/2', 
        answer2: '9 3/4', 
        answer3: '7 1/2', 
        answer4: '8 3/4',
        answer:2 
       },
       {
    question: 'What is the platform number for the train to hogwarts?',
        answer1: '10 1/2', 
        answer2: '9 3/4', 
        answer3: '7 1/2', 
        answer4: '8 3/4',
        answer:2 
       },
       {
    question: 'What is the platform number for the train to hogwarts?',
        answer1: '10 1/2', 
        answer2: '9 3/4', 
        answer3: '7 1/2', 
        answer4: '8 3/4',
        answer:2 
       },
       {
    question: 'What is the platform number for the train to hogwarts?',
        answer1: '10 1/2', 
        answer2: '9 3/4', 
        answer3: '7 1/2', 
        answer4: '8 3/4',
        answer:2 
       },
       {
    question: 'What is the platform number for the train to hogwarts?',
        answer1: '10 1/2', 
        answer2: '9 3/4', 
        answer3: '7 1/2', 
        answer4: '8 3/4',
        answer:2 
       },
       {
    question: 'What is the platform number for the train to hogwarts?',
        answer1: '10 1/2', 
        answer2: '9 3/4', 
        answer3: '7 1/2', 
        answer4: '8 3/4',
        answer:2 
       },
       {
    question: 'What is the platform number for the train to hogwarts?',
        answer1: '10 1/2', 
        answer2: '9 3/4', 
        answer3: '7 1/2', 
        answer4: '8 3/4',
        answer:2 
       },
       {
    question: 'What is the platform number for the train to hogwarts?',
           answer1: '10 1/2', 
           answer2: '9 3/4', 
           answer3: '7 1/2', 
           answer4: '8 3/4',
           answer:2 
       },
       {
    question: 'What is the platform number for the train to hogwarts?',
        answer1: '10 1/2', 
        answer2: '9 3/4', 
        answer3: '7 1/2', 
        answer4: '8 3/4',
        answer:2 
       },
       {
    question: 'What is the platform number for the train to hogwarts?',
        answer1: '10 1/2', 
        answer2: '9 3/4', 
        answer3: '7 1/2', 
        answer4: '8 3/4',
        answer:2 
       },
       {
    question: 'What is the platform number for the train to hogwarts?',
        answer1: '10 1/2', 
        answer2: '9 3/4', 
        answer3: '7 1/2', 
        answer4: '8 3/4',
        answer:2 
       },
       {
    question: 'What is the platform number for the train to hogwarts?',
        answer1: '10 1/2', 
        answer2: '9 3/4', 
        answer3: '7 1/2', 
        answer4: '8 3/4',
        answer:2 
          },
          {
    question: 'What is the platform number for the train to hogwarts?',
        answer1: '10 1/2', 
        answer2: '9 3/4', 
        answer3: '7 1/2', 
        answer4: '8 3/4',
        answer:2 
          },
          {
    question: 'What is the platform number for the train to hogwarts?',
        answer1: '10 1/2', 
        answer2: '9 3/4', 
        answer3: '7 1/2', 
        answer4: '8 3/4',
        answer:2 
          },
          {
    question: 'What is the platform number for the train to hogwarts?',
        answer1: '10 1/2', 
        answer2: '9 3/4', 
        answer3: '7 1/2', 
        answer4: '8 3/4',
        answer:2 
          },
          {
    question: 'What is the platform number for the train to hogwarts?',
        answer1: '10 1/2', 
        answer2: '9 3/4', 
        answer3: '7 1/2', 
        answer4: '8 3/4',
        answer:2 
          },
          {
    question: 'What is the platform number for the train to hogwarts?',
        answer1: '10 1/2', 
        answer2: '9 3/4', 
        answer3: '7 1/2', 
        answer4: '8 3/4',
        answer:2 
          },
{
    question: 'What is the platform number for the train to hogwarts?',
        answer1: '10 1/2', 
        answer2: '9 3/4', 
        answer3: '7 1/2', 
        answer4: '8 3/4',
        answer:2 
    },
    {
    question: 'What is the platform number for the train to hogwarts?',
        answer1: '10 1/2', 
        answer2: '9 3/4', 
        answer3: '7 1/2', 
        answer4: '8 3/4',
        answer:2 
       },
       {
    question: 'What is the platform number for the train to hogwarts?',
        answer1: '10 1/2', 
        answer2: '9 3/4', 
        answer3: '7 1/2', 
        answer4: '8 3/4',
        answer:2 
       },
       {
    question: 'What is the platform number for the train to hogwarts?',
        answer1: '10 1/2', 
        answer2: '9 3/4', 
        answer3: '7 1/2', 
        answer4: '8 3/4',
        answer:2 
       },
       {
    question: 'What is the platform number for the train to hogwarts?',
        answer1: '10 1/2', 
        answer2: '9 3/4', 
        answer3: '7 1/2', 
        answer4: '8 3/4',
        answer:2 
       },
       {
    question: 'What is the platform number for the train to hogwarts?',
        answer1: '10 1/2', 
        answer2: '9 3/4', 
        answer3: '7 1/2', 
        answer4: '8 3/4',
        answer:2 
       },
       {
    question: 'What is the platform number for the train to hogwarts?',
        answer1: '10 1/2', 
        answer2: '9 3/4', 
        answer3: '7 1/2', 
        answer4: '8 3/4',
        answer:2 
       },
       {
    question: 'What is the platform number for the train to hogwarts?',
        answer1: '10 1/2', 
        answer2: '9 3/4', 
        answer3: '7 1/2', 
        answer4: '8 3/4',
        answer:2 
       },
       {
    question: 'What is the platform number for the train to hogwarts?',
        answer1: '10 1/2', 
        answer2: '9 3/4', 
        answer3: '7 1/2', 
        answer4: '8 3/4',
        answer:2 
       },
       {
    question: 'What is the platform number for the train to hogwarts?',
        answer1: '10 1/2', 
        answer2: '9 3/4', 
        answer3: '7 1/2', 
        answer4: '8 3/4',
        answer:2 
       },
       {
    question: 'What is the platform number for the train to hogwarts?',
        answer1: '10 1/2', 
        answer2: '9 3/4', 
        answer3: '7 1/2', 
        answer4: '8 3/4',
        answer:2 
          },
          {
    question: 'What is the platform number for the train to hogwarts?',
        answer1: '10 1/2', 
        answer2: '9 3/4', 
        answer3: '7 1/2', 
        answer4: '8 3/4',
        answer:2 
          },
          {
    question: 'What is the platform number for the train to hogwarts?',
        answer1: '10 1/2', 
        answer2: '9 3/4', 
        answer3: '7 1/2', 
        answer4: '8 3/4',
        answer:2 
          },
          {
    question: 'What is the platform number for the train to hogwarts?',
        answer1: '10 1/2', 
        answer2: '9 3/4', 
        answer3: '7 1/2', 
        answer4: '8 3/4',
        answer:2 
          },
          {
    question: 'What is the platform number for the train to hogwarts?',
        answer1: '10 1/2', 
        answer2: '9 3/4', 
        answer3: '7 1/2', 
        answer4: '8 3/4',
        answer:2 
          },
          {
    question: 'What is the platform number for the train to hogwarts?',
        answer1: '10 1/2', 
        answer2: '9 3/4', 
        answer3: '7 1/2', 
        answer4: '8 3/4',
        answer:2 
          },
          {
    question: 'What is the platform number for the train to hogwarts?',
        answer1: '10 1/2', 
        answer2: '9 3/4', 
        answer3: '7 1/2', 
        answer4: '8 3/4',
        answer:2 
          },
          {
    question: 'What is the platform number for the train to hogwarts?',
        answer1: '10 1/2', 
        answer2: '9 3/4', 
        answer3: '7 1/2', 
        answer4: '8 3/4',
        answer:2 
          },
    
        
]}