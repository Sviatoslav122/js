// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і бet
let square = (a, b ) => a * b
console.log(square(23, 30))
// - створити функцію яка обчислює та повертає площу кола з радіусом r


let piRow = ( pi , a , b) => pi * a * b
const pi = 3.14
console.log(piRow(pi , 5 ,  4))
// створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let clindr =  ( h , r) => ( 2 * pi * r * h ) + 2 * pi * (r * h)
console.log(clindr(4 , 5 ))

// створити функцію яка приймає масив та виводить кожен його елемент


let elements = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];
elements.map(element => element.length)

console.log(elements)
// створити функцію яка створює параграф з текстом. Текст задати через аргумент
let paragraftext = (text) => document.write(`<p> ${text}</p>`)
paragraftext('rrree')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий/

let kontent = (arguments) => {document.write(`<ul>`)
 document.write(`<li>${arguments}</li>`)
document.write(`<li>${arguments} </li>`)
document.write(`<li>${arguments}</li>`)
    document.write(`</ul>`)}
kontent('reqqqqqqqq')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let kontent2 = (arguments2 , counter) => {
    document.write(`<ul>`)
    for ( let i = 0 ; i < counter ; i++)
        document.write(`<li>${arguments2}</li>`)
        document.write(`</ul>`)}
kontent2('reqqqqqqqq' , 5)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function licriate(ara) {
    document.write(`<ul>`)
    for (let i = 0 ; i < ara.length ; i++) {
        document.write(`<li> ${ara[i]} </li>`)
    }
    document.write(`</ul>`)
}
    licriate([5 ,5 ,56 ,58 ,'frrss',true , false]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.


let imena = [
    {id : 1 ,name: 'ivan', age: 56},
    {id : 1 ,name: 'ivan', age: 56},
    {id : 1, name: 'yara' ,age: 56},
]
function masyw(arrre) {
    for (const item of arrre) {
        document.write(`<div>id: ${item.id} name: ${item.name} age: ${item.age}</div>`)

    }
        
    }
masyw(imena)

// створити функцію яка повертає найменьше число з масиву
let numera = (chyslo) => {
    let chyslo1 = chyslo[0]

    for (let i = 0; i < chyslo.length; i++) {

    }
return chyslo1;
}

document.write(numera([55,5566,-56,68]));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let sum = (ar)=> {
    let num = 0;
    for (const arElement of ar) {
        num += arElement;

    }
    return num;
}

console.log(sum([1,2,10]))
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr , index1 , index2) {
let zmina = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = zmina ;
    return arr;
}

console.log(swap([11,22,33,44],0,1 ))



// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)

// // Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(sumUAH,currencyValues,exchangeCurrency) {
    for (const sumUAHElement of currencyValues){
        if (sumUAHElement.currency === exchangeCurrency) {
            return sumUAH / sumUAHElement.value;
        }

    }
}


console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'))

