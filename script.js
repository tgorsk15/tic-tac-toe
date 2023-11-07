// tic tac toe code structure:
// want screen to open up with a dialogue box that you
// have to click yes on to play

// Once 'yes' has been clicked, another box appears (fades in)
// below the first, prompting the user to put in the team names,
// if they want

// From here, user presses "Start game", making both dialogue boxes
// dissapear, being replaced with the actual game board


// Checking for a win: possibly have to test the array for
// specific patterns of Xs or Os that would determine
// if the game has been won
// ** in a similar vein, once the length of the array is
// 9, no more items can be added and the game ends in a Draw
// after one last check for a win

// IIFE for the game board
const createBoard = (function () {
    const boardMarks = ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'];
    const gameBoard = document.querySelector('.gameboard');
    const boardDivs = gameBoard.getElementsByTagName('div');
    console.log(boardDivs.textContent)
    for (let i = 0; i < boardMarks.length; i++) {
        boardDivs[i].textContent = boardMarks[i];
    };
   
})();


// factory function to create Player
const createPlayers = (function () {
    // const player1Score = document
    const returnPlayer = (player1Name, player2Name) => {
        const player1 = player1Name;
        const player2 = player2Name;
        console.log('Player1: ', player1 )
        console.log('Player2: ', player2 )
    };

    // const returnScore = () => {

    // }
    return returnPlayer;

})();


//Event Listener for start game button
const StartButton = document.querySelector('.start-game')
StartButton.addEventListener('click', (e) => {
    e.preventDefault();
    const player1Name = document.getElementById('player1').value
    const player2Name = document.getElementById('player2').value
    console.log(player1Name)
    console.log(player2Name)
    createPlayers(player1Name, player2Name);
    console.log('done')
    
    // make container dissapear to make way for gameboard
    const promptsContainer = document.querySelector('.prompts-container')

    clearContainer(promptsContainer);

    
})

// const test = createPlayers()

function clearContainer(container) {
    container.style.display = 'none'
}




