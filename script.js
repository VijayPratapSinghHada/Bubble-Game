var timer = 60;
var score = 0;
var hitrn = 0;

// jispe click karoge wo element par event raise hoga, aur event listener naa milne par event element ke parent par listener dhundhega, waha bhi naa milne par event parent ke parent ke parent par listener dhundhega

function increaseScore() {
    score += 10;
    document.querySelector('#scoreval').textContent = score;
}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector('#hitval').textContent = hitrn;
}

function makeBubble() {
    var clutter = ""; // empty variable 

    for (var i = 1; i <= 150; i++) {
        var rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`; // `` - things adds inside back-tick. 
    }


    document.querySelector("#pbtm").innerHTML = clutter;  // update html by js. by using for loop & math funcs in js. 

}

function runTimer() {

    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector('#timerval').textContent = timer;
        }
        else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000);
}

document.querySelector("#pbtm")
    .addEventListener("click", function (dets) {
        var clickednum = Number(dets.target.textContent);
        if (clickednum === hitrn) {
            increaseScore();
            makeBubble();
            getNewHit();
        }
    });

getNewHit();
runTimer();
makeBubble();