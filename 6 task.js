function checkSpam(str) {
    str = str.toLowerCase();

    return str.includes('viagra') || str.includes('xxx');
}
document.body.innerText = `vrkhnemnxxrhr = ${checkSpam("vrkhnemnxxrhr")} \n rrgrrgrgrgXxXgg = ${checkSpam("rrgrrgrgrgXxXgg")} \n viagraviabra = ${checkSpam("viagraviabra")}`;