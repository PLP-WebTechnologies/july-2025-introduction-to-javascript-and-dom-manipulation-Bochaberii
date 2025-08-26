let age = 18;
let name = "Sandra";

if (age >18 ) {
    console.log("You are an adult");
} 
else {
    console.log("You are not an adult");
}

function add(a,b) {
    return a + b;
}

console.log(add(9,8));

for (let i =0; i < 5; i++){
    console.log("Number: " + i);
}

document.getElementById("demo").textContent = "Text changed!";

document.getElementById("para").style.backgroundColor = "lightblue";

document.body.style.backgroundColor = "pink"

let newDiv = document.createElement("div");
newDiv.textContent = "I am a new div";
document.body.appendChild(newDiv);

let fruits = ["Apple", "Grape", "Banana"];
for (let fruit of fruits) {
    console.log("Fruit: "+ fruit);

}

function greet(person) {
    return "Hello, " + person + "!";
}
document.getElementById("greetBtn").addEventListener("click", function() {
    const name = document.getElementById("nameInput").value;
    document.getElementById("demo").textContent = greet(name);
})