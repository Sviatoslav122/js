// Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let upword = 'hello world';
let upword2 = 'lorem ipsum';
let upword3 = 'javascript is cool';
console.log(upword.length, upword2.length, upword3.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let midword = 'hello world';
let midword2 = 'lorem ipsum';
let midword3 = 'javascript is cool';
console.log(midword.toUpperCase(), '--', midword2.toUpperCase(), '--', midword3.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let botword = 'hello world';
let botword2 = 'lorem ipsum';
let botword3 = 'javascript is cool';
console.log(botword.toLowerCase(), '--', botword2.toLowerCase(), '--', botword3.toLowerCase());
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
let strin = ' dirty string   '
console.log(strin.substring(1, 13));

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні'

// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

function stringToarray(str) {
    return str.split(' ');
}

const str = 'Ревуть воли як ясла повні';
const words = stringToarray(str);
console.log(words);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let numlokal = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
const strings = numlokal.map((number) => number.toString());

console.log(strings);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
function sortNums(nums, direction) {
    if (direction === 'ascending') {
        return nums.sort((a, b) => a - b);
    }
    if (direction === 'descending') {
        return nums.sort((a, b) => b - a);
    }
}

let nums = [11, 21, 3];
console.log(sortNums(nums, 'ascending')); // [3, 11, 21]
console.log(sortNums(nums, 'descending')); // [21, 11, 3]


// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let sort = coursesAndDurationArray.sort((a, b) => {
    return a.monthDuration - b.monthDuration;
});
console.log(sort);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filteredUsers = coursesAndDurationArray.filter(value => value.monthDuration > 4);
console.log(filteredUsers);
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let typ = coursesAndDurationArray.map((value, index) => {
    return {
        id: index + 1, title: value.title, monthDuration: value.monthDuration
    };
})
console.log(typ);
// =========================
//     описати колоду карт (від 6 до туза без джокерів)





//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
let koloda = [
    {cardSuit: 'hearts', color:'red', value: '6'},
    {cardSuit: 'hearts', color:'red', value: '7'},
    {cardSuit: 'hearts', color:'red', value: '8'},
    {cardSuit: 'hearts', color:'red', value: '9'},
    {cardSuit: 'hearts', color:'red', value: '10'},
    {cardSuit: 'hearts', color:'red', value: 'jack'},
    {cardSuit: 'hearts', color:'red', value: 'queen'},
    {cardSuit: 'hearts', color:'red', value: 'king'},
    {cardSuit: 'hearts', color:'red', value: 'As'},
    {cardSuit: 'spades', color:'black', value: '6'},
    {cardSuit: 'spades', color:'black', value: '7'},
    {cardSuit: 'spades', color:'black', value: '8'},
    {cardSuit: 'spades', color:'black', value: '9'},
    {cardSuit: 'spades', color:'black', value: '10'},
    {cardSuit: 'spades', color:'black', value: 'jack'},
    {cardSuit: 'spades', color:'black', value: 'queen'},
    {cardSuit: 'spades', color:'black', value: 'king'},
    {cardSuit: 'spades', color:'black', value: 'As'},
    {cardSuit: 'diamonds', color:'red', value: '6'},
    {cardSuit: 'diamonds', color:'red', value: '7'},
    {cardSuit: 'diamonds', color:'red', value: '8'},
    {cardSuit: 'diamonds', color:'red', value: '9'},
    {cardSuit: 'diamonds', color:'red', value: '10'},
    {cardSuit: 'diamonds', color:'red', value: 'jack'},
    {cardSuit: 'diamonds', color:'red', value: 'queen'},
    {cardSuit: 'diamonds', color:'red', value: 'king'},
    {cardSuit: 'diamonds', color:'red', value: 'As'},
    {cardSuit: 'clubs', color:'black', value: '6'},
    {cardSuit: 'clubs', color:'black', value: '7'},
    {cardSuit: 'clubs', color:'black', value: '8'},
    {cardSuit: 'clubs', color:'black', value: '9'},
    {cardSuit: 'clubs', color:'black', value: '10'},
    {cardSuit: 'clubs', color:'black', value: 'jack'},
    {cardSuit: 'clubs', color:'black', value: 'queen'},
    {cardSuit: 'clubs', color:'black', value: 'king'},
    {cardSuit: 'clubs', color:'black', value: 'As'},
];
// - знайти піковий туз

const targetCard = { cardSuit: 'spades', value: 'As' };

const foundCard = koloda.find(card => card.cardSuit === targetCard.cardSuit && card.value === targetCard.value);

console.log(foundCard);

// - всі шістки
let filteredCard = koloda.filter(value => value.value === '6');
 console.log(filteredCard);

// - всі червоні карти
let filteredColor = koloda.filter(value => value.color === 'red');
console.log(filteredColor);

// - всі буби
let filteredSuit = koloda.filter(value => value.cardSuit === 'diamonds');
console.log(filteredSuit);

// - всі трефи від 9 та більше

const filtrClubs = koloda.filter(card => card.cardSuit === 'clubs' && !['6', '7', '8'].includes(card.value));

console.log(filtrClubs);


// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let cardsBySuit = koloda.reduce((colo, card) => {
    const suit = card.cardSuit;
    if (!colo[suit]) {
        colo[suit] = [];
    }
    colo[suit].push(card);
    return colo;
}, { spades: [], diamonds: [], hearts: [], clubs: [] });

console.log(cardsBySuit);
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// --написати пошук всіх об'єктів, в який в modules є sass
let modsass = coursesArray.filter(course => course.modules.indexOf('sass') !== -1);
console.log(modsass);


// --написати пошук всіх об'єктів, в який в modules є docker
let moddock = coursesArray.filter(course => course.modules.indexOf('docker') !== -1);
console.log(moddock);