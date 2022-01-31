function watch(){
    let count = 0;
    return function(){
        count++;
        return count;

    }
} 

const clock = watch();
console.log(clock()); 
console.log(clock());  
console.log(clock());  
console.log(clock());   

const clock1 = watch();
console.log(clock1()); 
console.log(clock1());  
console.log(clock());  
console.log(clock());   