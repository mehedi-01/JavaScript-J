function fib(n){
    var fibonacci = [0,1];

for (var i = 2 ; i <= n ; i++){
    fibonacci[i] = fibonacci[i -1] + fibonacci[i -2];
    // console.log(fibonacci[i], fibonacci[i -1]), fibonacci[i -2];
}
return fibonacci;
}
var result = fib(13);
console.log(result);
