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
    // Create an object which stores the player's score and number of tries.
    const scoreboard = 
    {
        score: 0,
        tries: 5,
        numToFind: 0
    };

    // Call generateCardNumber() to generate a number for each card.
    generateCardNumber(scoreboard);

    // Add an event listener to each of the cards that'll call evaluateChoice().
    document.querySelectorAll(".grid-flip-card").forEach(card => {
        card.addEventListener("click", () => {
            /*
                If a card hasn't been flipped, flip it & call evaluateChoice(card, scoreboard).
                Also, ensure the player can only flip it once.
            */
            if (!card.querySelector(".flip-card-inner").classList.contains("flipped"))
            {
                card.querySelector(".flip-card-inner").classList.add("flipped");
                evaluateChoice(card, scoreboard);
            }
        })
    });
}

/*
    
*/
function evaluateChoice(flippedCard, scoreboard)
{
    /*
        Check if the flipped card's number matches the number that's supposed to be found.
        If so, check if the other card that has the number has been flipped. Otherwise,
        reduce the number of tries by 1.
    */
   if (Number.parseInt(flippedCard.querySelector(".flip-card-back").innerText) === scoreboard.numToFind)
   {
       /*
         If the other card that has the number is also flipped, increase the score by 10,
         re-flip the cards that're already flipped, and call generateCardNumber(scoreboard)
         to reset each card's respective number.
       */
        if (document.querySelectorAll(".flipped").length >= 2 && bothMatchingCardsFlipped(scoreboard.numToFind))
        {
            // Increase the score.
            scoreboard.score = scoreboard.score + 10;
            document.querySelector(".score").innerText = scoreboard.score;

            // Re-flip the cards that're already flipped.
            setTimeout(() => {
                document.querySelectorAll(".flipped").forEach(card => {
                    card.classList.remove("flipped");
                });
            }, 2000);

            // Call generateCardNumber(scoreboard) to reset each card's respective number.
            setTimeout(() => {generateCardNumber(scoreboard)}, 2200);
        }
   }
   else
   {
       // Reduce the number of tries by 1.
       scoreboard.tries = scoreboard.tries - 1;
       document.querySelector(".tries").innerText = scoreboard.tries;
   }
}

/*
    
*/
function generateCardNumber(scoreboard)
{
    /*
        Get the cards, randomly generate a number, assign it to the scoreboard's
        numToFind property, & render it where the notifier's located on the webpage.
    */
    let cards = Array.from(document.querySelectorAll(".grid-flip-card"));
    let num = Math.floor(Math.random() * 11);
    scoreboard.numToFind = num;
    document.querySelector(".num-to-find").innerText = num;

    // Initialize two cards with the number.
    let firstCard = cards.splice(Math.floor(Math.random() * 4), 1);
    firstCard[0].querySelector(".flip-card-back").innerText = num;
    firstCard[0].querySelector(".flip-card-back").style.backgroundColor = "green";
    let secondCard = cards.splice(Math.floor(Math.random() * 3), 1);
    secondCard[0].querySelector(".flip-card-back").innerText = num;
    secondCard[0].querySelector(".flip-card-back").style.backgroundColor = "green";

    // Initialize the remaining cards with a different number.
    cards.forEach(card => {
        num = Math.floor(Math.random() * 11);
        while (num === Number.parseInt(firstCard[0].querySelector(".flip-card-back").innerText))
        {
            num = Math.floor(Math.random() * 11);
        }
        card.querySelector(".flip-card-back").innerText = num;
        card.querySelector(".flip-card-back").style.backgroundColor = "red";
    });
}

/*
    
*/
function bothMatchingCardsFlipped(numToFind)
{
    /*
        Create a variable which stores the number of cards containing the number the player
        must find. 
    */
    let num_matching_cards = 0;

    /*
        Loop through the nodelist of flipped cards to find the number of cards containing the
        number the player must find.
    */
    document.querySelectorAll(".flipped").forEach(card => {
        if (Number.parseInt(card.querySelector(".flip-card-back").innerText) === numToFind)
        {
            num_matching_cards = num_matching_cards + 1;
        }
    });

    /*
        If the number of cards containing the number the player must find equals 2, return true.
        Else, return false.
    */
    if (num_matching_cards === 2)
    {
        return true;
    }
    else
    {
        return false;
    }
}