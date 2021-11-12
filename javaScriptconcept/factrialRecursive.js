function factoril(n) {

    if (n == 0) {
        return 1;

    }

    else {
        return n * factoril(n - 1)
    }
}
var result = factoril(12);
console.log(result);
