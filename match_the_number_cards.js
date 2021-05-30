if (document.readyState === "loading")
{
    document.addEventListener("DOMContentLoaded", ready)
}
else
{
    ready();
}

/*

*/
function ready()
{
    // Call generateCardNumber() to generate a number for each card.
    generateCardNumber();

    // Create an object which stores the player's score and number of tries.
    const scoreboard = 
    {
        score: 0,
        tries: 0
    };

    // Add an event listener to each of the cards that'll call evaluateChoice().
    document.querySelector(".grid-flip-card").forEach(card => {
        card.addEventListener("click", (event) => {
            evaluateChoice(event.currentTarget, scoreboard);
        })
    });
}

/*
    
*/
function evaluateChoice(card, scoreboard)
{
    // Flip the chosen card.
}

/*
    
*/
function generateCardNumber()
{
    // Get the cards and randomly generate a number.
    let cards = document.querySelector(".grid-flip-card");
    let num = Math.floor(Math.random() * 11);

    // Initialize two cards with the number.
    let firstCard = cards.splice(Math.floor(Math.random() * 4), 1);
    firstCard.querySelector(".flip-card-back").innerText = "" + num;
    let secondCard = cards.splice(Math.floor(Math.random() * 3), 1);
    secondCard.querySelector(".flip-card-back").innerText = "" + num;

    // Initialize the remaining cards with a different number.
    cards.forEach(card => {
        num = Math.floor(Math.random() * 11);
        while (num === Number.parseInt(firstCard.querySelector(".flip-card-back").innerText))
        {
            num = Math.floor(Math.random() * 11);
        }
        card.querySelector(".flip-card-back").innerText = "" + num;
    })

}