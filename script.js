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


// factory function for the game board
function createBoard () {
    const boardMarks = ["", "", "", "", "", "", "", "", ""];
    const clickBoxes = document.querySelectorAll('.box');
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
    ]


    function changeBoard (index, player) {
        console.log(player)
        boardMarks[index] = player;
        console.log(boardMarks)
        if (player === 'X') {
            player1Marks.push(index)
        } else if (player === 'O') {
            player2Marks.push(index)
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
                // looking like I will have to be using another way to loop through the
                // code, forEach loop can't be broken
               const player1Check = array.every(item => player1Marks.includes(item));
               console.log(player1Check)
               if (player1Check) {
                console.log('ran')
                    endGameResult = true
                    break
               }

            };
        } else if (player === 'O') {
            for (let array of winningConditions) {
                const player2Check = array.every(item => player2Marks.includes(item));
                console.log(player2Check)
                if (player2Check) {
                    endGameResult = true
                    break
                }
            };
        }
        console.log(endGameResult)
        return endGameResult
        
    };


    function clearBoard () {
        player1Marks.length = 0;
        player2Marks.length = 0;

        console.log(player1Marks)
        console.log(player2Marks)

        

        return {player1Marks, player2Marks}
    }

    return {changeBoard, checkBoardWin, clearBoard}
   
};





// main game controller function
function gameController (player1Name, player2Name) {
    const board = createBoard();
    console.log(board);

    let disabledBoard = false;
    console.log(disabledBoard)

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

    function switchPlayerTurn() {
        if (activePlayer === players[0]) {
            activePlayer = players[1];
        } else if (activePlayer === players[1]) {
            activePlayer = players[0];
        } 
        return activePlayer;
    }


    const getActivePlayer = () => console.log(activePlayer);
   getActivePlayer()

    // reference sets the groundwork of transfering the player's symbols
    // to the clicked boxes
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
            // box.classList.add('disabled-box')
            return

        } 
            
        const box = event.target;
        box.style.backgroundColor = 'grey';
        const indexPosition = tempBoard.indexOf(event.target);
    
        const moveResult = board.changeBoard(indexPosition, activePlayer.symbol)
        const checkForWin = board.checkBoardWin(activePlayer.symbol)
        console.log(checkForWin);
        // If checkBoardWin comes back as true from checkForWin, I want to make
        // the gameboard dissapear and declare a winner, whil also resetting all
        // arrays and game functions
        if (checkForWin) {
            // clickBoxes.forEach(box => {
            //     box.disabled = true
            // });

            disabledBoard = true;
            endGame()
        };

    
        switchPlayerTurn();
        console.log(activePlayer);
    
        
    };
        
    


    const endGame = function () {
        // Here, all arrays should reset
        // a winner should be declared in a new game status box
        const clearPlayers = board.clearBoard();

        // problem - this is not being read by outer scope:
        disabledBoard = true;

        console.log(disabledBoard)
        console.log(clearPlayers);
        console.log('end reached');
        return disabledBoard
    }
    console.log(disabledBoard)
}


//Event Listener for start game button
const startButton = document.querySelector('.start-game')
startButton.addEventListener('click', (e) => {
    e.preventDefault();
    const player1Name = document.getElementById('first-player').value
    const player2Name = document.getElementById('second-player').value
    

    gameController(player1Name, player2Name);

    console.log('done')

    // make container dissapear to make way for gameboard
    const promptsContainer = document.querySelector('.prompts-container')

    clearContainer(promptsContainer);

    
})



function clearContainer(container) {
    container.style.display = 'none'
}




