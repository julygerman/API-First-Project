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



/*------Constants------*/

/*------Variables (state)------*/
let winner, choices, comicBook, lives
let question = [];
// let choice1 = [];
// let choice2 = [];
// let choice3 = [];
// let choice4 = [];
let isWinner = false;
let lives = 3;


/*------Cached Element References------*/

let gamestatus = document.getElementById('mainMessage')
let bigPicture = document.getElementById('mainPicture')
let q = document.getElementById('question')
let c1 = document.getElementById('firstChoice')
let c2 = document.getElementById('secondChoice')
let c3 = document.getElementById('thirdChoice')
let c4 = document.getElementById('fourthChoice')




/*------Event Listeners------*/



/*------Functions------*/




function isWinner(){
    if (question[0] === true && question[1] === true && question[2] === true && question[3] === true && question[4] === true && question[5] === true && question[6] === true && question[7] === true && question[8] === true && question[9] === true) {
        gamestatus.textContent = `What? You did it? You've must have cheated. There is no way you could beat me. You cheated, You couldn't have outsmarted me!`
        isWinner = true
        // if player gets 1 question wrong he is loses a life 
        // player starts of with 3 lives
    } else {
        gamestatus.textContent = `Fail! Not so easy now, is it? Frustrating, isn't it? Take some time to wrap your feeble mind around where you went wrong and try again.`
    }
}


 



