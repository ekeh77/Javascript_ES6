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
/*
let mon = "Sat";
let sat = "Mon";

[sat, mon] = [mon, set];

const days = ["mon", "tue", "wed", "thu", "fri"];

const [,,,thu,fri] = days;
console.log(thu, fri);
*/

/************ Introduction to Spread *************/
/*
const friends = [1, 2, 3, 4];
const family = ["a", "b", "c"];
console.log(friends);
console.log(...friends);
console.log([friends, family]);
console.log([...friends, ...family]);

const sexy = {
    name : "nico",
    age : 24
};

const hello = {
    sexy : true,
    hello : "hello"
};

console.log({sexy, hello});
console.log({...sexy, ...hello});
*/

/*****************Spread Applications********** */
/*
const friends = ["nico", "lynn"];

const newFriends = [...friends, "dal"];

console.log(newFriends);

const nico = {
    username : "nico"
};

console.log({...nico, password : 123});

const first = ["mon", "tue", "wed"];

const weekend = ["sat", "sun"];

const fulWeek = [...first, "thu", "fri", ...weekend];

console.log(fulWeek);

const lastName = prompt("Last name");

const user = {
    username : "nico",
    age : 24,
    ...(lastName !== "" && { lastName })
};

console.log(user);
*/

/*********Intro to Rest Parameters************* */
/*
const infiniteArgs = (...kimchi) => console.log(kimchi);

infiniteArgs("1", 2, true, "lalala", [1,2,3,4])

const bestFriendMaker = (firstOne, ...potato) => {
    console.log(`My best friend is ${firstOne}`);
    console.log(potato);
}
bestFriendMaker("nic", "lynn", "dal", "japan");
*/
/**********Rest + Spread + Destructure Magic***** */
/*
const user = {
    NAME : "nico",
    age : 24,
    password : 12345
};

user["password"] = null;

console.log(user);

const killPassword = ({password, ...rest}) => rest;

const cleanUser = killPassword(user);

console.log(cleanUser);

const setCountry = ({country = "KR", ...rest}) => ({country, ...rest});

console.log(setCountry(user));

const rename = ({NAME:name, ...rest}) => ({name, ...rest});

console.log(rename(user));
*/

/*********** *For ... of***************/
/*
const friends = ["Nico", "Lynn", "ha", "hu"];

for(let i = 0; i < friends.length; i++){
    console.log(`${friends[i]} I love Kimchi`);
}

const addHeart = (c, i, a) => console.log(c, i, a);

friends.forEach(addHeart);

friends.forEach(friend => console.log(friend));

for (const friend of friends){
    if(friend == "ha"){
        break;
    }else{
        console.log(friend);
    }
}

for (const letter of "hello"){
    console.log(letter);
}
*/

/*************Introduction to Async***** */
/*
const hello = fetch("http://google.com");

console.log("something");
console.log(hello);
*/

/************Creating Promises******** */
/*
const amISexy = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "Yes you are!")
});

console.log(amISexy);

setInterval(console.log, 1000, amISexy);
*/
/**********Using Promises********* */
/*
const amISexy = new Promise((resolve, reject) => {
    resolve("Yes you are!");
    reject("You are ugly");
});

const thenFn = value => console.log(value);

amISexy
    .then(thenFn)
    .catch(value => console.log(value));
    */

/***************Chaining Promises************* */
/*
const amISexy = new Promise((resolve, reject) => {
    resolve(2);
})

const timesTwo = (number) => number * 2;

amISexy
    .then(timesTwo)
    .then(timesTwo)
    .then(timesTwo)
    .then(timesTwo)
    .then(timesTwo)
    .then(() => {
        throw Error("Something is worng");
    })
    .then(lastNumber => console.log(lastNumber))
    .catch(error => console.log(error));
*/

/*****************Promise.all******* */
/*
const p1 = new Promise((resolve) => {
    setTimeout(resolve, 5000, "First");
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(reject, 1000, "Second");
});

const p3 = new Promise((resolve) => {
    setTimeout(resolve, 3000, "Third");
});

const motherPromise = Promise.all([p1, p2, p3]);

motherPromise.then(values => console.log(values)).catch(error => console.log(error));
*/
/***********Promise.race*** */
/*
const p1 = new Promise((resolve) => {
    setTimeout(resolve, 5000, "First");
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(reject, 5000, "Second");
});

const p3 = new Promise((resolve) => {
    setTimeout(resolve, 3000, "Third");
});

Promise.race([p1, p2, p3]).then(values => console.log(values)).catch(error => console.log(error));
*/
/****************finally ****** */
/*
const p1 = new Promise(resolve, reject => {
    setTimeout(reject, 5000, "First")
})
.then(value => console.log(value))
.catch(e => console.log(`${e}❌`))
.finally(() => console.log("Im done"));
*/
/***************Real world Promises****** */
/*
fetch("https://yts.am/api/v2/list_movies.json")
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(json => console.log(json))
    .catch(e => console.log(`❌ ${e}`));
    */

