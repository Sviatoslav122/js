// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
console.log(document.forms['person']);

// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
const numberElement = document.getElementById("number");
let count = parseInt(localStorage.getItem("updateCount")) || 0;
count++;
localStorage.setItem("updateCount", count);
numberElement.innerText = count;
// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
// =========================
let sessions = JSON.parse(localStorage.getItem('sessions')) || [];
sessions.push({
    date: new Date().toLocaleString()
});
localStorage.setItem('sessions', JSON.stringify(sessions));

//     зробити масив на 100 об'єктів та дві кнопки prev next
const players = [
    {name: 'Lionel Messi', club: 'Paris Saint-Germain', position: 'Forward'},
    {name: 'Cristiano Ronaldo', club: 'Manchester United', position: 'Forward'},
    {name: 'Neymar Jr', club: 'Paris Saint-Germain', position: 'Forward'},
    {name: 'Kylian Mbappe', club: 'Paris Saint-Germain', position: 'Forward'},
    {name: 'Kevin De Bruyne', club: 'Manchester City', position: 'Midfielder'},
    {name: 'Robert Lewandowski', club: 'Bayern Munich', position: 'Forward'}, {
        name: 'Lionel Messi',
        club: 'Paris Saint-Germain',
        position: 'Forward'
    },
    {name: 'Cristiano Ronaldo', club: 'Manchester United', position: 'Forward'},
    {name: 'Neymar Jr', club: 'Paris Saint-Germain', position: 'Forward'},
    {name: 'Kylian Mbappe', club: 'Paris Saint-Germain', position: 'Forward'},
    {name: 'Kevin De Bruyne', club: 'Manchester City', position: 'Midfielder'},
    {name: 'Robert Lewandowski', club: 'Bayern Munich', position: 'Forward'}, {
        name: 'Lionel Messi',
        club: 'Paris Saint-Germain',
        position: 'Forward'
    },
    {name: 'Cristiano Ronaldo', club: 'Manchester United', position: 'Forward'},
    {name: 'Neymar Jr', club: 'Paris Saint-Germain', position: 'Forward'},
    {name: 'Kylian Mbappe', club: 'Paris Saint-Germain', position: 'Forward'},
    {name: 'Kevin De Bruyne', club: 'Manchester City', position: 'Midfielder'},
    {name: 'Robert Lewandowski', club: 'Bayern Munich', position: 'Forward'}, {
        name: 'Lionel Messi',
        club: 'Paris Saint-Germain',
        position: 'Forward'
    },
    {name: 'Cristiano Ronaldo', club: 'Manchester United', position: 'Forward'},
    {name: 'Neymar Jr', club: 'Paris Saint-Germain', position: 'Forward'},
    {name: 'Kylian Mbappe', club: 'Paris Saint-Germain', position: 'Forward'},
    {name: 'Kevin De Bruyne', club: 'Manchester City', position: 'Midfielder'},
    {name: 'Robert Lewandowski', club: 'Bayern Munich', position: 'Forward'}, {
        name: 'Lionel Messi',
        club: 'Paris Saint-Germain',
        position: 'Forward'
    },
    {name: 'Cristiano Ronaldo', club: 'Manchester United', position: 'Forward'},
    {name: 'Neymar Jr', club: 'Paris Saint-Germain', position: 'Forward'},
    {name: 'Kylian Mbappe', club: 'Paris Saint-Germain', position: 'Forward'},
    {name: 'Kevin De Bruyne', club: 'Manchester City', position: 'Midfielder'},
    {name: 'Robert Lewandowski', club: 'Bayern Munich', position: 'Forward'}, {
        name: 'Lionel Messi',
        club: 'Paris Saint-Germain',
        position: 'Forward'
    },
    {name: 'Cristiano Ronaldo', club: 'Manchester United', position: 'Forward'},
    {name: 'Neymar Jr', club: 'Paris Saint-Germain', position: 'Forward'},
    {name: 'Kylian Mbappe', club: 'Paris Saint-Germain', position: 'Forward'},
    {name: 'Kevin De Bruyne', club: 'Manchester City', position: 'Midfielder'},
    {name: 'Robert Lewandowski', club: 'Bayern Munich', position: 'Forward'}, {
        name: 'Lionel Messi',
        club: 'Paris Saint-Germain',
        position: 'Forward'
    },
    {name: 'Cristiano Ronaldo', club: 'Manchester United', position: 'Forward'},
    {name: 'Neymar Jr', club: 'Paris Saint-Germain', position: 'Forward'},
    {name: 'Kylian Mbappe', club: 'Paris Saint-Germain', position: 'Forward'},
    {name: 'Kevin De Bruyne', club: 'Manchester City', position: 'Midfielder'},
    {name: 'Robert Lewandowski', club: 'Bayern Munich', position: 'Forward'}, {
        name: 'Lionel Messi',
        club: 'Paris Saint-Germain',
        position: 'Forward'
    },
    {name: 'Cristiano Ronaldo', club: 'Manchester United', position: 'Forward'},
    {name: 'Neymar Jr', club: 'Paris Saint-Germain', position: 'Forward'},
    {name: 'Kylian Mbappe', club: 'Paris Saint-Germain', position: 'Forward'},
    {name: 'Kevin De Bruyne', club: 'Manchester City', position: 'Midfielder'},
    {name: 'Robert Lewandowski', club: 'Bayern Munich', position: 'Forward'}, {
        name: 'Lionel Messi',
        club: 'Paris Saint-Germain',
        position: 'Forward'
    },
    {name: 'Cristiano Ronaldo', club: 'Manchester United', position: 'Forward'},
    {name: 'Neymar Jr', club: 'Paris Saint-Germain', position: 'Forward'},
    {name: 'Kylian Mbappe', club: 'Paris Saint-Germain', position: 'Forward'},
    {name: 'Kevin De Bruyne', club: 'Manchester City', position: 'Midfielder'},
    {name: 'Robert Lewandowski', club: 'Bayern Munich', position: 'Forward'}, {
        name: 'Lionel Messi',
        club: 'Paris Saint-Germain',
        position: 'Forward'
    },
    {name: 'Cristiano Ronaldo', club: 'Manchester United', position: 'Forward'},
    {name: 'Neymar Jr', club: 'Paris Saint-Germain', position: 'Forward'},
    {name: 'Kylian Mbappe', club: 'Paris Saint-Germain', position: 'Forward'},
    {name: 'Kevin De Bruyne', club: 'Manchester City', position: 'Midfielder'},
    {name: 'Robert Lewandowski', club: 'Bayern Munich', position: 'Forward'}, {
        name: 'Lionel Messi',
        club: 'Paris Saint-Germain',
        position: 'Forward'
    },
    {name: 'Cristiano Ronaldo', club: 'Manchester United', position: 'Forward'},
    {name: 'Neymar Jr', club: 'Paris Saint-Germain', position: 'Forward'},
    {name: 'Kylian Mbappe', club: 'Paris Saint-Germain', position: 'Forward'},
    {name: 'Kevin De Bruyne', club: 'Manchester City', position: 'Midfielder'},
    {name: 'Robert Lewandowski', club: 'Bayern Munich', position: 'Forward'}, {
        name: 'Lionel Messi',
        club: 'Paris Saint-Germain',
        position: 'Forward'
    },
    {name: 'Cristiano Ronaldo', club: 'Manchester United', position: 'Forward'},
    {name: 'Neymar Jr', club: 'Paris Saint-Germain', position: 'Forward'},
    {name: 'Kylian Mbappe', club: 'Paris Saint-Germain', position: 'Forward'},
    {name: 'Kevin De Bruyne', club: 'Manchester City', position: 'Midfielder'},
    {name: 'Robert Lewandowski', club: 'Bayern Munich', position: 'Forward'}, {
        name: 'Lionel Messi',
        club: 'Paris Saint-Germain',
        position: 'Forward'
    },
    {name: 'Cristiano Ronaldo', club: 'Manchester United', position: 'Forward'},
    {name: 'Neymar Jr', club: 'Paris Saint-Germain', position: 'Forward'},
    {name: 'Kylian Mbappe', club: 'Paris Saint-Germain', position: 'Forward'},
    {name: 'Kevin De Bruyne', club: 'Manchester City', position: 'Midfielder'},
    {name: 'Robert Lewandowski', club: 'Bayern Munich', position: 'Forward'}, {
        name: 'Lionel Messi',
        club: 'Paris Saint-Germain',
        position: 'Forward'
    },
    {name: 'Cristiano Ronaldo', club: 'Manchester United', position: 'Forward'},
    {name: 'Neymar Jr', club: 'Paris Saint-Germain', position: 'Forward'},
    {name: 'Kylian Mbappe', club: 'Paris Saint-Germain', position: 'Forward'},
    {name: 'Kevin De Bruyne', club: 'Manchester City', position: 'Midfielder'},
    {name: 'Robert Lewandowski', club: 'Bayern Munich', position: 'Forward'}, {
        name: 'Lionel Messi',
        club: 'Paris Saint-Germain',
        position: 'Forward'
    },
    {name: 'Cristiano Ronaldo', club: 'Manchester United', position: 'Forward'},
    {name: 'Neymar Jr', club: 'Paris Saint-Germain', position: 'Forward'},
    {name: 'Kylian Mbappe', club: 'Paris Saint-Germain', position: 'Forward'},
    {name: 'Kevin De Bruyne', club: 'Manchester City', position: 'Midfielder'},
    {name: 'Robert Lewandowski', club: 'Bayern Munich', position: 'Forward'}, {
        name: 'Lionel Messi',
        club: 'Paris Saint-Germain',
        position: 'Forward'
    },
    {name: 'Cristiano Ronaldo', club: 'Manchester United', position: 'Forward'},
    {name: 'Neymar Jr', club: 'Paris Saint-Germain', position: 'Forward'},
    {name: 'Kylian Mbappe', club: 'Paris Saint-Germain', position: 'Forward'},
    {name: 'Kevin De Bruyne', club: 'Manchester City', position: 'Midfielder'},
    {name: 'Robert Lewandowski', club: 'Bayern Munich', position: 'Forward'}, {
        name: 'Lionel Messi',
        club: 'Paris Saint-Germain',
        position: 'Forward'
    },
    {name: 'Cristiano Ronaldo', club: 'Manchester United', position: 'Forward'},
    {name: 'Neymar Jr', club: 'Paris Saint-Germain', position: 'Forward'},
    {name: 'Kylian Mbappe', club: 'Paris Saint-Germain', position: 'Forward'},

];
const playersDiv = document.getElementById('players');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;
displayPlayers(currentIndex);

prevButton.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = players.length - 1;
    }
    displayPlayers(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex++;
        if (currentIndex >= players.length) {
        currentIndex = 0;
    }
    displayPlayers(currentIndex);
});
function displayPlayers(startIndex) {
    playersDiv.innerHTML = '';
    for (let i = startIndex; i < startIndex + 10; i++) {
        const player = players[i];
        const playerDiv = document.createElement('div');
        playerDiv.innerHTML = `<h3>${player.name}</h3><p>Club: ${player.club}, Position: ${player.position}</p>`;
        playersDiv.appendChild(playerDiv);
    }
}
//
//

// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// Ну хз що з того вийде))) уачі вам і терпіня то перевіряти))

function createTable(){
    let lenghtSt = document.getElementById("lenghtSt").value
    let lenghtsPunkt = document.getElementById("lenghtsPunkt").value
    let inTable = document.getElementById("inTable").value
let table = '<table>';
 for (let i = 0; i < lenghtSt; i++) {
     table += "<tr>";

     for (let p = 0; p < lenghtsPunkt; p++) {
         table += "<td>" + inTable + "</td>";
     }
     table += "</tr>";
 }
    table += "</table>"
    document.getElementById("containertable").innerHTML = table;
}
