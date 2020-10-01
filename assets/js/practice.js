window.alert("This is an alert! JavaScript is running!");

var playerName = window.prompt("What is your robot's name?");
console.log(playerName);

console.log("This logs a string, good for leaving yourself a message");
//this will do a math
console.log(10 + 10);
console.log("Our robot's name is " + playerName);

var playerName = "Tony the Robot";
console.log("Tony the Robot" + " is ready for battle!");

console.log(playerName + " is ready for battle!");

//this creates a function named "fight"

function fight() {
    window.alert("The fight has begun " + playerName + "!");
}
//fight()



var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[enemyNames.length - 2]);
for (var i = 0; i < 3; i++) {
    console.log("apple", i);
}

for (var x = 0; x < enemyNames.length; x++) {
    console.log(enemyNames[x])
}

for (var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
}