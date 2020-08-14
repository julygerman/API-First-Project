

/*------Constants------*/

/*------Variables (state)------*/
let currentQuestionsIndex, sortQuestions;
let wrongAnswer = 0 
let score = 0

/*------Cached Element References------*/
const contentElement = document.getElementById('questionContent')
const questionElement = document.getElementById('questions')
const answersElement = document.getElementById('answerButtons')
const startContent = document.getElementById('startMessage')
const startBtn = document.getElementById('startButton')
const nxtBtn = document.getElementById('nextButton')
const resetBtn = document.getElementById('resetButton')
const thirdlife = document.getElementById('threeLives')
const secondLife = document.getElementById('twoLives')
const lastLife = document.getElementById('oneLife')
const fatality = document.getElementById('noLives')
const endGame = document.getElementById('loser')
const wonMessage = document.getElementById('winningMessage')
const scoreEl = document.getElementById('score')
const endGameAudio = new Audio('Audio/explosion.wav')
const gameAudio = new Audio('Audio/gameTrack.wav')
const winningAudio = new Audio('Audio/cubanpete.wav')
const buzzerAudio = new Audio('Audio/overTheTop.wav')
const youLoseAudio = new Audio('Audio/riddlerLaugh.wav')
const correctAudio = new Audio('Audio/battleship.wav')
const gameStatus = document.getElementById('H3')
/*------Event Listeners------*/

startBtn.addEventListener('click', render)
resetBtn.addEventListener('click', init)
nxtBtn.addEventListener('click', ()=> {
    buzzerAudio.pause()
    buzzerAudio.currentTime = 0
    currentQuestionsIndex++
    gameStatus.innerText = ''
    setNextQuestion()
});
/*------Functions------*/
init()

function init(){
startBtn.classList.remove('hide')
startContent.classList.remove('hide')
wonMessage.classList.add('hide')
endGame.classList.add('hide')
thirdlife.classList.add('hide')
secondLife.classList.add('hide')
lastLife.classList.add('hide')
fatality.classList.add('hide')
nxtBtn.classList.add('hide')
contentElement.classList.add('hide')
questionElement.classList.remove('hide')
answersElement.classList.remove('hide')
gameStatus.classList.remove('hide')
//gameStatus.innerText = "I, Edward Nigma, have placed a dazzling selection of questions. an you solve them all? Will you solve all my riddles will you save these pathetic heroes?"
scoreEl.classList.add('hide')
score = 0
}

function render(){
    gameAudio.play()
    gameAudio.volume = 0.4
    startBtn.classList.add('hide')
    startContent.classList.add('hide')
    sortQuestions = questions.sort(() => questions.length)
    currentQuestionsIndex = 0
    wrongAnswer = 0
    score = score
    scoreEl.innerText = score
    scoreEl.classList.add('hide')
    setNextQuestion()
    contentElement.classList.remove('hide')
    wonMessage.classList.add('hide')
    endGame.classList.add('hide')
    thirdlife.classList.remove('hide')
    secondLife.classList.add('hide')
    lastLife.classList.add('hide')
    fatality.classList.add('hide')
    gameStatus.innerText = "I, Edward Nigma, have placed a dazzling selection of questions. an you solve them all? Will you solve all my riddles will you save these pathetic heroes?"
}

function setNextQuestion(){
    reset()
    displayQuestion(sortQuestions[currentQuestionsIndex])
}

function reset(){
    resetStatus(document.body)
    nxtBtn.classList.add('hide')
    wonMessage.classList.add('hide')
    endGame.classList.add('hide')
    while (answersElement.firstChild){
        answersElement.removeChild(answersElement.firstChild)
    }
}

function displayQuestion(question){
questionElement.innerText = question.question;
question.answers.forEach((answer)=> {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('button');
    if (answer.correct){
        button.correct = answer.correct;   
    }
    button.addEventListener('click', chooseAnswer);
    answersElement.appendChild(button);
    });
}

