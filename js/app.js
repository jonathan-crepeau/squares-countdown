// console.log('Fear is the mind killer.');

$('.start-btn').on('click', () => {
    gameObject.createSquares(20);
    $('.game-square').on('click', gameObject.handleClick);
});



const gameObject = {
    time: 10,
    rounds: 1,
    score: 0,
    playGame() {
        if (gameObject.rounds >= 4) {
            return alert('Game over!');
        } else {
            console.log(gameObject.rounds);
            gameObject.rounds++
            this.playGame()
        }
    },
    createSquares(numberOfSquares) {
        for (let i = 0; i < numberOfSquares; i++) {
            const newSquare = $('<div class="game-square"></div>');
            gameObject.colorSquares(newSquare);
            $('.squares-container').append(newSquare);
        }
    },
    colorSquares(newSquare) {
        const num = Math.floor(Math.random() * (3 - 1 + 1) + 1);
        if (num === 1) {
            $(newSquare).css('background-color', 'red');
        } else if (num === 2) {
            $(newSquare).css('background-color', 'blue');
        } else {
            $(newSquare).css('background-color', 'green');
        }
    },
    handleClick(event) {
        const squareColor = $(event.target).css("background-color");
        const thirdNum = squareColor.substring(4, squareColor.length - 1).split(" ");
        if (thirdNum[2] === '255') {
            gameObject.updateScore('win');
            $(event.target).remove();
        } else {
            gameObject.updateScore('loss');
            $(event.target).remove();
        }
    },
    updateScore(input) {
        if (input === 'win') {
            gameObject.score++;
            $('.scoreboard').html('scoreboard ' + gameObject.score)
        } else {
            gameObject.score--;
            $('.scoreboard').html('scoreboard ' + gameObject.score)
        }
    },
}
