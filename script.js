// tic tac toe code structure:
// Creen will open up with first dialogue box, user has to press "Yes"

// Once 'yes' has been clicked, another box appears in place of 
// the first, prompting the user to put in the team names,
// if they want

// From here, user presses "Start game", making both dialogue boxes
// dissapear, being replaced with the actual gameboard and scoreboard


// Checking for a win: each player is assigned an array, Each time a box
// is clicked, that player's array gets matchedup with winningConditions,
// if there's a match, that player wins

// Draw: If all boxes are clicked and neither array contains a winning
// condition, the game ends in a draw


// factory function for the game board
function createBoard () {

    const player1Marks = [];
    const player2Marks = [];

    
    const winningConditions = [
        [0, 1, 2],
        [0, 4, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8]
    ];


    function changeBoard (index, player, box) {
        console.log(player)
        if (player === 'X') {
            player1Marks.push(index);
            box.textContent = player;
        } else if (player === 'O') {
            player2Marks.push(index);
            box.textContent = player;
        }
        console.log(player1Marks);
        console.log(player2Marks);
    };

    // maybe put in the checkWin function here??
    // ideas: create two separate arrays that are specific to each player
    // add whatever indexes these players clicked into their specific
    // array ... this array goes through a loop every time to check 
    // if it contains any of the winning conditions (which will be another
    // array)

    function checkBoardWin (player) {
        // here both player arrays will be checked to see if they have
        // a winning cobination
        let endGameResult = false;

        if (player === 'X') {
            for (let array of winningConditions) {
               player1Check = array.every(item => player1Marks.includes(item));
               console.log(player1Check)
               if (player1Check) {
                    console.log('win check ran')
                    endGameResult = true
                    break
               }

            };
        } else if (player === 'O') {
            for (let array of winningConditions) {
                player2Check = array.every(item => player2Marks.includes(item));
                console.log(player2Check)
                if (player2Check) {
                    console.log('win check ran')
                    endGameResult = true
                    break
                }
            };
        }
        console.log(endGameResult)
        return endGameResult
        


    };


    function clearBoard (clickBoxes, isGameOver) {
        player1Marks.length = 0;
        player2Marks.length = 0;


        console.log(player1Marks)
        console.log(player2Marks)

        if (isGameOver === false) {
            clickBoxes.forEach(box => {
                box.classList.remove('disabled-box')
                box.textContent = ''
                box.style.backgroundColor = 'aquamarine'
            })
        }
        return {player1Marks, player2Marks, clickBoxes}
    }


    return {changeBoard, checkBoardWin, clearBoard}
   
};




// main game controller function
function gameController (player1Name, player2Name) {
    // creates initial existence of the board, and provides a reference:
    const board = createBoard();
    console.log(board);


    let disabledBoard = false;
    console.log(disabledBoard)

    gameIsOver = false;

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


    boardController.updateScoreBoard(players[0].name, players[1].name)
    console.log(players);

    // set the variable that will allow players to switch between
    // each other
    let activePlayer = players[0];
    console.log(activePlayer)

    function switchPlayerTurn() {
        if (activePlayer === players[0]) {
            activePlayer = players[1];
        } else if (activePlayer === players[1]) {
            activePlayer = players[0];
        }
        statusBoxController.readTurn(activePlayer.name); 
        return activePlayer;
    }


    // reference sets the groundwork of eventListeners for each box clicked
    const clickBoxes = document.querySelectorAll('.box');

    const tempBoard = [];
     for (let i = 0; i < clickBoxes.length; i++) {
        tempBoard.push(clickBoxes[i]);
        
    };
    console.log(tempBoard)


    clickBoxes.forEach(box => {
        box.addEventListener('click', boxClickEvent)

    });

    

    function boxClickEvent(event) {
        console.log(disabledBoard)
        if (disabledBoard === true) {
            return

        } 
            
        const box = event.target;
        box.style.backgroundColor = 'grey';
        const indexPosition = tempBoard.indexOf(event.target);
        
        console.log(activePlayer.symbol)
        const moveResult = board.changeBoard(indexPosition, activePlayer.symbol, box)
        const checkForWin = board.checkBoardWin(activePlayer.symbol)
        console.log(checkForWin);

        box.classList.add('disabled-box');
        const disabledBoxes = document.querySelectorAll(".disabled-box");
        // If checkBoardWin comes back as true from checkForWin, I want to make
        // the gameboard dissapear and declare a winner, whil also resetting all
        // arrays and game functions
        if (checkForWin) {
            endGame(activePlayer.name, gameIsOver);

            // prevents the rest of code block from running
            // no (switchPlayer occurs):
            return
        };

        // if all boxes are clicked and have the disabled
        // class, a draw will be triggered
        if (clickBoxes.length === disabledBoxes.length) {
            console.log('tis a draw')
            drawGame()
            return
            // draw function should possibly have a CSS trigger
            // that causes the "Play Again" button to enlarge and light up

        };

    
        switchPlayerTurn();
        console.log(activePlayer);
    
        
    };

     


    const endGame = function (winningPlayer, gameIsOver) {
        gameIsOver === true;

        console.log(winningPlayer);
        boardController.addPoint(winningPlayer, players[0].name, players[1].name);

        disabledBoard = true;
        console.log(disabledBoard);
        
        // a winner should be declared in a new game status box
        statusBoxController.declareWinner(winningPlayer);

        // alter playAgainButton:
        playAgainButton.classList.add('new-game-temporary')

        
        console.log('end reached');
        return {disabledBoard, activePlayer, gameIsOver}
    };

    const drawGame = function () {
        statusBoxController.declareDraw();
    };

    console.log(disabledBoard);


    // this chunk of code will control the reset process if the reset
    // button is clicked
    const resetButton = document.querySelector('.reset-game');
    resetButton.addEventListener('click', () => {

        // this allows the board to be reset:
        board.clearBoard(clickBoxes, gameIsOver);
        console.log('game is over, board reset through button')

        playAgainButton.classList.remove('new-game-temporary')
        
        activePlayer = players[0];

        boardController.clearScores(players[0].name, players[1].name);
        statusBoxController.resetTurn(players[0].name);

        disabledBoard = false;

    });

// this will control the 'play again' process if the Play Again button is clicked
    const playAgainButton = document.querySelector('.new-game');
    playAgainButton.addEventListener('click', () => {

        board.clearBoard(clickBoxes, gameIsOver);
        console.log('round is over, play again clicked');

        playAgainButton.classList.remove('new-game-temporary')

        statusBoxController.resetTurn(players[0].name);

        activePlayer = players[0];
        disabledBoard = false;
    });   

}




