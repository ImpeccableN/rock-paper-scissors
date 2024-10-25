let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    let ranNum = Math.random();
    if (ranNum < 0.33){
        return "rock";
    }
    else if (ranNum >= 0.33 && ranNum < 0.66){
        return "paper";
    }
    else {
        return "scissors";
    }
};

function getHumanChoice(choice){
    const promptMess = "Write something here";
    choice = choice.toLowerCase()
    //let choice = prompt("Enter your choice", promptMess);
    if (choice === "rock" || choice === "paper" || choice === "scissors"){
        return choice;
    }
    else{
        return "ERROR";
    }
};

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase()
    if (humanChoice === "rock"){
        if (computerChoice === "paper"){
            computerScore++;
            return "You lose! Paper beats Rock!";
            
        } else if (computerChoice === "scissors") {
            humanScore++;
            return "You win! Rock beats Scissors!";
            
        } else if (computerChoice === "rock"){
            return "Tie!";
        }
    }
    else if (humanChoice === "paper"){
        if (computerChoice === "paper"){
            return "Tie!";
        } else if (computerChoice === "scissors") {
            computerScore++;
            return "You lose! Scissors beat Paper!";
            
        } else if (computerChoice === "rock"){
            humanScore++;
            return "You win! Paper beats Rock!";
            
        }
    }
    else if (humanChoice === "scissors"){
        if (computerChoice === "paper"){
            humanScore++;
            return "You win! Scissors beat Paper!";
            
        } else if (computerChoice === "scissors") {
            return "Tie!";
        } else if (computerChoice === "rock"){
            computerScore++;
            return "You lose! Rock beats Scissors!";
            
        }
    }
}

const body = document.querySelector("body");

const paperButton = document.createElement("button");
paperButton.textContent = "Paper";

const rockButton = document.createElement("button");
rockButton.textContent = "Rock";

const scissorsButton = document.createElement("button");
scissorsButton.textContent = "Scissors";



body.appendChild(paperButton);
body.appendChild(rockButton);
body.appendChild(scissorsButton);

const buttonList = document.querySelectorAll("button");
buttonList.forEach((button) => {
    button.addEventListener("click", () => {
        const newDiv = document.createElement("div");
        const p = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
        const compChoice = getComputerChoice();
        p.textContent = "Your choice: " + button.textContent;
        p2.textContent = "Computer's choice: " + compChoice;

        const result = playRound(button.textContent, compChoice);
        p3.textContent = result;


        newDiv.appendChild(p);
        newDiv.appendChild(p2);
        newDiv.appendChild(p3);
        body.appendChild(newDiv);

        


    })
})

//console.log(getComputerChoice());
//console.log(getHumanChoice());