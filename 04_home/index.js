function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    
    if (rand < 0) {
        return 0
    } else {
        return Math.round(rand);
    }
}

let randomNum = randomInteger(0, 9);
console.log(randomNum);

document.querySelector('#btn-check').onclick = function() {
    let userNum = document.querySelector('#input-num').value;
    userNum = parseInt(userNum);
    if (!isNaN(userNum)) {
        if (userNum === randomNum) {
            alert('Вы угадали!');
            location.reload();
        } else if (userNum >= randomNum) {
            alert('Попробуйте ввести меньшее число.');
        } else if (userNum <= randomNum) {
            alert('Попробуйте ввести большее число!')
        }
    } else {
        alert('Введите корректное число!');
    }
}

//- 2 //////////////////////////////////////////////////////////////////////////////////

let btn2 = document.querySelector('#btn-2');
let counter = document.querySelector('#counter');
let count = 3;

btn2.onclick = function () {
    count -= 1;
    btn2.innerHTML = 'Не нажимать!'
    counter.innerHTML = ' Осталось попыток: '+count;
    if (count <= 0) {
        btn2.style.display = 'none';
    }
}

//- 3 //////////////////////////////////////////////////////////////////////////////////

let moreNum1 = document.querySelector('#more-num1'),
moreNum2 = document.querySelector('#more-num2'),
moreNumBtn = document.querySelector('#more-num-btn');

moreNumBtn.onclick = function () {
    alert(Math.max(moreNum1.value, moreNum2.value))
}

//- 4 //////////////////////////////////////////////////////////////////////////////////

let zodiakDay = document.querySelector('#zodiak-day'),
    zodiakMonth = document.querySelector('#zodiak-month'),
    zodiakOut = document.querySelector('#zodiak-out'),
    zodiakBtn = document.querySelector('#zodiak-btn');

zodiakBtn.onclick = function () {
    let d = parseInt(zodiakDay.value),
        m = parseInt(zodiakMonth.value);
    
        if ((m == 1 && d >= 21) || (m == 2 && d <= 18)) {
            zodiakOut.innerHTML = 'Водолей';
        } else if ((m == 2 && d >= 19) || (m == 3 && d <= 20)) {
            zodiakOut.innerHTML = 'Рыбы';
        } else if ((m == 3 && d >= 21) || (m == 4 && d <= 20)) {
            zodiakOut.innerHTML = 'Овен';
        } else if ((m == 4 && d >= 21) || (m == 5 && d <= 21)) {
            zodiakOut.innerHTML = 'Телец';
        } else if ((m == 5 && d >= 22) || (m == 6 && d <= 21)) {
            zodiakOut.innerHTML = 'Близнецы';
        } else if ((m == 6 && d >= 22) || (m == 7 && d <= 22)) {
            zodiakOut.innerHTML = 'Рак';
        } else if ((m == 7 && d >= 23) || (m == 8 && d <= 23)) {
            zodiakOut.innerHTML = 'Лев';
        } else if ((m == 8 && d >= 24) || (m == 9 && d <= 22)) {
            zodiakOut.innerHTML = 'Девы';
        } else if ((m == 9 && d >= 23) || (m == 10 && d <= 23)) {
            zodiakOut.innerHTML = 'Весы';
        } else if ((m == 10 && d >= 24) || (m == 11 && d <= 22)) {
            zodiakOut.innerHTML = 'Скорпион';
        } else if ((m == 11 && d >= 23) || (m == 12 && d <= 21)) {
            zodiakOut.innerHTML = 'Стрелец';
        } else if ((m == 12 && d >= 22) || (m == 1 && d <=20)) {
            zodiakOut.innerHTML = 'Козерог';
        } else {
            zodiakOut.innerHTML = 'Введите корректные данные!';
        }
}