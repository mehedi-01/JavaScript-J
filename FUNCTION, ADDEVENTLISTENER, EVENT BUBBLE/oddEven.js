function even(num){
    if (num % 2 == 0){
        return num;
    }
    else {
        console.log(num*2, ': is odd number' )
    }
    return 1000;
}


var result = even(12);
console.log('result', result);