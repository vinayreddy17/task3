
// Create your own resume data in JSON format
const myResume = { //THIS IS AN OBJECT
    my_Name: "Amireddy Vinay Kumar Reddy",
    Email: "vinayreddy0103@gmail.com",
    Date_of_birth: "16.06.2000",
    Gender: "Male",
    Nationality: "Indian",
    Marital_Status: "Single",
    Languages_known: ["Telugu", "English", "Hindi"],
    Age: 24,
    Marks: { "B.Tech - Chemical Engineering": "CGPA 7.9" },
    Qualification: "B.Tech - Chemical Engineering",
    Years_of_Experience: 2,
    Software_proficiency: ["Javascript", "HTML", "CSS", "SQL", "C", "Redis", "Node.js"],
    Key_strength: ["Analytical Thinking", "Adaptability", "Grit"],
    Personal_hobbies: ["Badminton", "Chess", "Trading", "Movies", "Art"]
  };
  
  
  const resumeJSON = JSON.stringify(myResume);

  console.log(resumeJSON);
console.log("#============================================#");


// For the given JSON iterate over all for loops (for, for in, for of, forEach)

const count = Object.keys(myResume);

// for loop
for (let i = 0; i < count.length; i++) {
  console.log(myResume[count[i]]);
}
console.log("#============================================#");

// for in
for (let keys in myResume) {
  console.log(myResume[keys]);
}
console.log("#============================================#");
// for Of
for (let i of count) {
  console.log(myResume[i]);
}
console.log("#============================================#");
// for each

count.forEach((value) => console.log(myResume[value]));

