// let a = 7;

// if (a > 0 && a <= 20) {
//     console.log('1');
// } else if (a > 20 && a <= 30) {
//     console.log("2");
// } else if (a > 30 && a <= 40) {
//     console.log('3')
// } else {
//     console.log('Такой квартиры нет')
// }

let r = Math.random();
r = r * 10;
r = Math.round(r);

let userNum = document.querySelector('#user-num');
document.querySelector('#btn').onclick = checkNum;

function checkNum() {
    let num = userNum.value;
    num = parseInt(num);
    console.log(num);
    if (!isNaN(num)) {
        if (num == r) {
            alert('Выугадали');
            location.reload();
        } else {
            alert('Поробуйте ещё');
        }
    } else {
        alert('Введите корректное число');
    }
}