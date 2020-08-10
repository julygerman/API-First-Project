// I need to create a board layout 5 X 6
// each money box needs to have an event clicker
// the board needs to have category specific API jeopardy questions attached to each indiviual category and its cards
// the game needs to be able to keep score
// the game needs to generate multiple choice questions per card
// the game needs to be able to subtract points from the player if theier answers are false
// if the player wins or loses the board needs to stop being clickable
// the reset button nets to initialize a game reset
// the game needs to be able to 
// I would like to randomize the board with new questions and categories but it seems to complicated becasue i would ahve to come up with all the multiple choice answers



// Write Objectives
// Write User Stories

// Questions:
// Who killed Martha and Thomas Wayne? T: Joe Chill F;

/*------Constants------*/

/*------Variables (state)------*/
let currentQuestionsIndex, sortQuestions;
let wrongAnswer = 0; 


/*------Cached Element References------*/
const contentElement = document.getElementById('questionContent')
const questionElement = document.getElementById('questions')
const gameStatus = document.getElementById('mainMessage')
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




/*------Event Listeners------*/

// document.querySelector('section.div').addEventListener('click', onClick);
startBtn.addEventListener('click', startGame)
resetBtn.addEventListener('click', init)
nxtBtn.addEventListener('click', ()=> {
    currentQuestionsIndex++;
    setNextQuestion();
});
/*------Functions------*/
init();

function init(){
resetStatus(document.body);
nxtBtn.classList.add('hide')

while (answersElement.firstChild){
    answersElement.removeChild(answersElement.firstChild)
    }
    startGame();
}

function startGame(){
startBtn.classList.add('hide');
startContent.classList.add('hide');
sortQuestions = questions.sort(()=> questions.length)
currentQuestionsIndex = 0;
wrongAnswer = 0;
contentElement.classList.remove('hide');
setNextQuestion();
getWinner.classList.add('hide');
endGame.classList.add('hide');
thirdlife.classList.remove('hide');
secondLife.classList.add('hide')
lastLife.classList.add('hide')
fatality.classList.remove('hide')
}

function setNextQuestion(){
    init();
    displayQuestion(sortQuestions[currentQuestionsIndex])
}

function displayQuestion(question){
questionElement.innerText = question.question;
question.answers.forEach((answer)=> {
    const button = documnet.createElement('button')
    button.innerText =answer.text;
    button.classList.add('button');
    if (answer.correct){
        button.dataset.correct = answer.correct;   
        }
        button.addEventListener('click', getWinner);
        answersElement.appendChild(button);
    });
}

function getWinner(e){
const buttonChose = e.target;
const correct = buttonChose.dataset.correct;
if (correct) {
    // render sarcastic Riddler quote
    }   else {
        wrongAnswer++;
        // render arrogant Riddler quote
        displayLives();
    }
    setStatusClass(document.body, correct);
    Array.from(answersElement.children).forEach((button)=> {
        setStatusClass(button, button.dataset.correct);
    });
    if (sortQuestions.length > currentQuestionsIndex + 1){
        if(wrongAnswer != 3) nxtBtn.classList.remove('hide');
    } else {
        resetBtn.classList.remove('hide');
        // add if statement to declare winner
    }
}




 

function render(){

}

