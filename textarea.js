let textarea = document.querySelector("#ta");
let clear = document.querySelector("#cl");
clear.addEventListener('click', function () {

    textarea.value="";
    localStorage.removeItem('textarea');
});
textarea.value = localStorage.getItem('textarea');
textarea.addEventListener('input',function () {
        localStorage.setItem('textarea', textarea.value);
});