/*********Async Await************* */
/*
const getMoviesPromise = () => {
    fetch("https://yts.am/api/v2/list_movies.json")
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(json => console.log(json))
    .catch(e => console.log(`❌ ${e}`));
}

const getMoviesAsync = async() => {
    const response = await fetch("https://yts.am/api/v2/list_movies.json");
    const json = await response.json();
    console.log(json);
}

getMoviesAsync();

async function getMovies2() {

}
*/
/*********try catch finally**************** */
/*
const getMoviesAsync2 = async() => {
        try {
            const response = await fetch("https://yts.am/api/v2/listmovies.json");
            const json = await response.json();
            throw Error("Im hungry");
            console.log(json);
        } catch(e){
            console.log(e);
        } finally {
            console.log("We are done!");
        }
    
}
*/

/************Parallel Async Await********* */
/*
const getMoviesAsync2 = async() => {
    try {
        const [moviesResponse, suggestionsResponse] = await Promise.all([
            fetch("https://yts.am/api/v2/list_movies.json"), 
            fetch("https://yts.mx/api/v2/movie_suggestions.json?movie_id=100")
        ]); 

        const [movies, suggestions] = await Promise.all([
            moviesResponse.json(),
            suggestionsResponse.json()
        ])
        
        console.log(movies, suggestions);
    } catch(e){
        console.log(e);
    } finally {
        console.log("We are done!");
    }

}

getMoviesAsync2();
*/

