/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var score, roundScore, activePlayer;
score = [0,0];
roundScore = 0;
activePlayer = 0;



document.querySelector('.dice').style.display ='none';

// Setting the values to 0 Using the GetElementsByID
//Recap : 1.while slecting an elements we don't use CSS selection Like  querySelector
//        2.It works inly with ID's
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function(){

    //1. random number
   var dice = Math.floor(Math.random() * 6) +1;

    //2. Display results
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';

    //3.Update the round score If the rolled number was not 1
    if (dice !== 1){
        //Add score
        roundScore += dice;
        document.querySelector('#current-'+activePlayer).textContent = roundScore;
    } else{
        //Next Player
        nextPlayer();


    }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    //Add current score to Glabal Score
    score[activePlayer] += roundScore;

    //Update the UI
    document.querySelector('#score-' + activePlayer).textContent =score[activePlayer];

    //Check if the Player Won the Game
    if (score[activePlayer] >=100){
        document.querySelector('#name-'+ activePlayer).textContent ='Winner!';
        document.querySelector('.dice').style.display ='none';
        document.querySelector('.player-'+ activePlayer +'-panel').classList.add('winner');
        document.querySelector('.player-'+ activePlayer +'-panel').classList.remove('active');
    } else{
        //Next Player
        nextPlayer();
    }
})





function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    //classList Add remove ... Classes
    // togle add a class if does't existe and remove it if it existe
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display ='none';
};



















//document.querySelector('#current-'+ activePlayer).textContent = dice;


