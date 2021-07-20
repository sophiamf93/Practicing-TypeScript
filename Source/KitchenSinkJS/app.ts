let firstName: string = "sophia";

console.log(firstName);

const numOfStates: number = 50;

console.log(numOfStates);

let val: number = 5 + 4;

console.log(val);

function sayHello(): void {
  alert("Hello World!");
}

sayHello();

function checkAge(name: string, age: number): void {
        if (age < 21) {
            alert( "Sorry " + name + " you aren't old enough to view this page!")
        }
}

checkAge("Charles", 21)
checkAge("Abby", 27)
checkAge("James", 18)
checkAge("John", 17)

let veggies: string[] = ["broccoli", "brussel sprouts", "asparagus", "corn", "potatoes"];

for (let i = 0; i < veggies.length; i++) {
    console.log(veggies[i])
}

interface myInterface {
    name: string, 
    breed: string
};

let pet: myInterface = {
    name: "Archie",
    breed:'Dachshund'
}

console.log(pet.name, pet.breed)

interface person {
    name: string, 
    age: number
};

let myFriends: person[] = [
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

function getLength(word: string): number {
    return word.length
}

let wordLength: number = getLength("Hello World!")

if(wordLength % 2 == 0) {
    console.log("The world is nice and even!")
} else { console.log("The world is an odd place!")}