function randomInt(min, max) {
    return Math.round(Math.random()*(max-min)+min);
}
document.body.innerText=randomInt(2, 4).toString();