/************Introduction to Classes******* */
/*
class User {
    constructor(name) {
        this.username = name;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.username}`);
    }
}

const sexyUser = new User("Nico");

console.log(sexyUser.username);

setTimeout(sexyUser.sayHello, 4000);

const uglyUser = new User("las");

uglyUser.sayHello();

const baseObject = {
    username : "Nicolas",
    sayHello : function () {
        console.log("Hello, I'm Nicolas");
    }
}

const sexyUser2 = baseObject;
const uglyUser2 = baseObject;

sexyUser2.sayHello();
uglyUser2.sayHello();
*/
/*************************Extending Classes***** */
/*
class User {
    constructor(name, lastName, email, password) {
        this.username = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.username}`);
    }

    getProfile() {
        console.log(`${this.username} ${this.email} ${this.password}`);
    }

    updatePassword(newPassword, currentPassword){
        if(currentPassword === this.password){
            this.password = newPassword;
        }else{
            console.log("Can't change password.");
        }
    }
}

const sexyUser = new User("Nico", "Serrano", "nico@com", "1234");

sexyUser.getProfile();
console.log(sexyUser.password);
sexyUser.updatePassword("hello", "1234");
console.log(sexyUser.password);

class Admin extends User{
    constructor(superadmin) {
        this.superadmin = superadmin;
    }
    deleteWebsite(){
        console.log("Deleting the whole website...");
    }
}

const sexyAdmin = new Admin("Nico", "Serrano", "nico@com", "1234", ture);

sexyAdmin.deleteWebsite();

console.log(sexyAdmin.email);
*/
/**************super********** */
/*
class User {
    constructor({username, lastName, email, password}) {
        this.username = username;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.username}`);
    }

    getProfile() {
        console.log(`${this.username} ${this.email} ${this.password}`);
    }

    updatePassword(newPassword, currentPassword){
        if(currentPassword === this.password){
            this.password = newPassword;
        }else{
            console.log("Can't change password.");
        }
    }
}

const sexyUser = new User({
    username:"Nico", 
    lastName:"Serrano", 
    email:"nico@com", 
    password:"1234"
});

sexyUser.getProfile();
console.log(sexyUser.password);
sexyUser.updatePassword("hello", "1234");
console.log(sexyUser.password);

class Admin extends User{
    constructor({username, lastName, email, password, superadmin, isActive}) {
        super({username, lastName, email, password});
        this.superadmin = superadmin;
        this.isActive = isActive;
    }
    deleteWebsite(){
        console.log("Deleting the whole website...");
    }
}

const sexyAdmin = new Admin({
    username:"Nico", 
    lastName:"Serrano", 
    email:"nico@com", 
    password:"1234",
    superadmin: true,
    isActive: true
});

sexyAdmin.deleteWebsite();

console.log(sexyAdmin.email);

class Counter {
    constructor({initialNumber = 0, counterId, plusId, minusId}) {
        this.count = initialNumber;
        this.counter = document.getElementById(counterId);
        this.counter.innerText = initialNumber;
        this.plusBtn = document.getElementById(plusId);
        this.minusBtn = document.getElementById(minusId);
        this.addEventListeners();
    }
    addEventListeners = () => {
        this.plusBtn.addEventListener("click", this.increase);
        this.minusBtn.addEventListener("click", this.decrease);
    }
    increase = () => {
        this.count = this.count + 1;
        this.repaintCount();
    }
    decrease = () => {
        this.count = this.count - 1;
        this.repaintCount();
    }
    repaintCount = () => {
        this.counter.innerText = this.count
    }
}

new Counter({counterId:"count", plusId:"add",  minusId:"minus"});
new Counter({counterId:"count2", plusId:"add2",  minusId:"minus2", initialNumber:666});
*/
/*************Symbols ************************ */
/*
const hello = Symbol("hello");
const bye = Symbol("hello");

const superBig = {
    [Symbol("nico")] : {
        handsome : true
    },
    [Symbol("nico")] : {
        handsome : true
    },
    hello : "bye"
};
*/
/*****************Sets*****************/
/*
const user = {
    age : 12,
    name : "nico"  
};

user.onemore = true;

user.name = null;

const sexySet = new Set([1, 2, 3, 4, 5, 6, 7, 7, 7, 7, 8])

sexySet.has(9);

sexySet.delete(1);

sexySet.clear();

sexySet.add("Hi!");

sexySet.add([1,2,3,4,5]);

sexySet.size();
*/
/*****************WeakSet ************** */
/*
const weakSet = new WeakSet();
const sexy = {
    im : true
};

weakSet.add(sexy);
weakSet.add({hello:true});
*/
/*****************Map and Weakmap********** */
/*
const map = new Map();

map.set("age", 18);

map.entries();

map.has("age");
map.get("age");

const weakMap = new WeakMap();

weakMap.set({"age":18});
*/
/***************Generators*************** */
/*
function* listPeople(){
    yield "Dal";
    yield "Flynn";
    yield "Mark";
    yield "Godkimchi";
    yield "Japan Guy";
}

const listG = listPeople();

listG.next();
listG.next();

const friends = ["Dal", "Flynn", "Mark"];

function* friendTeller(){
    for(const friend of friends){
        yield friend;
    }
}

const friendLooper = friendTeller();
*/
/***********Proxies ****************** */
/*
const userObj = {
    username : "nico",
    age : 12,
    password : 1234
};

const userFilter = {
    get : (target, prop, carrot) => {
        //console.log("Somebody is getting something");
        console.log(target);
        console.log(prop);
        console.log(carrot);
        return prop === "password" ?  `${"*".repeat(5)}` : target[prop];
    },
    set : () => {
        console.log("Somebody wrote something");
    },
    delete : (target, prop) => {
        if(prop === "password"){
            return;
        }else{
            target[prop] = "DELETED";
        }
    },
};

const filteredUser = new Proxy(userObj, userFilter);
*/
/**************************Should you learn proxies or generators?******** */
/******************* ES2020 Introduction************ */
/******** New ?? Operator******************* */
/*
let name;

//name = 0;
name = "";

console.log("hello", name || "anonymous");

console.log("hello", name ?? "anonymous");
*/
/*******************Optional Chaining********** */
/*
const me = {
    name : "nico",
    profile : {
        email : "@something.com"
    }
}

console.log(me.profile.email);

const lynn = {
    name : "nico",
}

console.log(lynn.profile.email);

console.log(lynn.profile && lynn.profile.email);

console.log(lynn?.profile?.email?.provider?.name);
*/
/************padStart and padEnd*********************/
/*
let hours = 12;
let minutes = 3;
let seconds = 2;

console.log(`${hours}h:${minutes < 10 ? `0${minutes}` : minutes}m:${seconds}s`)

minutes = String(minutes).padStart(2, "0");

console.log(`${hours}h:${minutes}m:${seconds}s`);

"5".padEnd(5, "x");
"1".padStart(2, "0").padEnd(3, "s");
*/
/************* trim, trimStart, trimEnd****** */
/*
"                        hello".trimStart();
"           hello           ".trimEnd();
"          hello        ".trim();
*/
/*************Object entries, Object values,Object fromEntries */
/*
const person = {
    name : "nico",
    age : 12
};
Object.values(person);
Object.entries(person);
Object.entries(person).forEach(item => console.log(item[0], item[1]));
Object.fromEntries(["name", "nico"], ["age", 12], ["food", "kimchi"], ["hello", true]);
*/

/*****************Array flat***************** */
/*
let array = [1,2,3,4,5,6];
let array2 = [1,[2], [ [8], [8], [ [ [8], [8],  [ [6], [5], [3] ] ] ] ] ]
console.log(array2.flat(5))
*/
/*
const fruites = ["apple", "strawberry", "avocado"];

const sortFruitByLength = (fruitA, fruitB) => {
    console.log(fruitA, fruitB);
    return fruitB.length - fruitA.length;
}

console.log(fruites.sort(sortFruitByLength));

const people = [
    {
        name : "nico",
        age : 12
    },
    {
        name : "lynn",
        age : 22
    }
]

const orderPeopleByAge = (personA, personB) => {
    return  personB.age - personA.age;
}

console.log(people);
console.log(people.sort(orderPeopleByAge));
console.log(people);
*/

