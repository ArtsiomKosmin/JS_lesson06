'use strict';

function bot() {
    let finalNumber = parseInt(Math.random() * 100);
    let numberOfTrys = 10;
    console.log(finalNumber);

    function checkNumberOfTrys() {
        numberOfTrys--;
        if (numberOfTrys > 0) {
            return numberOfTrys;
        } else {
            let check = confirm('Попытки закончились, хотите сыграть ещё?');
            if (check) {
                numberOfTrys = 10;
                bot();
            } else {
                alert('Спасибо за игру! Игра закончена');
                throw 'stop';
            }
        }
    }

    function userNumber() {
        let userNum = prompt('Угадай число от 1 до 100: ');
        if (!isNaN(parseFloat(userNum)) && isFinite(userNum)) {
            return userNum;   
        } else if (userNum === null){
            alert('Спасибо за игру! Игра закончена');
        } else {
            alert('Введите число!');
            logic();
        }
    }

    function confiration() {
        let check = confirm('Поздравляю, Вы угадали!!! Хотите сыграть ещё раз?');
        if (check) {
            numberOfTrys = 10;
            bot();
        } else {
            throw 'stop';
        }
    }
    
    function logic() {
        let userNum = userNumber();
        if (userNum > finalNumber) {
            let numberOfTrys = checkNumberOfTrys();
            alert('Загаданное число меньше, осталось попыток ' + (numberOfTrys));
            console.log(finalNumber);
            logic();
        } else if (userNum < finalNumber) {
            let numberOfTrys = checkNumberOfTrys();
            alert('Загаданное число больше, осталось попыток ' + (numberOfTrys));
            console.log(finalNumber);
            logic();
        } else if (userNum == finalNumber) { 
            confiration();
        }
    }
    logic();
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