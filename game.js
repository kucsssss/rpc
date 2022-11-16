let playerScore = 0
let compScore = 0
const buttons = document.querySelectorAll('input')

function getCompChoice() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

function game(playerChoice) {
    let compChoice = getCompChoice()
    let result = ""

    if ((playerChoice == 'rock' && compChoice == 'scissors') ||
        (playerChoice == 'paper' && compChoice == 'rock') || 
        (playerChoice == 'scissors' && compChoice == 'paper')){

            playerScore += 1
            result = ('You won! ' + playerChoice + ' beats ' + compChoice + "<br><br>Player score: " + playerScore + "<br>Computer score: " + compScore)

            if (playerScore == 5){
            result += '<br><br>You won the game! Reload the page to play again'
            disableButtons()
            }
        }
    else if (playerChoice == compChoice){
            result = ('It/s a tie. You both chose ' + playerChoice + 
            "<br><br>Player score: " + playerScore + "<br>Computer score: " + compScore)
    }
    else {
        compScore += 1 
        result = result = ('You won! ' + compChoice + ' beats ' + playerChoice + "<br><br>Player score: " + playerScore + "<br>Computer score: " + compScore)

            if (compScore == 5){
                result += '<br><br>I won the game! Reload the page to play again'
                disableButtons()
        }
    }


    document.getElementById('result').innerHTML = result
    return
}

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        game(button.value)
    })
})