/****************Promise allSettled******** */
/*
const p = Promise.all([
    fetch("http://yts.mx/api/v2/list_movies.json"),
    fetch("http://yts.mx/api/v2/list_movies.json"),
    fetch("http://yts.mx/api/v2/list_movies.json"),
    fetch("http://yts.mx/api/v2/list_movies.json"),
])
.then(response => console.log("sucecces:",response))
.catch(e => console.log("error:", e))

const p2 = Promise.allSettled([
    fetch("http://yts.mx/api/v2/list_movies.json"),
    fetch(),
    fetch("http://yts.mx/api/v2/list_movies.json"),
    fetch(),
])
.then(response => console.log("sucecces:",response))
.catch(e => console.log("error:", e))
*/
/****************2022 Update Introduction********** */
/************************Logical OR Assignment********** */
/*
let name = prompt("what is your name");
if(!name){
    name = "anonymous";
}
console.log(`Hello ${name}`);

let name2 = prompt("what is your name");
name2 ||= "anonymous";

console.log(`Hello ${name2}`);
*/
/***********Logical AND Assignment********* */
/*
const user = {
    username: 'nico',
    password: 123
};
/*
if(user.password){
    user.password = "[secret]";
}

user.password &&= "[secret]";
user.name ||= "nico";
console.log(user);
*/
/******************Logical NULLISH Assignment****** */
/*
const user = {
    username: "nico",
    password: 123,
    isAdmin: false
};

//user.isAdmin ||= true;
user.isAdmin ??= true;

console.log(user);
*/
/***************Numeric Separators******* */
/*
const allTheMoney = 110_000_000_000_000_000_000_000_000_000_000_000.58;

console.log(allTheMoney);
*/
/************Promise any********** */
/*
const p1 = new Promis((resolve, reject) => {
    setTimeout(() => {
        reject("quick")
    }, 1000);
});

const p2 = new Promis((resolve, reject) => {
    setTimeout(reject, 5000, "slow");
});

Promise.all([p1,p2]).then(console.log).catch(console.log);

Promise.any([p1,p2]).then(console.log).catch((e) => {console.log(e.errors)});
*/
/**********replaceAll ************ */
/*
const  name = "Nicolaso";

const newName = name.replaceAll("o", "😱");

console.log(name);
console.log(newName);

const arr = [1,2];

arr.push(3);

console.log(arr);
*/
/*************** at()********** */
/*
const arr = ["a", "b", "c", "d"];

console.log(arr.at(2));
console.log(arr[2]);

console.log(arr.at(-1)); //X
console.log(arr[-1]); //X
*/

/***************Object hasOwn******* */
/*
const user = {
    name: "nico",
    isAdmin: "hi"
};

console.log(user.hasOwnProperty("isAdmin"));
console.log(Object.hasOwn(user, "isAdmin"));
console.log("isAdmin" in user); 
*/

/**********Error cause********** */
/*
try {
    2+2;
    throw new Error("DB Connection Failed.", {
        cause:{
            error:"Password is correct.",
            value: 1234,
            message: ["too short", "only number not ok."]
        }
    });
} catch(e){
    console.log(e.message, e.cause);
}
*/
/*********Class Field Declarations******* */
/*
class Counter {
    constructor(){
        this.count = 0;
    }

    plus(){
        this.count++;
    }
};

class Counter2 {
    count = 0;
}
*/
/********Private Methods and Fields***** */
/*
class Counter {
    #count = 0;

    get count(){
        return this.#count;
    }

    plus() {
        if(this.#count === 5){
            this.#reset();
        }else{
            this.#count++;
        }
    }

    #reset(){
        this.#count = 0;
    }
}

const c = new Counter();
c.plus();
c.plus();
c.plus();
console.log(c.count);
c.plus();
c.plus();
c.plus();

//c.count = 10000;
//console.log(c.count);
//c.#count = 10000;
//c.#reset();

console.log(c.count)
*/
/************Static Fields and Methods*********** */

class Counter {
    #count = 0;
    static description = "Count up to five";
    static #isMyChild(instance){
        return instance instanceof Counter;
    }
    get count(){
        return this.#count;
    }

    plus() {
        if(this.#count === 5){
            this.#reset();
        }else{
            this.#count++;
        }
    }

    #reset(){
        this.#count = 0;
    }
}

const c = new Counter();

//console.log(Counter.#description);
//console.log(Counter.#isMyChild(c));