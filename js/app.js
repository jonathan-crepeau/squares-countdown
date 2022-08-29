// console.log('Fear is the mind killer.');

$('.start-btn').on('click', () => {
    createSquares(20);
})

function createSquares(numberOfSquares) {
    for (let i = 0; i < numberOfSquares; i++) {
        const newSquare = $('<div class="game-square"></div>');
        $('.squares-container').append(newSquare);
    }
}