function call_back(name, age, talk) {
    console.log('fahim', name);
    console.log('your age', age);
    talk()
}



function handWash() {
    console.log("wash your hand")
}
call_back('turin', 12, handWash);
call_back('nehan', 17, takeShower);

function takeShower() {
    console.log("take a dinner ");
}