function chooseAnswer(e){
const buttonChose = e.target
const correct = buttonChose.correct
if (correct) {
    score++
    gameStatus.innerText = "Easy! Isn't it? Well, we'll see. We'll see."
    correctAudio.play()
    correctAudio.volume = 0.09
    } else {
    wrongAnswer++
    gameStatus.innerText = "Seriously, this was the easy one. How are you going to save them if you can't even figure out the most trivial of conundrums?"
    buzzerAudio.play()
    buzzerAudio.volume = 0.09
    displayLives()
    }
    setStatusClass(document.body, correct)
    Array.from(answersElement.children).forEach((button)=> {
        setStatusClass(button, button.correct)
    })
    if (sortQuestions.length > currentQuestionsIndex + 1){
        if(wrongAnswer != 3) nxtBtn.classList.remove('hide')
     } else resetBtn.classList.remove('hide')
     if (score === 10){
         wonMessage.classList.remove('hide')
         thirdlife.classList.add('hide')
         secondLife.classList.add('hide')
         lastLife.classList.add('hide')
         fatality.classList.add('hide')
         questionElement.classList.add('hide')
         answersElement.classList.add('hide')
         scoreEl.classList.add('hide')
         nxtBtn.classList.add('hide')
         gameStatus.classList.add('hide')
         winningAudio.play()
         gameAudio.pause()
         gameAudio.currentTime = 0
         gameStatus.innerText = "What? You did it? You've must have cheated. There is no way you could beat me!"
     } 
     if (wrongAnswer === 2 && score >=8){
        wonMessage.classList.remove('hide')
        thirdlife.classList.add('hide')
        secondLife.classList.add('hide')
        lastLife.classList.add('hide')
        fatality.classList.add('hide')
        questionElement.classList.add('hide')
        answersElement.classList.add('hide')
        scoreEl.classList.add('hide')
        nxtBtn.classList.add('hide')
        winningAudio.play()
        gameAudio.pause()
        gameAudio.currentTime = 0
        gameStatus.innerText = "What? You did it? You've must have cheated. There is no way you could beat me!"
     }
}

function setStatusClass(element, correct){
    resetStatus(element)
    scoreEl.innerText = score
    if (correct){
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
        // i can add an effect
    }
}

function resetStatus(element){
element.classList.remove('correct')
element.classList.remove('wrong')
//element.classList.remove('effect')
}

