var timer = 3;
var score = 0;
var hitNum = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

function getNewHit(){
    hitNum = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent = hitNum;
}

function makeBubble(){
    var clutter ="";
for(var i=1; i<=100 ; i++){
    num = Math.floor(Math.random()*10);
   clutter += `<div class="bubble">${num}</div>` ;
}

document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
    var timerInt = setInterval(function(){
        if (timer > 0){
            timer--;
        document.querySelector("#timerVal").textContent = timer;
    }
    else {
        clearInterval(timerInt);
        document.querySelector("#pbtm").innerHTML = `<h1 id="gameOver">GAME OVER!!</h1>`;
    }
        }, 1000);
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickedNum = (Number(dets.target.textContent));
    if (clickedNum === hitNum){
        increaseScore();
        makeBubble();
        getNewHit();
    };
})

getNewHit();
runTimer();
makeBubble();