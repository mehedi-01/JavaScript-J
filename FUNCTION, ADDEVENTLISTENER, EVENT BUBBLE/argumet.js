function newNumber(num1, num2) {
    var sum = 0;
    for (let i = 0; i <arguments.length; i ++){
        const num = arguments[i];
        console.log(num);
    }
    return num1 + num2;
}

var result = newNumber(3, 4, 11, 13);

console.log(result);