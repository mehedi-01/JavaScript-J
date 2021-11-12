var number = 77;
function prime(number){
    for (i = 2; i < number; i++) {
        console.log(number, number % i);
        if (number % i == 0) {
            return 'is not prime number';
           
        }
    }
    return 'prime number';
}
var result = prime(128);
console.log(result);