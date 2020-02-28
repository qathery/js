function truncate(str, maxlength) {
if (str.length >maxlength) return str.slice(0, maxlength - 1)+'…';
else return str;
}
document.body.innerText = truncate("hekttmnknemkn ekhkemhmke hmke hmejhme  hmek", 20);