function extractCurrencyValue(str) {
    return +str.slice(1);
}
document.body.innerText = extractCurrencyValue("$120");