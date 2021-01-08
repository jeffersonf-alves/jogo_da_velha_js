document.addEventListener('DOMContentLoaded', () => {



    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener('click', handleClik);
    })
})

function handleClik(event) {

    let square = event.target;
    let postion = square.id;

    handleMove(postion);
    updateSquare();
}

function updateSquare() {
    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

        if (symbol != '') {
            square.innerHTML = `<div class='${symbol}'></div>`;           
        }
    })
}