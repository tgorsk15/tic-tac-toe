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
    const boardMarks = [];
    const gameBoard = document.querySelector('.gameboard');
    const gameBoxes = gameBoard.getElementsByTagName('div');
    console.log(gameBoxes)
    for (let i = 0; i < gameBoxes.length; i++) {
        boardMarks.push(gameBoxes[i].innerHTML)
    };
    console.log(boardMarks)
   
})();


// factory function for playing a round
const playRound = function (player1, player2) {
    console.log(player1);
    console.log(player2);
}

// factory function to create Player
const createPlayer = function (playerName, symbol) {
    return {
        playerName: playerName,
        symbol: symbol,
    }
};


//Event Listener for start game button
const startButton = document.querySelector('.start-game')
startButton.addEventListener('click', (e) => {
    e.preventDefault();
    const player1Name = document.getElementById('first-player').value
    const player2Name = document.getElementById('second-player').value
    
    const player1 = createPlayer(player1Name, 'X');
    const player2 = createPlayer(player2Name, 'O');

    console.log('done')
    console.log(player1);
    console.log(player2);
    
    // link to playRound function
    // playRound(player1, player2);

    // make container dissapear to make way for gameboard
    const promptsContainer = document.querySelector('.prompts-container')

    clearContainer(promptsContainer);

    
})

const boxesClicked = document.querySelectorAll('.box');
// console.log(boxesClicked);
boxesClicked.forEach(box => {
    box.addEventListener('click', () => {
        box.style.backgroundColor = 'black';
        console.log('done')
    })
})

// const test = createPlayers()

function clearContainer(container) {
    container.style.display = 'none'
}




