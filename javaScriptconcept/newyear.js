function newLeapYear(year){
    const remainder = year % 4;

if(remainder == 0 ){
    return true;
}
else{
    return false;
}

}
const LeapYear = newLeapYear(1201);
console.log(LeapYear);