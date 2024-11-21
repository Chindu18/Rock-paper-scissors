
let score = JSON.parse(localStorage.getItem('result'))|| { 
    win:0,
    loss:0,
    tie:0
   }

/*
if(!score){
   score={ 
    win:0,
    loss:0,
    tie:0
   }
}
   */






// compare the moves

function pick(playermove) {

    let computermove = cm()
    let result = ""
    
    //for rock
    if (playermove === 'rock') {
        if (computermove === 'rock') {
            result = "tie"
        }
        else if (computermove === 'paper') {
            result = "you loss"
        }
        else if (computermove === 'scissors') {
            result = "you win"
        }

    }
    //FOR PAPER
    else if (playermove === 'paper') {
        if (computermove === 'paper') {
            result = "tie"
        }
        else if (computermove === 'scissors') {
            result = "you loss"
        }
        else if (computermove === 'rock') {
            result = "you win"
        }
    }
    //FOR SCISSORS
    else if (playermove === 'scissors') {
        if (computermove === 'paper') {
            result = "you win"
        }
        else if (computermove === 'scissors') {
            result = "tie"
        }
        else if (computermove === 'rock') {
            result = "you loss"
        }
    }
    //result print
if (result === "you win") {
    score.win += 1;
}
else if (result === "you loss") {
    score.loss += 1;
}
else if (result === "tie") {
    score.tie += 1;
}
localStorage.setItem('result',JSON.stringify(score))

    alert(`you select ${playermove}. computer select  ${computermove}.  so RESULT IS  ${result}
        win:${score.win}. loss:${score.loss}. tie:${score.tie} `)
    
   
}
//decide a computer move

function cm() {
    const randomnum = Math.floor(Math.random() * 3) + 1

    if (randomnum === 1) {
        computermove = 'rock'
    }
    else if (randomnum === 2) {
        computermove = 'paper'
    }
    else if (randomnum === 3) {
        computermove = 'scissors'
    }
    return computermove
}





