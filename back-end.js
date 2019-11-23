const biggify = function(num) {
    return num + 9000;
    }

const nasafy = function(num) {
    const blastOff = [];
    let start = num;

    while (start > 0) {
        blastOff.push(start)
        start--;
    }
    blastOff.push('Blast off!')

    return blastOff;
}

const reversify = function(str) {
    return str.split('').reverse().join('');
}

const titleify = function(str) {
    let lowerStr = str.toLowerCase().split(' ');

    for (let i = 0; i < lowerStr.length; i++) {
        lowerStr[i] = lowerStr[i][0].toUpperCase() + lowerStr[i].slice(1);
    }

    return lowerStr.join(' ');
}

const crazify = function(str) {
    let newStr = '';
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
        newStr += ' ';
        } else {
        if (count % 2 === 1) {
            newStr += str[i].toUpperCase();
        } else {
            newStr += str[i].toLowerCase();
        }
        count++;
        }
    }
    return newStr;
}


module.exports = {
    biggify,
    nasafy,
    reversify,
    titleify,
    crazify,
}