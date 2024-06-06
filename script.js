const choices = ["rock","papper","scissor"]
const playerDisplay = document.getElementById("playerDisplay")
const computerDisplay = document.getElementById("computerDisplay")
const results = document.getElementById("Result");
const playerScoreDisplay = document.getElementById("playerScores")
const computerScoreDisplay = document.getElementById("computerScores")

let playerScore = 0
let computerScore = 0

function playGame(playerSelected){

    console.log(playerSelected)

    const computerChoice= choices[Math.floor( Math.random() * 3)]
    console.log(computerChoice,"c")
    let result = "";


    if(playerSelected === computerChoice){
        result = "Its a Draw"
    }else{
        switch(playerSelected){
            case "rock":
            result = (computerChoice === "scissor" ? "You win" : "You lose")
            break;

            case "papper":
                result = (computerChoice === "rock" ? "You win" : "You lose")
                break;
            
            case "scissor":
                result = (computerChoice === "papper" ? "You win" : " You lose")
                break;
        }
    }

    switch(result){
        case "You win":
            playerScore ++
            break;

        case "You lose":
            computerScore ++
            break;    

            
    }

    console.log(result)
    playerDisplay.innerHTML = `PLAYER: ${playerSelected}`
    computerDisplay.innerHTML = `COMPUTER: ${computerChoice}`
    results.innerHTML = `Result: ${result}`
    playerScoreDisplay.innerHTML = `Player score: ${playerScore}`
    computerScoreDisplay.innerHTML = `Computer score: ${computerScore}`
}