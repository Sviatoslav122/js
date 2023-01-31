// Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log

let hello = 'hello';
console.log(hello);
let owu = 'owu';
console.log(owu);
let com = 'com';
console.log(com);
let ua = 'ua';
console.log(ua);
let one = 1;
console.log(one);
let ten = 10;
console.log(ten);
const nnn = -999;
console.log(nnn);
let abc = 123;
console.log(abc);
const PI = 3.14;
console.log(PI);
const D = 2.7;
console.log(D);
const age = 16;
console.log(age);
let tru = true;
console.log(tru);
let fals = false;
console.log(fals);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName = 'Sviatoslav';
let middleName = 'Papsyh';
let lastName = 'Ivanovych';
console.log(`${firstName} ${middleName} ${lastName}`)
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// let a = 100; let b = '100'; let c = true;
let a = 100;
let b = '100';
let c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

{
    let name = prompt('Name');
    let lastname = prompt('lastname');
    let age = prompt('age')
    console.log(`${name} ${lastname}`);
    console.log(parseFloat(age));
}