
let cards = []
let sum = 0
let isAlive = false
let message = ""
let hasTarotJack = false
let player = {
    name: "Aliyan",
    luck: 100
}
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent += player.name + " " + "Luck: " + player.luck

function getRandomCard(){
    // if 1     -> return 11
    // if 11-13 -> return 10
    let randomNumber = Math.floor(Math.random() * 13) + 1
    console.log(randomNumber)
    if (randomNumber > 10) {
        return 10
    } else if(randomNumber === 1)
    {
        return 11
    }
    else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    hasTarotJack = false
    let firstCard = getRandomCard() 
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() 
{
    cardEl.textContent = "Cards: " 
    for (i = 0; i < cards.length; i++)
    {
        cardEl.textContent += cards[i] + " "
    }

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    }
    else if(sum === 21) {
        message = "You've got Tarot-Jack!" 
        hasTarotJack = true 
    }
    else {
        message = "You're out of the game!"
        isAlive = false
    }
    
    sumEl.textContent = "Sum: " + sum
    messageEl.textContent = message
}

function drawCard() {
    if(hasTarotJack === false && isAlive === true) {
        let drawnCard = getRandomCard()
        sum += drawnCard
        cards.push(drawnCard)
        renderGame()
    }
    
}

