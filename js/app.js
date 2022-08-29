// console.log('Fear is the mind killer.');

$('.start-btn').on('click', () => {
    gameObject.createSquares(20);
})

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
            $(newSquare).css('background', 'red');
        } else if (num === 2) {
            $(newSquare).css('background', 'blue');
        } else {
            $(newSquare).css('background', 'green');
        }
    }
}
