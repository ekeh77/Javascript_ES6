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
/*
const sayHi = (aName = "anon") => `hello ${aName} lovely to have you`;

console.log(sayHi());

console.log(`hello how ar you ${1000 * 100}`);

const add = (a, b) => a + b;

console.log(`hello how ar you ${add(6, 6)}`);
*/
/***************HTML Fragments********** */
/*
const wrapper = document.querySelector(".wrapper");

const addWelcome = () => {
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    h1.innerText = "Hello";
    h1.className = "sexyTitle";
    div.append(h1);
    wrapper.append(div);
}

const addWelcome = () => {
    const div = `
        <div class="hello">
            <h1 class="title">Hello</h1>
        </div>
    `;
    wrapper.append(div);
}

console.log(`

    hello

`);

setTimeout(addWelcome, 5000);
*/

/*************** HTML Fragments part Two ************************ */
/*
const wrapper = document.querySelector(".wrapper");

const friends = ["me", "lynn", "dal", "mark"];

const list = `
    <h1>People i love</h1>
    <ul>
        ${friends.map(friend => `<li>${friend}</li>`).join("")}
    </ul>
`

wrapper.innerHTML = list;
*/
/**********************Cloning Styled Components*************************** */
/*
const styled = (aElement) => {
    const el = document.createElement(aElement);
    return args => {
        const styles = args[0];
        el.style = styles;
        return el
    };
};

const title = styled("h1")`
    background-color: red;
    color: blue;
`;

const subtitle = styled("span")`
    color: green;
`

title.innerText = "We just cloned";
subtitle.innerText = "Styled Components";
console.log(title, subtitle)
*/

/************************More String Improvements!******************************* */
/*
const isEmail = email => email.includes("@");
console.log(isEmail("nico@nomadcoders.co"));

const CC_NUMBER = "6060";
const displayName = `${"*".repeat(10)}${CC_NUMBER}`;
console.log(displayName);

const name = "Mr. Nicolas"
console.log(name.startWith("Mr"));
console.log(name.endWith("Nicolas"));
*/

/*************************Array.from() and Array.of()******************* */
//const friends = ["nico", "lynn", "dal", "mark"];
/*
const friends = Array.of("nico", "lynn", "dal", "mark");
console.log(friends);

const button = document.querySelectorAll("button");

Array.from(button).forEach(button => {
    button.addEventListener("click", () => console.log("I been clicked"));
})
*/

/*******************Array.find() Array.findIndex() Array.fill()*********** */
/*
const friends = [
    "nico@gmail.com",
    "lynn@naver.com",
    "dal@yahoo.com",
    "mark@hotmail.com",
    "flynn@gorea.com"
];

const target = friends.find(friend => friend.includes("@gorea.com"));
console.log(target);

const target2 = friends.findIndex(friend => friend.includes("@gorea.com"));
console.log(target2);

const username = friends[target2].split("@")[0];

const email = "korea.com";

console.log(`${username}@${email}`);

friends[target2] = `${username}@${email}`

friends.fill("*".repeat(5), 4);

friends.fill("*".repeat(5), 1, 3);

console.log(friends)

console.log(friends.includes("nico@gmail.com"));
*/
/************Object Destructuring******************** */
/*
const settings = {
    notifications : {
        //follow : true,
        alerts : true,
        unfollw : false
    },
    color : {
        theme : "dark"
    }
}

if(settings.notifications.follow){
    //send email
}

const {
    notifications : {follow = false} = {},
    color
} = settings; 

console.log(follow);
console.log(color);
*/
/*********Array Destructuring******* */
/*
const days = () => ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];


const mon = days[0];
const tue = days[1];
const wed = days[2];


const [mon, tue, wed, test = "Test"] = days();

console.log(mon, tue, wed, test);
*/
/*****************Renaming ************* */
/*
const settings = {
    color : {
        chosen_color : "darl"
    }
};

let chosenColor = "blue";

({
    color : { chosen_color : chosenColor = "light" }
} = settings);

//const chosenColor = settings.color.chosen_color || "light";

console.log(chosen_color);
*/
/**********Function Destructuring*** */
/*
function saveSettings(follwAlert, unfollwAlert, mrkAlert, themeColor){
    console.log(settings);
}

function saveSettings({follw, alert, color = "blue"}){
    if(!settings.mkt){


    }
}

saveSettings({
    follw : true,
    alert : true,
    mkt: true,
    color : "green"
});
*/

/*******************Value Shorthands***************/
/*
const follow = checkFollow();
const alert = checkAlert();

const settings = {
    notification : {
        follow,
        alert
    }
};
*/

/***********Swapping and Skipping*********** */
let mon = "Sat";
let sat = "Mon";

[sat, mon] = [mon, set];

const days = ["mon", "tue", "wed", "thu", "fri"];

const [,,,thu,fri] = days;
console.log(thu, fri);
