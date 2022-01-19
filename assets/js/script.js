
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
         question: 'What is the platform number for the train to hogwarts?',
         answers: [
            { text: '10 1/2', correct: false },
            { text: '9 3/4', correct: true },
            { text: '7 1/2', correct: false },
            { text: '8 3/4', correct: false }  
              ]
           },
           {
         question: "What is the name of Harry's pet owl?",
         answers:[
                { text: 'Alfie', correct: false },
                { text: 'Rudolph', correct: false },
                { text: 'Hedwig', correct: true },
                { text: 'Bedwig', correct: false }
                ]  
            },
            {
         question: "How did harry survive underwater in the Triwizard tournament?",
         answers:[
                { text: 'Transfiguration', correct: false },
                { text: 'Bubble-head charm', correct: false },
                { text: 'Gillyweed', correct: true },
                { text: 'Gills charm', correct: false }
                ]  
            },
            {
         question: "What is the model of Harry's broom?" ,
         answers:[
                { text: 'Nimbus 2000', correct: true },
                { text: 'Nimbus 3000', correct: false },
                { text: 'Nimbus 4000', correct: false },
                { text: 'Nimbus 5000', correct: false }
                ]  
            },
            {
                
         question: "What is Luna Lovegoods Patronus?",
         answers:[
                { text: 'Hare', correct: true },
                { text: 'Otter', correct: false },
                { text: 'Lynx', correct: false },
                { text: 'Owl', correct: false }
           ]
           }, {
                
         question: "What spell does Ron use to save hermione from the troll in The Sorcerers Stone?",
         answers:[
                { text: 'Wingardium Leviosa', correct: true },
                { text: 'Stupify', correct: false },
                { text: 'Petrificus Totalus', correct: false },
                { text: 'Confundus', correct: false }
            ]
            },
            {
                
         question: "What animal defended Dumbledore?",
         answers:[
                { text: 'Stag', correct: false },
                { text: 'Dragon', correct: false },
                { text: 'Thestral', correct: false },
                { text: 'Phoenix', correct: true }
            ]
            },
            {
                
         question: "How many staircases are in Hogwarts?",
         answers:[
                { text: '142', correct: true },
                { text: '976', correct: false },
                { text: '257', correct: false },
                { text: '839', correct: false }
            ]
            },
          {
                
         question: "How many Horcruxes were made?",
         answers:[
                { text: '7', correct: false },
                { text: '9', correct: false },
                { text: '6', correct: false },
                { text: '8', correct: true }
           ]
           },   
            
           ]}