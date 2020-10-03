var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = randomNumber(40, 60);
var enemyAttack = 12;

//create a function to start a new game
var startGame = function() {
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    // function to generate a random numeric value
    var randomNumber = function(min, max) {
        var value = Math.floor(Math.random() * (max - min + 1) + min);

        return value;
    };


    for (var i = 0; i < enemyNames.length; i++) {

        if (playerHealth > 0) {

            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));


            var pickedEnemyName = enemyNames[i]; // here we give a name to enemyNames[i] of pickedEnemyName for a more semanthic use


            enemyHealth = 50;


            fight(pickedEnemyName);
        }
        //if player is not alivem break
        else {
            break;
        }
    }

    //after loop ends and we are out of health or enemies
    endGame();
};

//write new fucntion to end the entire game
var endGame = function() {
    window.alert("The game has now ended. Lets see how you did!");

    //add if statement to verify the last enemy of the array
    if (playerHealth > 0) {
        window.alert("Great job, you have survived the game! You now have a score of " + playerMoney + ".");
    } else {
        window.alert("You've lost your robot in battle.");
    }

    // ask player if they like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};


var fight = function(enemyName) {
    while (enemyHealth > 0 && playerHealth > 0) {
        // Add a prompt to ask user to fight or skip battle
        var promptFight = window.prompt("Would you like to Fight or Skip this battle?, Enter 'Fight; or 'SKIP' to choose.");

        // If player chooses to skip
        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm user wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes, leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip  this fight. Goodbye!");
                //subtract money from PplayerMoney for skipping
                playerMoney = Math.max(0, playerMoney - 10);
                shop();
                break;
            }
        }
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth = Math.max(0, enemyHealth - playerAttack);
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");


        //check enemys health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");

            //award player money for winning
            playerMoney = playerMoney + 20;

            //ask if user want to use the store before next round
            var storeConfirm = window.confirm("The fight is over, visit the store before the next round");

            // if yes take them to store
            if (storeConfirm) {
                shop();
            }

            //leave if enemy is dead
            break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = Math.max(0, playerHealth - enemyAttack);
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");


        // check players hea;th
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
};


//go to shop between blattles function
var shop = function() {
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );

    // use switch case to carry out action
    switch (shopOptionPrompt) {
        case 'refill':
        case 'REFILL':
            window.alert("Refilling player's health by 20 for 7 dollars.");
            playerHealth += 20;
            playerMoney -= 7;
            break;
        case 'upgrade':
        case 'UPGRADE':
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            playerAttack += 6;
            playerMoney -= 7;
            break;
        case 'leave':
        case 'LEAVE':
            window.alert('Leaving the store.');
            break;
        default:
            window.alert('You did not pick a valid option. Try again.');
            shop();
            break;
    }
};

// start first game when page loads
startGame();