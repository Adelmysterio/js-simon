const output = document.getElementById('output');
const randomNumbers = [];
const userNumbers = [];
const equalNumbers = [];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

while (randomNumbers.length != 5) {
    let randomInt = getRandomInt(1, 10);
    if (!randomNumbers.includes(randomInt)) {
        randomNumbers.push(randomInt);
        const liElement = document.createElement('li');
        output.appendChild(liElement);
        liElement.append(randomInt);
    }
};
setTimeout(function () {
    output.innerHTML = ''
}, 2800);

setTimeout(function () {
    for (let i = 0; i < 5; i++) {
        let userInt = Number.parseInt(prompt('Scrivi un numero che pensi fosse nella lista dei numeri random'), 10);
        userNumbers.push(userInt)
    }
    for (let j = 0; j < randomNumbers.length; j++) {
        if (userNumbers.includes(randomNumbers[j])) {
            equalNumbers.push(randomNumbers[j])
        }
    }
    if (equalNumbers.length > 0) {
        console.log('Hai indovinato ' + equalNumbers.length + ' numeri')
        console.log('I numeri che hai indovinato sono: ' + equalNumbers)
    }
    else {
        console.log('Non hai indovinato nessun numero sei un cretino!')
    }
}, 3000)