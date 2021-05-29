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

    // Initialize a card w/the number.
    cards[Math.floor(Math.random() * 4)].innerText = "" + num;

    // Initialize another card w/the number.
}