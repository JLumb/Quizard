const start = document.getElementById('start')
const quiz = document.getElementById ('container')
const score = document.getElementById('score')
const question = document.getElementById('question')
const choices = document.getElementById('choices')
const answer1 = document.getElementById('1')
const answer2 = document.getElementById('2')
const answer3 = document.getElementById('3')
const answer4 = document.getElementById('4')
const counter = document.getElementById('question-counter')
const timer = document.getElementById('timer')
const timeGauge = document.getElementById('timegauge')
const pointsPerQuestion = 100;
const maxQuestions = 9;



/* the questions variable will store all the questions that the quiz will pick from at random for the user*/
let questions = [
    {
     question: 'What is the platform number for the train to hogwarts?',
        answer1: '10 1/2', 
        answer2: '9 3/4', 
        answer3: '7 1/2', 
        answer4: '8 3/4',
            correct:2, 
    },
    {
    question: "What is the name of Harry's pet owl?",
        answer1: 'Alfie', 
        answer2: 'Rudolph', 
        answer3: 'Hedwig', 
        answer4: 'Bedwig',
            correct:3, 
       },
       {
    question: "What is the model of Harry's broom?",
        answer1: 'nimbus 2000', 
        answer2: 'nimbus 3000', 
        answer3: 'nimbus 5000', 
        answer4: 'nimbus 4000',
            correct:1, 
       },
       {
    question: 'What animal defended Dumbledore?',
        answer1: 'Stag', 
        answer2: 'Dragon', 
        answer3: 'thestral', 
        answer4: 'Phoenix',
            correct:4, 
       },
       {
    question: 'How did harry survive underwater in the Triwizard tournament?',
        answer1: 'Transfiguration', 
        answer2: 'Bubble-head Charm', 
        answer3: 'Gillyweed', 
        answer4: 'Gills Charm',
            correct:3,
       },
       {
    question: 'What spell does Ron use to save hermione from the troll in The Sorcerers Stone?',
        answer1: 'Wingardium Leviosa', 
        answer2: 'Stupify', 
        answer3: 'Petrificus Totalus', 
        answer4: 'Confundus',
            correct:1, 
       },
       {
    question: 'How many staircases are in Hogwarts?',
        answer1: '142', 
        answer2: '976', 
        answer3: '256', 
        answer4: '839',
            correct:1,
       },
       {
    question: 'How many Horcruxes were made?',
        answer1: '7', 
        answer2: '9', 
        answer3: '6', 
        answer4: '8',
            correct:4,
       },
       {
    question: 'What is Luna Lovegoods Patronus?',
        answer1: 'Otter', 
        answer2: 'Hare', 
        answer3: 'Lynx', 
        answer4: 'Owl',
           correct:2,
       },
       {
    question: 'What species of Dragon was Hagrids pet?',
        answer1: 'Hungarian Horntail', 
        answer2: 'Chinese Fireball', 
        answer3: 'Norwegian Ridgeback', 
        answer4: 'Swedish Short-Snout',
        answer:3, 
       },
       {
    question: 'How old was Voldemort when he opened the Chamber of Secrets?',
        answer1: '13', 
        answer2: '19', 
        answer3: '16', 
        answer4: '15',
            correct:3,
       },
       {
    question: 'On a Quidditch pitch, how many goal posts are there?',
        answer1: '10', 
        answer2: '6', 
        answer3: '8', 
        answer4: '4',
            correct:2, 
       },
       {
    question: 'Who was the Quidditch commentator in Harrys first year at Hogwarts?',
        answer1: 'Angelina Johnson', 
        answer2: 'Dean Thomas', 
        answer3: 'Terry Boot', 
        answer4: 'Lee Jordan',
            correct:4, 
          },
          {
    question: 'Who disguised himself as Mad Eye Moody in the Goblet of Fire?',
        answer1: 'Ernie McMillian', 
        answer2: 'Severus Snape', 
        answer3: 'Barty Crouch Jr', 
        answer4: 'Vincent Crabbe',
            correct:3,
          },
          {
    question: 'Who was the first to be stunned by the basilisk?',
        answer1: 'Mrs Norris', 
        answer2: 'Ginny Weasley', 
        answer3: 'Colin Creevey', 
        answer4: 'Hermione Granger',
            correct:1, 
          },
          {
    question: 'What did Dumbledore leave Hermione in his will?',
        answer1: 'An enchanted purse', 
        answer2: 'The Tales of Beedle the Bard', 
        answer3: 'A Lighter', 
        answer4: 'A bezoar',
            correct:2, 
          },
          {
    question: "What magazine does Luna's father publish?",
        answer1: 'The Daily Prophet', 
        answer2: 'The Practical Potioneer', 
        answer3: 'The Quibbler', 
        answer4: 'Challenges in Charming',
            correct:3, 
          },
          {
    question: 'How did Harry spend his first detention',
        answer1: 'Signing autographs', 
        answer2: 'Cleaning trophies', 
        answer3: 'Going into the Forbidden Forest', 
        answer4: 'Writing an essay',
            correct:3,
          },
{
    question: 'What position did Harry play for the Quidditch team?',
        answer1: 'Seeker', 
        answer2: 'Bludger', 
        answer3: 'Keeper', 
        answer4: 'Chaser',
            correct:1, 
    },
    {
    question: 'Who is Fluffy?',
        answer1: 'A three headed dog', 
        answer2: 'Rons Rat', 
        answer3: 'Hermiones Cat', 
        answer4: 'Hagrids Dragon',
            correct:1,
       },
       {
    question: 'What does the Imperius Curse do?',
        answer1: 'Kills', 
        answer2: 'Turns the person into an Animal', 
        answer3: 'Tortures', 
        answer4: 'Controls',
            correct:4, 
       },
       {
    question: 'Who kills Professor Dumbledore?',
        answer1: 'Fenrir Greyback', 
        answer2: 'Sirius Black', 
        answer3: 'Severus Snape', 
        answer4: 'Lucius Malfoy',
            correct:3, 
       },
       {
    question: 'Who was the seeker for the Bulgarian Quidditch team that played in the world cup?',
        answer1: 'Viktor Krum', 
        answer2: 'Cedric Diggory', 
        answer3: 'Igor Karkaroff', 
        answer4: 'Ivan Vulchanov',
            correct:1, 
       },
       {
    question: 'What type of Dragon did harry face in the triwzard tournament?',
        answer1: 'Hungarian Horntail', 
        answer2: 'Chinese Fireball', 
        answer3: 'Norwegian Ridgeback', 
        answer4: 'Welsh Green',
            correct:1,
       },
       {
    question: 'Who is Harrys fifth year Defence Against the Dark Arts teacher?',
        answer1: 'Remus lupin', 
        answer2: 'Severus Snape', 
        answer3: 'Mad Eye Moody', 
        answer4: 'Dolores Umbridge',
            correct:4,
       },
       {
    question: 'What caused Dumbledores hand to be blackened and shriveled?',
        answer1: 'Old Age', 
        answer2: 'A ring', 
        answer3: 'A Death Eater', 
        answer4: 'Lucius Malfoy',
            correct:2,
       },
       {
    question: 'When Dumbledore and Harry first Visit Horace Slughorn, what is he disguised as?',
        answer1: 'A House elf', 
        answer2: 'A Lampshade', 
        answer3: 'an Armchair', 
        answer4: 'A Statue',
            correct:3,
       },
       {
    question: 'Who is grawp?',
        answer1: 'Rons Rat', 
        answer2: 'Hagrids brother', 
        answer3: 'Sirius House elf', 
        answer4: 'A Centaur',
            correct:2, 
       },
       {
    question: 'How does Ron save harry from the Dursleys house?',
        answer1: 'Portkey', 
        answer2: 'Flying Car', 
        answer3: 'Enchanted Broom', 
        answer4: 'Invisible Bus',
            correct:2, 
          },
          {
    question: 'What magical talent does Harry share with Voldemort',
        answer1: 'Parsel Tongue', 
        answer2: 'Anigmus', 
        answer3: 'Both an Auror', 
        answer4: 'Using the Cruciatus Curse',
            correct:1, 
          },
          {
    question: 'According to the Sorting Hat what qualities do Ravenclaw students possess?',
        answer1: 'Daring', 
        answer2: 'Patience and Loyalty', 
        answer3: 'Cunning', 
        answer4: 'Wit and Learning',
            correct:4,
          },
          {
    question: 'How did Moaning Myrtle die?',
        answer1: 'Whomping Willow', 
        answer2: 'Troll', 
        answer3: 'The Killing Curse', 
        answer4: 'The Basilisk',
            correct:4,
          },
          {
    question: 'How does Fawkes the phoenix save harry',
        answer1: 'His Tears', 
        answer2: 'Flies away to get help', 
        answer3: 'His spit', 
        answer4: 'Squawks till help arrives',
            correct:1,
          },
          {
    question: 'Who is Nagini?',
        answer1: 'Dobbys girlfriend', 
        answer2: 'Hagrids Thestral', 
        answer3: 'Voldemorts Snake', 
        answer4: 'a Death Eater',
            correct:3, 
          },
          {
    question: 'What does the Marauders Map show?',
        answer1: 'Password to Dumbledores office', 
        answer2: 'Hidden treasure', 
        answer3: 'Location of everyone in Hogwarts', 
        answer4: 'The room of requirement',
            correct:3,
          },
          {
    question: 'Why was the Whomping Willow planted?',
        answer1: 'Prank on the teachers', 
        answer2: 'Protect Hogwarts from intruders', 
        answer3: 'Protect Remus Lupin', 
        answer4: 'Hide the entrance to Diagon Alley',
            correct:3, 
          },
    
        
]


