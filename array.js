let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
alert( styles.shift() );
styles.unshift("Рэп", "Регги");
function sumInput() {
    let a = [];
    while (true) {
        let x = prompt("Введите число", 0);
        if (x=== "" ||x === null) break;
        a.push(+x);
    }

    let sum = 0;
    for (let i of a) {
        sum += i;
    }
    return sum;
}

alert( sumInput() );
function getMaxSubSum(arr) {
    let maxSum = 0; 

    for (let i = 0; i < arr.length; i++) {
        let sumFixedStart = 0;
        for (let j = i; j < arr.length; j++) {
            sumFixedStart += arr[j];
            maxSum = Math.max(maxSum, sumFixedStart);
        }
    }

    return maxSum;
}