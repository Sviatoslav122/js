// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let courses = [['java'], ['html'], ['css'], ['javascript'], ['node.js'], ['git'], ['react'], ['angular'], ['aws'], ['doker'],];

console.log(courses[0]);
console.log(courses[1]);
console.log(courses[2]);
console.log(courses[3]);
console.log(courses[4]);
console.log(courses[5]);
console.log(courses[6]);
console.log(courses[7]);
console.log(courses[8]);
console.log(courses[9]);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book =
    {
        tiitle: '1984',
        pageCount: 312,
        genre: 'Romans'
    }
console.log(book);
let book1 =
    {
        tiitle: ' Murder on the Orient Express',
        pageCount: 256,
        genre: 'Crime novel'
    }
console.log(book1);
let book2 =
    {
        tiitle: 'Digital Fortress',
        pageCount: 416,
        genre: 'Science fiction novel'
    }


console.log(book2);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,genre, authors.ageCount, g Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let authors =

    {
        authors: {
            age: 58,
            name: 'Daniel Gerhard Brown',
        },
        tiitle: ' Digital Fortress',
        pageCount: 416,
        genre: 'Science fiction novel',
    }
    console.log(authors);

    let authors1 =
        {
        authors: {
            age: ' died 21 stycznia 1950',
            name: 'George Orwell',
        },
        tiitle: ' 1984',
        pageCount: 312,
        genre: 'Romans',
    }
        console.log(authors1);

    let authors2 =
        {
        authors: {
            age: 'died 12 January 1976 (aged 85)',
            name: 'Agatha Christie',
        },
        tiitle: ' Murder on the Orient Express',
        pageCount: 256,
        genre: 'Crime novel',
    }
console.log(authors2);



// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
//
let users = [
    {name: 'vasya', username: 31, password: 45643},
    {name: 'petya', username: 30, password: 565},
    {name: 'kolya', username: 29, password: 531},
    {name: 'olya', username: 28, password: 566546},
    {name: 'max', username: 30, password: 'hjg4jhgk'},
    {name: 'anya', username: 31, password: '452424hhk'},
    {name: 'oleg', username: 28, password: 45425},
    {name: 'andrey', username: 29, password: 45},
    {name: 'masha', username: 30, password: 454},
    {name: 'olya', username: 31, password: 523},
    {name: 'max', username: 31, password: 253}
];
console.log(users);
let user0 = users[0];
console.log(user0.password);
let user1 = users[1];
console.log(user1.password);
let user2 = users[2];
console.log(user2.password);
let user3 = users[3];
console.log(user3.password);
let user4 = users[4];
console.log(user4.password);
let user5 = users[5];
console.log(user5.password);
let user6 = users[6];
console.log(user6.password);
let user7 = users[7];
console.log(user7.password);
let user8 = users[8];
console.log(user8.password);
let user9 = users[9];
console.log(user9.password);

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 58;
let a = [1][0][-3];
if(!(x !== 0 && a)){

    console.log(true)
}else
    console.log(fals)
// if(x === 0 && a)
// {   console.log(fals)
// }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 33;
if(time >= 0 && time <=14) {
    time = '1 Part'
    console.log(time);
}
if(time >= 15 && time <=30) {
    time ='3 Part'
    console.log(time);

}
if(time >=31  && time <=45) {
    time ='3 Part'
    console.log(time);

}
if(time >=45 && time <=59) {
    time ='4 Part'
    console.log(time);

}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 20;
if(day >= 0 && day <=10){
    day = '1 dekada';
    console.log(day);
}
if(day >= 11 && day <=20){
    day = '2 dekada';
    console.log(day);
}
if(day >= 21 && day <=31){
    day = '3 dekada';
    console.log(day);
}
// ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let week = prompt('write day of the week');
switch (week) {
    case 'monday':
        document.write('<h1>  monday  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, voluptate.</h1>');
        break;
    case 'tuesday':
        document.write('<h1>  tuesday  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, voluptate.</h1>');
        break;
    case 'wednesday':
        document.write('<h1>  wednesday Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, voluptate.</h1>');
        break;
    case 'thursday':
        document.write('<h1>  thursday  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, voluptate.</h1>');
        break;
    case 'friday':
        document.write('<h1> friday  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, voluptate.</h1>');
        break;
    case 'saturday':
        document.write( 'saturday  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, voluptate.');
        break;
    case 'sunday':
        document.write(' sunday  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, voluptate.');
        break;
    default :
        document.write('EROR');
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let num = parseInt(prompt('enter number'))
let num2 = parseInt(prompt('enter the second number' ));
if(num < num2 ){
    console.log(num2);
}
if(num === num2){
    console.log(num , num2);
}
if (num > num2){
    console.log(num);
}





//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
//
//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".