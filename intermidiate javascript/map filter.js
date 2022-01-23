const number = [1, 2, 3, 4, 5];
const out = [];

for(let i = 0; i <number.length; i++){
    const element = number[i];
    const result = element*element;
    out.push(result);
}
console.log(out);


function square(element){
    return element*element;

}

const result = number.map(function(element){
return element*element;
})

const result = number.map(x => x*x);

console.log(result);

const big = number.filter(x => x < 3);
console.log(big);