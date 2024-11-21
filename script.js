function pick(playermove) {
    
    let computermove=cm()
    let result = ""


   

    //for rock
    if (playermove === 'rock') {
        if (computermove === 'rock') {
            result = "tie"
        }
        else if (computermove === 'paper') {
            result = "you lose"
        }
        else if (computermove === 'scissors') {
            result = "you win"
        }

    }
    else if(playermove==='paper'){
        if (computermove === 'paper') {
            result = "tie"
        }
        else if (computermove === 'scissors') {
            result = "you lose"
        }
        else if (computermove === 'rock') {
            result = "you win"
        }
    }
    else if(playermove==='scissors'){
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

    alert(`you select ${playermove}, computer select ${computermove}, so ${result}`)
}

function cm(){
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



function greet(name){
    if(name===undefined){
        console.log(`hello there!`)
    }
    else{
        console.log(`hello ${name}`)
    }

}
greet("chin")
greet('bala')
greet('praveen')
greet()



function convertToFahrenheit(celsius){

return (celsius*9/5)+32
}
 console.log(convertToFahrenheit(25))

 function convertTocelsius(fahrenheit){

    return (fahrenheit-32)*5/9
    }
     console.log(convertTocelsius(86))

function convertTrmperature(value,unit='C'){
  if(unit==="c" || unit==='C'){
    return (value*9/5)+32
  }
  else if(unit==="F" || unit==='f'){
    return (value-32)*5/9
  }
}
console.log(convertTrmperature(86,'F'))

    

const pr={
    name:"chin",
    age:20
}
console.log(typeof(pr.age))
pr.name1="siva"
console.log(pr)
delete pr.name1
console.log(pr)
