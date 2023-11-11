const rule = {'rock':'scissor', 'scissor':'paper', 'paper':'rock'};
const choices = ['rock','paper','scissor'];
let rounds=0;

const btnPlayerChoices = document.querySelectorAll('.player-choices-container button') 
const btnFiveRound = document.querySelector('.btn-five-round');
const btnContinue = document.querySelector('.btn-continue');
const btnQuit = document.querySelector('.btn-quit');

const playerChoiceContainer = document.querySelector('.player-choices-container');
const startModesContainer = document.querySelector('.start-modes-container');
const continueContainer = document.querySelector('.continue-container');
const resultContainer = document.querySelector('.result-container');
const winnerDiv = document.querySelector('.result-winner');
const resultDiv = document.querySelector('.result-msg');
const btnStart = document.querySelector('.btn-start');



//start btn
btnStart.addEventListener('click', ()=>{
    btnStart.style.display='none';
    setTimeout(()=>{startModesContainer.style.display='flex'},200);
})

//5 round mode
btnFiveRound.addEventListener('click',()=>{
    startModesContainer.style.display='none';
    playerChoiceContainer.style.display='flex';
    resultContainer.style.display='block';
    resultDiv.textContent = 'pick your poision';
    rounds=5;
});

//continue
btnContinue.addEventListener('click', ()=>{
    continueContainer.style.display='none';
    playerChoiceContainer.style.display='flex';
    winnerDiv.style.display='none';
    resultDiv.textContent = 'pick your poision';    
})

//quit
btnQuit.addEventListener('click', ()=>{
    playerChoiceContainer.style.display='none';
    continueContainer.style.display='none';
    startModesContainer.style.display='none';
    resultContainer.style.display='none';
    btnStart.style.display='block';
})
btnPlayerChoices.forEach((choice)=>{
    choice.addEventListener('click',(event)=>{
        playerChoiceContainer.style.display='none';
        const player = event.target.className;
        const comp = choices[Math.floor(Math.random()*3)];
        const winner = getWinner(player,comp);
        winnerDiv.textContent = winner.winner;
        resultDiv.textContent = winner.reason;
        winnerDiv.style.display='flex';
        resultDiv.style.display='flex';
        continueContainer.style.display='flex';
    })
})

//0 = draw, 1 = player1, -1 = computer
function getWinner(player,comp){
    if(player=== comp)
        return {winner:'It\'s Draw!', reason:`Both picked ${player}`};
    if(rule[player]===comp){
        return {winner:'Player Win!', reason:`${player} beats ${comp}`};
    }
    else    
        return {winner:'Computer Win!', reason:`${comp} beats ${player}`};
}

