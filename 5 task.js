function ucFirst(str) {
    str=str[0].toUpperCase()+ str.slice(1);
    return str;
}
document.body.innerText = ucFirst("ism");