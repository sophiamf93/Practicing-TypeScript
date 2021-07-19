//this is my name//
let firstName = "sophia";

console.log(firstName);

const numOfStates = 50;

console.log(numOfStates);

let val = 5 + 4;

console.log(val);


//functionality documented//
//this is the function definition

//not using parameters
// function sayHello() {
//   alert("Hello World");
// }

//using parameters
function sayHello() {
  alert("Hello World!");
}

//function call (actually runs the function)
sayHello();

function checkAge(name, age) {
        if (age < 21) {
            alert( "Sorry " + name + " you aren't old enough to view this page!")
        }
}

checkAge("Charles", 21)
checkAge("Abby", 27)
checkAge("James", 18)
checkAge("John", 17)

let veggies = ["broccoli", "brussel sprouts", "asparagus", "corn", "potatoes"];

for (let i = 0; i < veggies.length; i++) {
    console.log(veggies[i])
}

let pet = {
    name: "Archie",
    breed:'Dachshund'
}

console.log(pet.name, pet.breed)

let myFriends = [
    {
        name:"Logan",
        age:26
    },
    {
        name:"Dustin",
        age:33
    },
    {
        name:"Sophia",
        age:27
    },
    {
        name:"Taylor",
        age:20
    },
    {
        name:"Amelia",
        age:37
    }
]

for (let i = 0; i < myFriends.length; i++) {
    checkAge(myFriends[i].name, myFriends.age)
}

function getLength(word) {
    return word.length
}

let wordLength = getLength("Hello World!")

if(wordLength % 2 == 0) {
    console.log("The world is nice and even!")
} else { console.log("The world is an odd place!")}