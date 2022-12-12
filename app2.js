const email = [
    "nco@no.com", 
    "naver@google.com", 
    "lynn@gmail.com", 
    "nico@nomad.com",
    "nico@gmail.com"
];

const foundMail = email.find(item => item.includes("@gmail.com"));
console.log(foundMail);

const noGmail = email.filter(potato => !potato.includes("@gmail"));
console.log(noGmail);

const cleaned = []
email.forEach(email => {
    cleaned.push(email.split("@")[0]);
})

const cleaned2 = email.map(email => email.split("@")[0]);

const cleaned3 = email.map((email, index) => ({
    username : email.split("@")[0]
    , index
}));

console.table(cleaned3);