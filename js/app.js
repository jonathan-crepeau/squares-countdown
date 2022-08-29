// console.log('Fear is the mind killer.');

$('.start-btn').on('click', () => {
    gameObject.playGame();
    $('.game-square').on('click', gameObject.handleClick);
    $('.start-btn').detach();
});

const gameObject = {
    time: 10,
    rounds: 1,
    score: 0,
    playGame() {
        if (gameObject.rounds >= 4) {
            return alert('Game over!');
        } else {
            gameObject.setRound();
            gameObject.setTimer();
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
    setRound() {
        $('.squares-container').empty();
        $('.round').html('round ' + gameObject.rounds);

        if (gameObject.rounds === 1) {
            this.createSquares(20);
            gameObject.time = 30;
        } else if (gameObject.rounds === 2) {
            this.createSquares(50);
            gameObject.time = 20;
        } else {
            this.createSquares(100);
            gameObject.time = 10;
        }
        $('.time').html('time: ' + gameObject.time + 's');
    },
    setTimer() {
        const timer = setInterval(() => {
            if (gameObject.time === 0) {
                clearInterval(timer);
                gameObject.rounds++;
                gameObject.playGame();
            }
            console.log(gameObject.time);
            $('.time').html('time: ' + gameObject.time + 's');
            gameObject.time--;
        }, 200)
    }
}
