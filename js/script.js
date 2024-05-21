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