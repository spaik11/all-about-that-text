let userInput = document.querySelector('#user-input');
const resultLi = document.querySelector('.result');
let newLi = document.createElement('li')

const clearResult = () => {
    resultLi.innerHTML = '';
}

const clearUserInput = () => {
    userInput.value = '';
}

const runBiggify = () => {
    clearResult();
    let result = biggify(Number(userInput.value));
    newLi.innerText = result;
    resultLi.appendChild(newLi)
    clearUserInput();
}

const runNasafy = () => {
    clearResult();
    let result = nasafy(Number(userInput.value));

    for (let i = 0; i < result.length; i++) {
        let newLi = document.createElement('li')
        newLi.innerText = result[i];
        resultLi.appendChild(newLi)
    }
    clearUserInput();
}

const runCrazify = () => {
    clearResult();
    let result = crazify(userInput.value);
    newLi.innerText = result;
    resultLi.appendChild(newLi)
    clearUserInput();
}

const runReversify = () => {
    clearResult();
    let result = reversify(userInput.value);
    newLi.innerText = result;
    resultLi.appendChild(newLi);
    clearUserInput();
}

const runTitleify = () => {
    clearResult();
    let result = titleify(userInput.value);
    newLi.innerText = result;
    resultLi.appendChild(newLi);
    clearUserInput();
}

document.querySelector('.biggify').addEventListener('click', runBiggify);
document.querySelector('.nasafy').addEventListener('click', runNasafy)
document.querySelector('.crazify').addEventListener('click', runCrazify)
document.querySelector('.reversify').addEventListener('click', runReversify)
document.querySelector('.titleify').addEventListener('click', runTitleify)
