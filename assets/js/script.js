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
        answer:2, 
    },
    {
    question: "What is the name of Harry's pet owl?",
        answer1: 'Alfie', 
        answer2: 'Rudolph', 
        answer3: 'Hedwig', 
        answer4: 'Bedwig',
        answer:3, 
       },
       {
    question: "What is the model of Harry's broom?",
        answer1: 'nimbus 2000', 
        answer2: 'nimbus 3000', 
        answer3: 'nimbus 5000', 
        answer4: 'nimbus 4000',
        answer:1, 
       },
       {
    question: 'What animal defended Dumbledore?',
        answer1: 'Stag', 
        answer2: 'Dragon', 
        answer3: 'thestral', 
        answer4: 'Phoenix',
        answer:4, 
       },
       {
    question: 'How did harry survive underwater in the Triwizard tournament?',
        answer1: 'Transfiguration', 
        answer2: 'Bubble-head Charm', 
        answer3: 'Gillyweed', 
        answer4: 'Gills Charm',
        answer:3,
       },
       {
    question: 'What spell does Ron use to save hermione from the troll in The Sorcerers Stone?',
        answer1: 'Wingardium Leviosa', 
        answer2: 'Stupify', 
        answer3: 'Petrificus Totalus', 
        answer4: 'Confundus',
        answer:1, 
       },
       {
    question: 'How many staircases are in Hogwarts?',
        answer1: '142', 
        answer2: '976', 
        answer3: '256', 
        answer4: '839',
        answer:1,
       },
       {
    question: 'How many Horcruxes were made?',
        answer1: '7', 
        answer2: '9', 
        answer3: '6', 
        answer4: '8',
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