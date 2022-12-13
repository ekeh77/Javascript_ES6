/***********Dead Zone**************/
/*
console.log(myName);
var myName = "nico";
*/

//console.log(myName);
//let myName = "nico"

/***********Block Scope**************/

/*
if(true) {
    var hello1 = "hi";
}

console.log(hello1);


if(true) {
    const hello2 = "hi";
}

console.log(hello2);

function a (){
    var hello3 = "h1";
}

console.log(hello3);

if(true) {
    let hello4 = "hi";
}
    let hello4 = "hi";
console.log(hello4)
*/

/******** Arrow Functions******** */
/*
const hello = function(arg){

}

const names = ["nico","lynn","flynn"];

const hearts = names.map(function(item){
    return item + "❤️";
});

console.log(hearts);

const hearts = names.map((item, index) => {
    console.log("we are on " + index)
    return item + "❤️";
});


const hearts2 = names.map(item => item + "❤️"); //Implicit return

const hearts3 = names.map(item => {item + "❤️"});

console.log(hearts);
console.log(hearts2);
console.log(hearts3);
*/

/******** 'this' in Arrow Functions******** */
/*
const button = document.querySelector("button");

button.addEventListener("click", function(){
    console.log(this); //button
    this.style.backgroundColor = "red";
    console.log("i have been clicked");
});

button.addEventListener("click", () => {
    console.log(this); //button
    this.style.backgroundColor = "red";
})

const handleClick = () => {
    console.log(this); // window
}

const nico = {
    name: "Nico",
    age: 24,
    addYear: () => {
        this.age++;
    }
}

console.log(nico);
nico.addYear();
nico.addYear();
console.log(nico);

const nico2 = {
    name: "Nico",
    age: 24,
    addYear() {
        this.age++;
    }
}

console.log(nico2);
nico.addYear();
nico.addYear();
console.log(nico2);
*/

/*****************Default Values************ */
/*
const DEFAULT = "lalalala"

const sayHi2 = (aName = DEFAULT) => "hello " + aName;

function sayHi(aName = "anon") {
    //return "Hello " + (aName || " anon");
    return "Hello " + aName;
}

console.log(sayHi());
*/

/***********Sexy Strings****** */
const sayHi = (aName = "anon") => `hello ${aName} lovely to have you`;

console.log(sayHi());

console.log(`hello how ar you ${1000 * 100}`);

const add = (a, b) => a + b;

console.log(`hello how ar you ${add(6, 6)}`);
