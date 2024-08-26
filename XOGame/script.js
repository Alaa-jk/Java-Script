let title = document.querySelector('.title')
let turn = 'x'

function changeGamer(id) {
    let element = document.getElementById(id);
    if (turn === 'x' && element.innerHTML == '') {
        element.innerHTML = 'X';
        turn = 'o'
        title.innerHTML = 'O';
    }
    else if (turn === 'o' && element.innerHTML == '') {
        element.innerHTML = 'O';
        turn = 'x'
        title.innerHTML = 'X';
    }
    winner();

}
let squares = [];
function winner() {
    for (let i = 1; i < 10; i++) {
        squares[i] = document.getElementById('item' + i).innerHTML;
    }
    if (squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != '') {
        score(1, 2, 3);
    }
    if (squares[4] == squares[5] && squares[5] == squares[6] && squares[4] != '') {
        score(4, 5, 6);
    } if (squares[7] == squares[8] && squares[8] == squares[9] && squares[7] != '') {
        score(7, 8, 9);
    } if (squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != '') {
        score(1, 4, 7);
    } if (squares[2] == squares[5] && squares[5] == squares[8] && squares[2] != '') {
        score(2, 5, 8);
    } if (squares[3] == squares[6] && squares[6] == squares[9] && squares[3] != '') {
        score(3, 6, 9);
    } if (squares[1] == squares[5] && squares[5] == squares[9] && squares[1] != '') {
        score(1, 5, 9);
    } if (squares[3] == squares[5] && squares[5] == squares[7] && squares[3] != '') {
        score(3, 5, 7);
    }
    else {
        title.innerHTML = `${squares[num1]}  again`;
        setInterval(function () { title.innerHTML += '.' }, 500);
        setTimeout(function () {
            location.reload()
        }, 2000);
    }
}
function score(num1, num2, num3) {
    title.innerHTML = `${squares[num1]}  won`;
    document.getElementById('item' + num1).style.background = "#0f0";
    document.getElementById('item' + num2).style.background = "#0f0";
    document.getElementById('item' + num3).style.background = "#0f0";

    setInterval(function () { title.innerHTML += '.' }, 1000);
    setTimeout(function () {
        location.reload()
    }, 5000);

}