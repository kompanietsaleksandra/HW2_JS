function isNumber(value, anyFunction) {
    if (!parseInt(value)) {
        alert(`Введите цифры`);
        anyFunction();
    }
}

//1
function getValue() {
    let x = prompt("Enter a number", "5");
    isNumber(x, getValue)
    x = +x;
    x === 0 ? alert('число есть ноль') : x > 0 ? alert('Больше нуля') : alert('Меньше нуля');
}
getValue();

//2
function findMinValue() {
    let value1 = prompt("Введите цифру", "5");
    let value2 = prompt("Введите цифру", "5");
    let value3 = prompt("Введите цифру", "5");
    isNumber(value1, findMinValue);
    isNumber(value2, findMinValue);
    isNumber(value3, findMinValue);
    if (value1 < value2 && value1 < value3) {
        alert( `value1 - минимальное число` );
    } else if (value2 < value1 && value2 < value3) {
        alert( `value2 - минимальное число` );
    } else if (value3 < value2 && value3 <  value1) {
        alert( `value3 - минимальное число` );
    }
}
findMinValue();

//3
function getMoney() {
    let a = prompt("Your money", "500");
    let b = prompt("Your friend`s money", "500");
    isNumber(a, getMoney);
    isNumber(b, getMoney);
    a = +a;
    b = +b;
    a + b > 1000 ? alert('You can fly to Majorka') : alert('You can drink a beer');
}
getMoney();

//4
function sendMessageByAge() {
    let age = prompt("Your age", "25");
    isNumber(age, sendMessageByAge);
    if ( age >= 20 && age < 27) {
        alert(`Выслать повестку`);
    }
}
sendMessageByAge();

//5
function checkBusNubmer() {
    let busNumber = prompt("Enter bus number", "255");
    isNumber(busNumber, checkBusNubmer);
    busNumber = parseInt(busNumber, 10);
    busNumber === 7 || busNumber === 225 || busNumber === 255 ?  alert(`Вы едите домой`) :  alert(`Ожидайте`);
}
checkBusNubmer();

//6
function checkDate() {
    let day = prompt("Today`s day", "Monday");
    day = day.toLowerCase();
    if (day !== 'saturday' && day !== 'sunday' ){
        alert('Пора идти на работу');
    }
}
checkDate();

//7
function findMinMaxValue() {
    let x = prompt("Введите цифру от -20 до 20", "5");
    let y = prompt("Введите цифру от -20 до 20", "5");
    isNumber(x, findMinMaxValue);
    isNumber(y, findMinMaxValue);
    if (x >= -20 && x <= 20 && y >= -20 && y <= 20) {
        if (x <= 1 && (y >=3 || y < 0)) {
            alert("Сумма " + (Number(x) + Number(y)));
        }
        else {
            alert('Неверно!');
        }
    }
}
findMinMaxValue();

//8
function findValue() {
    let x = prompt("Введите цифру", "5");
    let y = prompt("Введите цифру", "5");
    isNumber(x, findValue);
    isNumber(y, findValue);
    if (x > 2 && x < 11 && y >= 6 && y < 14) {
        alert(Number(x) + 2);
    }
    else {
        alert(Number(x) + 5);
    }
}
findValue();

//9
function username() {
    let j = prompt("Введите имя", "Констанция");
    j === null || j === '' ? alert(`Вы нажали 'отмена' или оставили пустую строку`) : alert(`Здравствуй, ` + j);
}
username();

//10
function differentValues() {
    let greeting = {
        ru: 'Привет',
        en: 'Hello',
        de: 'Guten Tag'
    }
    let lang = prompt("Введите начение 'ru', 'en', или 'de'");
    lang = lang.toLowerCase();
    if (lang !== 'ru' && lang !== 'en' && lang !=='de') {
        alert('Неверно!');
    } else if (lang === 'ru') {
        alert(greeting.ru);
    } else if (lang === 'en') {
        alert(greeting.en);
    }
    else if (lang === 'de') {
        alert(greeting.de);
    }
}
differentValues();

//10 (switch)
function differentValuesSwitch() {
    let greeting = {
        ru: 'Привет',
        en: 'Hello',
        de: 'Guten Tag'
    }
    let lang = prompt("Введите начение 'ru', 'en', или 'de'");
    lang = lang.toLowerCase();
    switch (lang) {
        case 'ru':
            alert( greeting.ru );
            break;
        case 'en':
            alert( greeting.en );
            break;
        case 'de':
            alert( greeting.de );
            break;
        default:
            alert( "Нет таких значений" );
    }
}
differentValuesSwitch();

