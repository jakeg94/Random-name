const tubeLine = ["Northern","Central","District","Picadilly","Victoria","DLR","Metropolitan","Circle","Hammersmith&City","Waterloo&City"];

const getRandomNumber = (max) => Math.floor(Math.random() * max);

const getRandomLine = () => 
`${tubeLine[getRandomNumber(tubeLine.length)]}`;

//console.log(getRandomLine());
const setRandomLine = () => {
    var random_line = document.getElementById('random_line').innerText = getRandomLine();
}

document.getElementById('generate')
    .addEventListener("click", setRandomLine);