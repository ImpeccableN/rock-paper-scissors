function getComputerChoice(){
    let ranNum = Math.random()
    if (ranNum < 0.33){
        return "rock"
    }
    else if (ranNum >= 0.33 && ranNum < 0.66){
        return "paper"
    }
    else {
        return "scissors"
    }
}

function getHumanChoice(){
    const promptMess = "Write something here"
    let choice = prompt("Enter your choice", promptMess)
    if (choice === "rock" || choice === "paper" || choice === "scissors"){
        return choice
    }
    else{
        return "ERROR"
    }
}

console.log(getComputerChoice());
console.log(getHumanChoice())