'use strict';

function bot() {
    let finalNumber = parseInt(Math.random() * 100);
    console.log(finalNumber);


    function userNumber() {
        let userNum = prompt('Угадай число от 1 до 100: ');
        if (!isNaN(parseFloat(userNum)) && isFinite(userNum)) {
            return userNum;   
        } else if (userNum === null){
            alert('Игра закончена');
        } else {
            alert('Введите число!');
            return userNumber();
        }
    }

    function podbor2() {
        let userNum = userNumber();
        if (userNum > finalNumber) {
            console.log('Загаданное число меньше');
            console.log(finalNumber);
            return podbor2();
        } else if (userNum < finalNumber) {
            console.log('Загаданное число больше');
            console.log(finalNumber);
            return podbor2();
        } else if (userNum == finalNumber) { // почему с 3 равно не показывает алерт и консоль лог?
            alert('Поздравляю, Вы угадали!!!');
            console.log('Поздравляю, Вы угадали!!!');
        }
    }
    podbor2();
}

bot();



// function funcMath(a) {
//     return function(b, c) {
//         console.log (a * b);
//         console.log(a);
//         console.log(b);
//         console.log(c);
//     };
// }

// let mathPow = funcMath(10);

// console.log(mathPow(5, 7));