let myName = "sophia foreman";

console.log("Name: " + myName.toUpperCase());

let myjob = "Full Stack Engineer/ Web Development";

console.log("Career: " + myjob);

let description = "Young professional working towards career goals in tech.";

console.log("Description: " + description);

console.log(" ")

let interest = "My Interests:";

console.log(interest);

let interests = [
    "Movies & Series",
    "Animals",
    "Art",
    "Candle Making",
    "Design",
];

for (let i = 0; i < interests.length; i++) {
    console.log(interests[i]);
}

console.log(" ")

let preJobEx = "My Previous Experience:"

console.log(preJobEx)

function displayPosition(jobTitle, companyName, description) {
    console.log(jobTitle, companyName, description)
}

displayPosition("Bartender", "at Bamboo on 2nd", "- Made craft cocktails and took orders.")
displayPosition("Attorney's assistant", "with Daniel Chambers LLC", "- Organized filing and marked up billing work.")
displayPosition("Hostess", "at Five Bar", "- Greated customers while busing and reseting tables and seating.")

console.log(" ")

let skills = "My Skills:"

console.log(skills)

function displaySkill(boo1, skill) {
let isSkillCool = boo1 ? "BAM: " : " ";
console.log(isSkillCool + skill)
}

displaySkill(true, "Artist")
displaySkill(false, "Communication Skills")
displaySkill(true, "Singing")
displaySkill(true, "Cooking")
displaySkill(false, "Detail oriented")