//11
let month = new Date();
month = month.getMonth();
const listMount = {
    0: {
        mouth: 'Январь',
        poraGoda: 'Зима'
    },
    1: {
        mouth: 'Февраль',
        poraGoda: 'Зима'
    },
    2: {
        mouth: 'Март',
        poraGoda: 'Весна'
    },
    3: {
        mouth: 'Апрель',
        poraGoda: 'Весна'
    },
    4: {
        mouth: 'Май',
        poraGoda: 'Весна'
    },
    5: {
        mouth: 'Июнь',
        poraGoda: 'Лето'
    },
    6: {
        mouth: 'Июль',
        poraGoda: 'Лето'
    },
    7: {
        mouth: 'Август',
        poraGoda: 'Лето'
    },
    8: {
        mouth: 'Сентябрь',
        poraGoda: 'Осень'
    },
    9: {
        mouth: 'Октябрь',
        poraGoda: 'Осень'
    },
    10: {
        mouth: 'Ноябрь',
        poraGoda: 'Осень'
    },
    11: {
        mouth: 'Декабрь',
        poraGoda: 'Зима'
    }
};
alert(`Сейчас месяц - ${listMount[month].mouth} и пора года - ${listMount[month].poraGoda}`);

//12
const listDay = {
    0: {
        en: 'Sunday',
        ru: 'Воскресенье',
    },
    1: {
        en: 'Monday',
        ru: 'Понедельник',
    },
    2: {
        en: 'Tuesday',
        ru: 'Вторник',
    },
    3: {
        en: 'Wednesday',
        ru: 'Среда',
    },
    4: {
        en: 'Thursday',
        ru: 'Четверг',
    },
    5: {
        en: 'Friday',
        ru: 'Пятница',
    },
    6: {
        en: 'Saturday',
        ru: 'Суббота',
    }
};
let lang = prompt("Введите значение 'ru' или 'en'", "en");
let day = prompt("Введите цифру от '0' до '6'", "3");
day = parseInt(day, 10);
lang = lang.toLowerCase();
alert(`Сейчас день недели - ${listDay[day][lang]}`);




//циклы
// (1)
let str = '';
for(let i=0; i<=5; i++){
    let tempStr = ".#";
    if(i === 5) {
        tempStr = ".";
        str = str.concat(tempStr);
        break;
    }
    str = str.concat(tempStr);
}
alert(str);

//2
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(Math.pow(i, 2));
    }
}

//3
let name = prompt("Введите имя", "Констанция");
const array = [
    "Happy birthday to you",
    "Happy birthday to you",
    "Happy birthday dear " + name,
    "Happy birthday to you"
];
let privetstvie = '';
array.forEach(function(i) {
    privetstvie = privetstvie.concat(i, '\n');
});
console.log(privetstvie);

//4
function checkAdmin() {
    let isAdmin = confirm("Вы - администратор?");
    while (isAdmin === false ) {
        checkAdmin();
        break;
    }
}
checkAdmin();

//5
function oddValue() {
    let numb = prompt("Напишите число", "5");
    if (!parseInt(numb)) {
        return alert(`Введите цифры`);
    }
    if (numb <= 0) {
        return alert('Введите значение больше 0');
    } else {
        let sum = 0;
        for (let i = 0; i <= numb; i++) {
            if (i % 2 !== 0) {
                sum = sum + i;
                console.log(sum);
            }
        }
        alert(sum);
    }
}
oddValue();

//6
let i = 0;
let randomValue = 0;
while (true) {
    randomValue = Math.random();
    if (randomValue > 0.9) break;
    i ++;
}
alert( 'Итераций: ' + i + ' Прервало цикл число: ' + randomValue);

//7
let result = ' x   ';

function buff(val){
    let buff = '';
    let pad = 4 - val;
    while( pad-- > 0 )
        buff += ' ';
    return buff;
}

for (let i = 0; i < 11; i++) {

    for (let j = 0; j < 11; j++) {

        if(i == 0 && j > 0){
            result += '[' + j + ']' + buff((j+'').length+2);
        }
        else if(j == 0 && i>0){
            result += '[' + i + ']';
        }
        else if(i>0 && j>0){
            result += buff((i*j+'').length ) + i*j;
        }
    }
    result += '\n'
}

//8
let i;
let fib = [];
fib[0] = 0;
fib[1] = 1;
for (i = 2; i <= 10; fib[i] = fib[i - 2] + fib[i - 1],  console.log(fib[i]), i++) {
}

//9
let sum = 0;
let avr = 0;
let i = 0;
while (true) {

    let value = +prompt("Введите число", '');

    if (!value) break; // (*)
    i ++;

    sum += value;
    avr = sum / i;

}
alert( 'Сумма: ' + sum + ' Среднее арифмитическое: ' + avr + ' количество введенных чисел: ' + i);

//10
function setPassword() {
    let k = 'пароль';
    while (true) {
        let pasw = prompt("Введите пароль", "password1");
        if (pasw === k) {
            alert('Вы успешно авторизованы');
            break;
        } else if (pasw === null) {
            const conf = confirm('Вы уверены, что хотите отменить авторизацию?');
            if(conf) {
                alert('Вы отменили авторизацию');
                break;
            } else {
                setPassword();
                break;
            }
        }
    }
}
setPassword();
//11
for (let i = 0; i <= 50; i++) {
    console.log(i);
    if(i % 3 === 0) {
        console.log('Fiz');
    }
    if(i % 5 === 0) {
        console.log('Buzz');
    }
    if(i % 3 === 0 && i % 5  === 0) {
        console.log('FizzBuzz');
    }
}