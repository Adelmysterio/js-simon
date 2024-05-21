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

setTimeout (function(){
    output.innerHTML = ''
    for (i=0; i<5; i++) {
        let userInt = Number.parseInt(prompt('Scrivi un numero di secondi da attendere'), 10);
        userNumbers.push(userInt)
    }

    for (i=0; i<randomNumbers; i++) {
        if (userNumbers.includes(randomNumbers[i])) {
            equalNumbers.push(randomNumbers[i])
        }
    }
    console.log(equalNumbers, equalNumbers.length)
},3000)