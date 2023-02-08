// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<div>
        <p>Ten</p>
    </div>`);
}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true},
    {name: 'max', age: 31, status: true},
    {name: 'max', age: 31, status: true},
    {name: 'max', age: 31, status: true},
    {name: 'max', age: 31, status: true},
    {name: 'max', age: 31, status: true},
    {name: 'max', age: 31, status: true},
];
for (let i = 0; i < 10; i++) {
    const user = users[i];
    document.write(`<div> Text ${user.name}  ${i} </div>`)

}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині

let i = 0;
while (i < 20) {
    document.write(`<h1>twenty</h1>`)
    i++;

}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let imena = [
    {name : 'Shoo'},
    {name : 'Shoo'},
    {name : 'Shoo'},
    {name : 'Shoo'},
    {name : 'Shoo'},
    {name : 'Shoo'},
    {name : 'Shoo'},
    {name : 'Shoo'},
    {name : 'Shoo'},
    {name : 'Shoo'},
    {name : 'Shoo'},
    {name : 'Shoo'},
    {name : 'Shoo'},
    {name : 'Shoo'},
    {name : 'Shoo'},
    {name : 'Shoo'},
    {name : 'Shoo'},
    {name : 'Shoo'},
    {name : 'Shoo'},
    {name : 'Shoo'},
    {name : 'Shoo'}

];
let i1 = 0;
while (i1 < 20) {
    let userText = imena[i1];
    document.write(`<h1>text  ${userText.name} ${i1} </h1>`);
    i1++;

}
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

for (const listOfItem of listOfItems) {
    document.write(`<ul>`)
        document.write(`<li>${listOfItem}</li>`)


    document.write(`</ul>`)

    
}


// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>


// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву


// ------------------------------------------------------------------------------
// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

for (let product of products) {

    document.write(`<div class="product-card">
                            <h3 class="Price">${product.title} - ${product.price} UAH</h3>
                            <img src="${product.image}" alt="">
                      </div>`);
}

// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
//
//
//
// --------------------
// є масив
let users5 = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
]
for (i = 0 ; i < users5.length ; i++){
  const users5Element  = users5[i];
    if (users5Element.status === true){
        for (const users5ElementKey in users5Element) {
            document.write(`<div>`)
            document.write(`${users5ElementKey} - ${users5Element[users5ElementKey]}`)
            document.write(`</div>`)
        }

    }
}
document.write("----------------------------------------------------")
for (i = 0 ; i < users5.length ; i++){
    const users5Elementfalse  = users5[i];
    if (users5Elementfalse.status === false){
        for (const users5ElementKey2 in users5Elementfalse) {
            document.write(`<div>`)
            document.write(`${users5ElementKey2} - ${users5Elementfalse[users5ElementKey2]}`)
            document.write(`</div>`)
        }

    }
}
document.write("----------------------------------------------------")
for (i = 0 ; i < users5.length ; i++){
    const chyslo  = users5[i];
    if (chyslo.age > 30){
        for (const chysloElement of chyslo) {
            document.write(`<div>`)
            document.write(`${chysloElement} - ${chyslo[chysloElement]}`)
            document.write(`</div>`)
        }



    }
}
// console.log(`${users2Element.name}`);

//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші а 30 років