const rule = {'rock':'scissor', 'scissor':'paper', 'paper':'rock'};
const choices = ['rock','paper','scissor'];

const playerChoiceDivs = document.querySelectorAll('.player-choices button') 
const winnerDiv = document.querySelector('.result-winner');
const resultDiv = document.querySelector('.result-msg');

playerChoiceDivs.forEach((choice)=>{
    choice.addEventListener('click',(event)=>{
        const player = event.target.className;
        const comp = choices[Math.floor(Math.random()*3)];
        const winner = getWinner(player,comp);
        winnerDiv.textContent = winner.winner;
        resultDiv.textContent = winner.reason;
    })
})

//0 = draw, 1 = player1, -1 = computer
function getWinner(player,comp){
    if(player=== comp)
        return {winner:'Draw!', reason:`Both picked ${player}`};
    if(rule[player]===comp){
        return {winner:'Player!', reason:`${player} beats ${comp}`};
    }
    else    
        return {winner:'Computer!', reason:`${comp} beats ${player}`};
}

