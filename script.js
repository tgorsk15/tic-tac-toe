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


// main game controller function
function gameController (player1Name, player2Name) {
    // const board = createBoard();
    // console.log(board)

    const players = [
        {
            name: player1Name,
            symbol: 'X'
        },
        {
            name: player2Name,
            symbol: 'O'
        }
    ];
    console.log(players);

    let activePlayer = players[0];
    console.log(activePlayer)

    const switchPlayerTurn = function () {
        if (activePlayer === players[0]) {
            activePlayer = players[1];
        } else if (activePlayer === players[1]) {
            activePlayer = player[0];
        } 
        return activePlayer;
    }
    // switchPlayerTurn()

    const getActivePlayer = () => console.log(activePlayer);
    getActivePlayer()
}


//Event Listener for start game button
const startButton = document.querySelector('.start-game')
startButton.addEventListener('click', (e) => {
    e.preventDefault();
    const player1Name = document.getElementById('first-player').value
    const player2Name = document.getElementById('second-player').value
    
    // const player1 = createPlayer(player1Name, 'X');
    // const player2 = createPlayer(player2Name, 'O');
    gameController(player1Name, player2Name);

    console.log('done')
    
    // link to playRound function
    // playRound(player1, player2);

    // make container dissapear to make way for gameboard
    const promptsContainer = document.querySelector('.prompts-container')

    clearContainer(promptsContainer);

    
})

const clickBoxes = document.querySelectorAll('.box');
// console.log(boxesClicked);
clickBoxes.forEach(box => {
    box.addEventListener('click', () => {
        box.style.backgroundColor = 'black';
        playRound(player1, player2);
        console.log('done')
    })
})

// const test = createPlayers()

function clearContainer(container) {
    container.style.display = 'none'
}




