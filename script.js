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




// factory function to create Player
const createPlayer = (function () {
    const player1Name = document.getElementById('player1').value
    const player2Name = document.getElementById('player2').value
    const returnPlayer = () => {
        const player1 = player1Name;
        const player2 =player2Name;
        console.log('Player1: ', player1)
        console.log('Player2: ', player2)
    }

    return returnPlayer;

})();


const test = createPlayer()
// console.log(test())


// const player1 = createPlayer('Ted')
// console.log(player1())
// console.log(player1)
