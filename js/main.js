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
let currentQuestionsIndex;
let wrongAnswer = 0; 


/*------Cached Element References------*/
const contentElement = getElementById('questionContent')
const questionElement = document.getElementById('questions')
const gameStatus = document.getElementById('mainMessage')
const answersElement = document.getElementById('answerButtons')
const nxtBtn = document.getElementById('nextButton')
const resetBtn = document.getElementById('resetButton')
const thirdlife = document.getElementById('threeLives')
const secondLife = document.getElementById('twoLives')
const lastLife = document.getElementById('oneLife')
const fatality = document.getElementById('noLives')
const endGame = document.getElementById('loser')




/*------Event Listeners------*/

// document.querySelector('section.div').addEventListener('click', onClick);
resetBtn.addEventListener('click', init)
nxtBtn.addEventListener('click', ()=> {
    currentQuestionsIndex++;
    setNextQuestion();
});
/*------Functions------*/
//init()
function init(){
resetStatus(document.body);
nxtBtn.classList.add('hide')

while (answersElement.firstChild){
    answersElement.removeChild(answersElement.firstChild)
    }
    
}



function getWinner(){
    if (question[0] === true && question[1] === true && question[2] === true && question[3] === true && question[4] === true && question[5] === true && question[6] === true && question[7] === true && question[8] === true && question[9] === true) {
        gamestatus.textContent = `What? You did it? You've must have cheated. There is no way you could beat me. You cheated, You couldn't have outsmarted me!`
        isWinner = true
        // if player gets 1 question wrong he is loses a life 
        // player starts of with 3 lives
    } else {
        gamestatus.textContent = `Fail! Not so easy now, is it? Frustrating, isn't it? Take some time to wrap your feeble mind around where you went wrong and try again.`
    }
}


 

function render(){

}

