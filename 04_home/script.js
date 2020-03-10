let randomNum =  Math.random();
randomNum *= 10;
randomNum = Math.round(randomNum);
console.log(randomNum);


let inputNum = document.querySelector('#input');
document.querySelector('#btn').onclick = checkNum;

function checkNum() {
    let num = inputNum.value;
    num = parseInt(num);
    console.log(num);
    if (isNaN(num)) {
        alert('Введите число!');
    } else {
        if (num == randomNum) {
            alert("Вы угадали!");
            location.reload();
        } else {
            alert('Введенное число больше или меньше загаданного');
        }
    }
}

// 2

let btnPush = document.querySelector('#not-push');
let counter = 3;
document.querySelector('#counter').innerHTML = counter;


btnPush.onclick = notPush;

function notPush() {
    btnPush.innerHTML = 'Не нажимать';
    counter -= 1;
    document.querySelector('#counter').innerHTML = counter;
    if (counter == 0) {
        btnPush.style.display = 'none';
    }
}

// 3

let numInput1 = document.querySelector('#num-input1'),
    numInput2 = document.querySelector('#num-input2'),
    numOutBtn = document.querySelector('#num-out-btn'),
    numOut = document.querySelector('#num-out');

numOutBtn.onclick = maxNumOut;

function maxNumOut() {
    console.log(Math.max(numInput1.value, numInput2.value));
}

// 4

let horoscopeInputDay = document.querySelector('#horoscope-input-day'),
    horoscopeInputMounth = document.querySelector('#horoscope-input-mounth'),
    horoscopeBtn = document.querySelector('#horoscope-btn'),
    horoscopeOut = document.querySelector('#horoscope-out');

horoscopeBtn.onclick = function() {
    let d = parseInt(horoscopeInputDay.value),
        m = parseInt(horoscopeInputMounth.value);

    if ((m == 1 && d >= 21) || (m == 2 && d <= 18)) {
        horoscopeOut.innerHTML = 'Водолей';
    } else if ((m == 2 && d >= 19) || (m == 3 && d <= 20)) {
        horoscopeOut.innerHTML = 'Рыбы';
    } else if ((m == 3 && d >= 21) || (m == 4 && d <= 20)) {
        horoscopeOut.innerHTML = 'Овен';
    } else if ((m == 4 && d >= 21) || (m == 5 && d <= 21)) {
        horoscopeOut.innerHTML = 'Телец';
    } else if ((m == 5 && d >= 22) || (m == 6 && d <= 21)) {
        horoscopeOut.innerHTML = 'Близнецы';
    } else if ((m == 6 && d >= 22) || (m == 7 && d <= 22)) {
        horoscopeOut.innerHTML = 'Рак';
    } else if ((m == 7 && d >= 23) || (m == 8 && d <= 23)) {
        horoscopeOut.innerHTML = 'Лев';
    } else if ((m == 8 && d >= 24) || (m == 9 && d <= 22)) {
        horoscopeOut.innerHTML = 'Девы';
    } else if ((m == 9 && d >= 23) || (m == 10 && d <= 23)) {
        horoscopeOut.innerHTML = 'Весы';
    } else if ((m == 10 && d >= 24) || (m == 11 && d <= 22)) {
        horoscopeOut.innerHTML = 'Скорпион';
    } else if ((m == 11 && d >= 23) || (m == 12 && d <= 21)) {
        horoscopeOut.innerHTML = 'Стрелец';
    } else if ((m == 12 && d >= 22) || (m == 1 && d <=20)) {
        horoscopeOut.innerHTML = 'Козерог';
    } else {
        horoscopeOut.innerHTML = 'Введите корректные данные!';
    }
}

// 5

let yearOutput = document.querySelector('#china-year'),
    yearBtn = document.querySelector('#year-btn');

yearBtn.onclick = function() {
    let yearInput = document.querySelector('#year-input').value;

    if ((yearInput == 0) || (yearInput % 12 == 0)) {
        yearOutput.innerHTML = 'Обезбяна';
    } else if ((yearInput == 1) || (yearInput % 12 == 1)) {
        yearOutput.innerHTML = 'Петух';
    } else if ((yearInput == 2) || (yearInput % 12 == 2)) {
        yearOutput.innerHTML = 'Собака';
    } else if ((yearInput == 3) || (yearInput % 12 == 3)) {
        yearOutput.innerHTML = 'Свинья';
    } else if ((yearInput == 4) || (yearInput % 12 == 4)) {
        yearOutput.innerHTML = 'Крыса';
    } else if ((yearInput == 5) || (yearInput % 12 == 5)) {
        yearOutput.innerHTML = 'Бык';
    } else if ((yearInput == 6) || (yearInput % 12 == 6)) {
        yearOutput.innerHTML = 'Тигр';
    } else if ((yearInput == 7) || (yearInput % 12 == 7)) {
        yearOutput.innerHTML = 'Кролик';
    } else if ((yearInput == 8) || (yearInput % 12 == 8)) {
        yearOutput.innerHTML = 'Дракон';
    } else if ((yearInput == 9) || (yearInput % 12 == 9)) {
        yearOutput.innerHTML = 'Змея';
    } else if ((yearInput == 10) || (yearInput % 12 == 10)) {
        yearOutput.innerHTML = 'Лошадь';
    } else if ((yearInput == 11) || (yearInput % 12 == 11)) {
        yearOutput.innerHTML = 'Коза';
    }
}