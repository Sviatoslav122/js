// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id,name,surname,email,phone) {
this.id = id;
this.name = name;
this.surname = surname;
this.email = email;
this.phone = phone;
}
let user1 = new User(1 , 'Ivan' , 'TARA', 'TARAivan@gamil.com' , 7901677073);
console.log(user1);


// створити пустий масив, наповнити його 10 об'єктами new User(....)

let users = [];
for (let i = 0; i < 10; i++) {
    users.push(new User(i+2 , `${user1.name}`));
}

console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filteredUsers = users.filter(user => user.id % 2 === 0);
console.log(filteredUsers);

//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let filtrUpUsers = users.sort();
console.log(filtrUpUsers);
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }

}

console.log(Client);

// створити пустий масив, наповнити його 10 об'єктами Client
let arClient = [
new Client(2 , 'Sviat' ,'TAL' , 'tDDD@gmail.com' , 887686 , ['appple' , 'woda' , 'beer']),
new Client(4 , 'Sviat' ,'TAL' , 'tDDD@gmail.com' , 887686 , ['appple' , 'cherry' , 'woda' , 'beer','cherry' ]),
new Client(6 , 'Sviat' ,'TAL' , 'tDDD@gmail.com' , 887686 , ['appple' , 'beer']),
new Client(7 , 'Sviat' ,'TAL' , 'tDDD@gmail.com' , 887686 , ['cherry' , 'woda' , 'beer']),
new Client(8 , 'Sviat' ,'TAL' , 'tDDD@gmail.com' , 887686 , ['appple' , 'cherry' , 'woda' , 'beer']),
new Client(18 , 'Sviat' ,'TAL' , 'tDDD@gmail.com' , 887686 , ['appple' , 'cherry' , 'woda' , 'beer']),
new Client(123, 'Sviat' ,'TAL' , 'tDDD@gmail.com' , 887686 , ['appple' , 'cherry' , 'woda' , 'beer']),
new Client(3 , 'Sviat' ,'TAL' , 'tDDD@gmail.com' , 887686 , ['cherry' , 'woda' , 'beer']),
new Client(1 , 'Sviat' ,'TAL' , 'tDDD@gmail.com' , 887686 , ['woda' , 'beer']),
new Client(11 , 'Sviat' ,'TAL' , 'tDDD@gmail.com' , 887686 , ['appple' , 'cherry' , 'woda' , 'beer','cherry','cherry']),
]
console.log(arClient);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let arClientOrder = arClient.sort((a,b) => a.order.length - b.order.length);
console.log(arClientOrder);
//
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

function Car(model, manufacturer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    this.drive = function () {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    this.changeYear = function(newValue) {
        this.year = newValue;
    };    this.info = function () {
        console.log(`Модель: ${this.model}`);
        console.log(`Виробник: ${this.manufacturer}`);
        console.log(`Рік випуску: ${this.year}`);
        console.log(`Максимальна швидкість: ${this.maxSpeed}`);
        console.log(`Об'єм двигуна: ${this.engineVolume}`);
    }
    this.increaseMaxSpeed = function(newSpeed) {
        this.maxSpeed += newSpeed;
    };
    this.changeYear = function(newValue) {
        this.year = newValue;
    };
    this.addDriver = function(driver) {
        this.driver = driver;

    };
}
new Car('X5',  'BMW', 2015 , 366, 3.0);
console.log(Car);
// -- info () - яка виводить всю інформацію про автомобіль [в форматі `назва поля - значення поля`

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed






    // / -- changeYear (newValue) - змінює рік випуску на значення newValue




// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

//

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:


// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`




// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed



// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку