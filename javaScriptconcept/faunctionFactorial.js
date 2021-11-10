function factorial(n) {

    var factorial = 1;
    for (var i = 1; i <= n; i++) {

        factorial = factorial * i;


    }
    return factorial;
}

var result = factorial(5);
console.log(result);