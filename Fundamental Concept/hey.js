const element = document.querySelectorAll(“. scenarios”);
const output = document.getElementById(“output”);
const arr[“girlfriend”,”boyfriend”,”me”];
arr.forEach((scenario,index)=>{
scenario.addEventListener(“click”,choice);
function choice(){
let randomChoice = Math.floor(Math.random()*arr.length);
output.innerHTML = randomChoice;
console.log(“my choice ” + arr[2]);
}
});