function displayLives(){
    if (wrongAnswer === 0) {
        lastLife.classList.add('hide')
        secondLife.classList.add('hide')
    }
    if (wrongAnswer === 1) {
        lastLife.classList.add('hide')
        secondLife.classList.remove('hide')
        thirdlife.classList.add('hide')
        // add set timeout
    }
    if (wrongAnswer === 2) {
        lastLife.classList.remove('hide')
        secondLife.classList.add('hide')
        thirdlife.classList.add('hide')
        // add set timerout
    }
    if (wrongAnswer === 3) {
        nxtBtn.classList.add('hide')
        lastLife.classList.add('hide')
        fatality.classList.remove('hide')
        resetBtn.classList.remove('hide')
        questionElement.classList.add('hide')
        answersElement.classList.add('hide')
        scoreEl.classList.add('hide')
        gameStatus.innerText = "What's wrong? Has your primitive brain given up and accepted that I, the Riddler, am better than you?"
        endGameAudio.play()
        endGameAudio.volume = 0.009
        gameAudio.pause()
        gameAudio.currentTime = 0
        buzzerAudio.pause()
        buzzerAudio.currentTime = 0
        youLoseAudio.play()
        youLoseAudio.volume = 0.09
    } 
}

 const questions = [
     {
         question: "My civilian name is Barry Allen. I'm a police scientist. My alter ego only has one power, but what DC writers and artists did with that one power was something to behold. Despite my power, I was usually late for appointments in my civilian identity. Who am I?",
         // add 'quip' key and insert quotes,
         // quip: "I start you off with a softball"
         answers: [
             {
                 text: "The Atom",
                 correct: false,
             },
             {
                 text: "The Flash",
                 correct: true,
             },
             {
                 text: "Hawkman",
                 correct: false,
             },
             {
                 text: "Zoom",
                 correct: false,
             },
         ],
     },
     {
         question: `What did Superman use to open the door of his "Fortress of Solitude"?`,
         // add quip,
         answers: [
            {
                text: `His super whistle`,
                correct: false,
            },
            {
                text: `Voice Activation`,
                correct: false,
            },
            {
                text: `Kryptonite`,
                correct: false,
            },
            {
                text: `A huge, yellow, arrow shaped key`,
                correct: true,
            },
        ],
     },
     {
         question: `What's missing here? "In brightest day, in blackest night, no evil can escape my sight! Let those who worship evil's might, beware my power, ______!"`,
         // add quip,
         answers: [
             {
                 text: `The Power of Night!`,
                 correct: false,
             },
             {
                 text: `My Grandma's Rice!`,
                 corect: false,
             },
             {
                 text: `Black Lantern's Blight`,
                 correct: false,
             },
             {
                 text: `Green Lantern's Light`,
                 correct: true,
             },
         ],
     },
     {
         question: `What was the name of Green Arrow's sidekick during his "Batman"-like days?`,
         // add quip,
         answers: [
             {
                 text: `Speedy`,
                 correct: true,
             },
             {
                 text: `Arrow Lad`,
                 correct: false,
             },
             {
                 text: `Lance`,
                 correct: false,
             },
             {
                 text: `Lil'Arrow`,
                 correct: false,
             },
         ],
     },
     {
         question: `How did the Flash travel through time?`,
         // add quip,
         answers: [
             {
                 text: `His "Cosmic Treadmill"`,
                 correct: true,
             },
             {
                 text: `He ran counter to the rotation of the Earth really really fast`,
                 correct: false,
             },
             {
                 text: `He used his time machine`,
                 correct: false,
             },
             {
                 text: `He clicked his heels together three times and wished himself there`,
                 correct: false,
             },
         ],
     },
     {
         question: `Who paralyzed Barbara Gordon(aka BatGirl)`,
         // add quip,
         answers: [
             {
                 text: `ManBat`,
                 correct: false,
             },
             {
                 text: `Two-Face`,
                 correct: false,
             },
             {
                 text: `Harley-Quinn`,
                 correct: false,
             },
             {
                 text: `The Joker`,
                 correct: true,
             },
         ],
     },
     {
         question: `Who killed Superman?`,
         // add quip,
         answers: [
             {
                 text: `Doomsday`,
                 correct: true,
             },
             {
                 text: `Lex Luther`,
                 correct: false,
             },
             {
                 text: `Darkseid`,
                 correct: false,
             },
             {
                 text: `Louis Lane`,
                 correct: false,
             },
         ],
     },
     {
         question: `Which Hero lost their father in a plane crash at an early age?`,
         // add quip,
         answers: [
             {
                 text: `Superman`,
                 correct: false,
             },
             {
                 text: `Synestro`,
                 correct: false,
             },
             {
                 text: `Green Lantern`,
                 correct: true,
             },
             {
                 text: `Wonder Woman`,
                 correct: false,
             },
         ],
     },
     {
         question: `What is Wonder Womans's Best interrogation tool?`,
         //add quip,
         answers: [
             {
                 text: `Her fists`,
                 correct: false,
             },
             {
                 text: `Her charm`,
                 correct: false,
             },
             {
                 text: `Her Lasso of truth`,
                 correct: true,
             },
             {
                 text: `She doesn't have any`,
                 correct: false,
             },
         ],
     },
     {
         question: `Other than Kryptonite, What is Superman weak too?`,
         // add quip,
         answers: [
             {
                 text: `Magic`,
                 correct: true,
             },
             {
                 text: `The Sun`,
                 correct: false,
             },
             {
                 text: `Louis Lane`,
                 correct: `false`,
             },
             {
                 text: `None of the above`,
                 corect: false,
             },
         ],
     },
 ];