const prevQuestions = questions.length - 1;
let currentQuestion = 0;
let count = 0;
const questionTime = 15;
const timerWidth = 150;
const timerUnit = timerWidth / questionTime; //15 seconds

start.addEventListener
function startQuiz () {
    findQuestion()
    renderCounter()
    TIMER = setInterval(renderCounter, 1000);
}
/* find and show the current question*/
function findQuestion (){
    let q = questions[currentQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";
    answer1.innerHTML = "<p>"+q.answer1+"</p>";
    answer2.innerHTML = "<p>"+q.answer2+"</p>";
    answer3.innerHTML = "<p>"+q.answer3+"</p>";
    answer4.innerHTML = "<p>"+q.answer4+"</p>";
    
}

function renderCounter (){
    if (count <= questionTime) {
        counter.innerHTML = count;
        timeGauge.style.width = count * timerUnit;
        count++

    } else {
        count = 0;
    }
}


/* display which out of the 9 questions the user is on example; 3 of 9*/
function questionCounter () {
    for (let currentQuestion = 0; currentQuestion < maxQuestions; currentQuestion++){
        counter.innerHTML = `<p>${currentQuestion} + of + ${maxQuestions}</p>`
    }}
/*Check if the answer is correct before moving onto the next question*/
function checkAnswer (answer){
    if (answer=== questions[currentQuestion].correct ) {
        score++
    } else {

    }
}





    