const gameButton = document.querySelector('.yes-game');
gameButton.addEventListener('click', () => {
    const firstPrompt = document.querySelector('.prompt-game-box')
    const promptPlayers = document.querySelector('.player-names-box');
    switchBoxes(promptPlayers, firstPrompt);
})


//Event Listener for start game button
const startButton = document.querySelector('.start-game')
startButton.addEventListener('click', (e) => {
    e.preventDefault();
    const player1Name = document.getElementById('first-player').value
    const player2Name = document.getElementById('second-player').value

    gameController(player1Name, player2Name);

    // make container dissapear to make way for gameboard
    const promptsContainer = document.querySelector('.prompts-container');
    clearContainer(promptsContainer);

    const gameContainer = document.querySelector('.game-container');
    const gameControls = document.querySelector('.game-controls');
    gameVisible(gameContainer, gameControls);

});



function clearContainer(gameContainer) {
    gameContainer.style.display = 'none'
}

function gameVisible(gameContainer, control) {
    gameContainer.style.display = 'flex';
    control.style.display = 'grid'

}

function switchBoxes(playerBox, firstPrompt) {
    playerBox.style.display = 'block'
    firstPrompt.style.display = 'none'
}

// factory function responsible for updating the status box below the
// game Board
const statusBoxController = (function () {
    const statusBox = document.querySelector('.status-box');

    function readTurn (activePlayer) {
        // console.log('trun has been read')
        statusBox.textContent = `It is ${activePlayer}'s turn!`;
    };

    function declareWinner (winner) {
        // console.log('a player has won');
        statusBox.textContent = `${winner} has won the game !!!`
    };

    function declareDraw () {
        // console.log('both players meet failure')
        statusBox.textContent = `All boxes have been filled, 
        the game has ended in a draw.`
    };

    function resetTurn (currentPlayer) {
        // console.log('game has reset to first player turn')
        statusBox.textContent = `It is ${currentPlayer}'s turn!`
    }

    return {readTurn, declareWinner, declareDraw, resetTurn}
})();


// factory function responsible for operating the game Control board
// in the corner
const boardController = (function () {

    let player1Score = 0;
    let player2Score = 0;

    function addPoint (winningPlayer, player1, player2) {
        console.log('point has been added')
        console.log(winningPlayer);
        console.log(player1Score);
        console.log(player2Score);
        if (player1 === winningPlayer) {
            player1Score++
            console.log(player1Score)
        } else if (player2 === winningPlayer) {
            player2Score++
            console.log(player2Score)
        };
        updateScoreBoard(player1, player2);
        return {player1Score, player2Score}
    }

    function updateScoreBoard (player1, player2) {
        const player1Board = document.querySelector('.player1-score')
        const player2Board = document.querySelector('.player2-score')
        
        player1Board.textContent = `${player1}'s score: ${player1Score}`;
        player2Board.textContent = `${player2}'s score: ${player2Score}`;
        console.log('it ran');
    }

    function clearScores (player1, player2) {
        player1Score = 0;
        player2Score = 0;
        updateScoreBoard(player1, player2);
        return {player1Score, player2Score};
    };

    return {addPoint, updateScoreBoard, clearScores}
})();



