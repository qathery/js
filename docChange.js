//задания с https://learn.javascript.ru/modifying-document?fbclid=IwAR2gqZ5zG1trVQxxKQoJOnS9GOdToK5z5FFmkyfraEiieFxD8M456wpMJDE
function clear(elem) {
    elem.innerHTML = '';
}
function list() {
   let   ul = document.createElement('ul');
    document.body.append(ul);
    var flag = true;
    while (flag) {
        let text = prompt("Введите элемент:", "");
        if (!text || !flag) {
            break;
        }
        let li = document.createElement('li');
        li.textContent = text;
        ul.append(li);
    }

    document.body.addEventListener('keydown', function (target) {
        if (target.key == 'Escape') flag = false;
    });
}
list();
let data = {
    "Рыбы": {
        "форель": {},
        "лосось": {}
    },

    "Деревья": {
        "Огромные": {
            "секвойя": {},
            "дуб": {}
        },
        "Цветковые": {
            "яблоня": {},
            "магнолия": {}
        }
    }
};
function createTree(container, obj) {
    container.append(createTreeDom(obj));
}

function createTreeDom(obj) {

    if (!Object.keys(obj).length) return;

    let ul = document.createElement('ul');

    for (let key in obj) {
        let li = document.createElement('li');
        li.innerHTML = key;

        let childrenUl = createTreeDom(obj[key]);
        if (childrenUl) {
            li.append(childrenUl);
        }

        ul.append(li);
    }

    return ul;
}
createTree(document.body, data);
function createCalendar(elem, year, month) {

    let mon = month - 1;
    let d = new Date(year, mon);

    let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

    for (let i = 0; i < getDay(d); i++) {
        table += '<td></td>';
    }

    while (d.getMonth() == mon) {
        table += '<td>' + d.getDate() + '</td>';

        if (getDay(d) % 7 == 6) {
            table += '</tr><tr>';
        }

        d.setDate(d.getDate() + 1);
    }

    if (getDay(d) != 0) {
        for (let i = getDay(d); i < 7; i++) {
            table += '<td></td>';
        }
    }

    table += '</tr></table>';

    elem.innerHTML = table;
}

function getDay(date) {
    let day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
}

createCalendar(document.querySelector('#cal'), 2020, 2);

let timerId;
clockStart();
document.querySelector('#start').addEventListener('click', function ()
{
clockStart();
});
document.querySelector('#stop').addEventListener('click', function ()
{
    clockStop();
});
function clockStart() { // запустить часы
    timerId = setInterval(update, 1000);
    update(); // (*)
}

function clockStop() {
    clearInterval(timerId);
    timerId = null;
}
function update() {
    let clock = document.getElementById('time');
    let date = new Date(); // (*)
    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    clock.children[0].innerHTML = hours;

    let minutes = date.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;
    clock.children[1].innerHTML = minutes;

    let seconds = date.getSeconds();
    if (seconds < 10) seconds = '0' + seconds;
    clock.children[2].innerHTML = seconds;
}

let sortedRows = Array.from(sorttbl.rows)
    .slice(1)
    .sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);

table.tBodies[0].append(...sortedRows);