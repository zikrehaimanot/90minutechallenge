// document.querySelector('button').forEach((button, i) => {
//   button.addEventListener('click',() => {
//     conosle.log("z")
//   })
// });
let display = document.getElementById('display')
let score = document.getElementById('score')
let compScore = document.getElementById('compScore')

let counterHuman = 0
let counterComp = 0

score.innerHTML = counterHuman
compScore.innerHTML = counterComp

let compPick = ["rock","paper","scissors","spock","lizard"]


let rock = document.getElementById('buttonR')
rock.addEventListener('click',() =>{
  // console.log("z")
// console.log(randomNum)
let randomNum = Math.floor(Math.random() * compPick.length)
let randomPic = compPick[randomNum]
 console.log(randomPic)

  if(randomPic === "rock"){
    display.innerHTML = "Tie"
  }else if (randomPic === "paper") {
    display.innerHTML = "loss"
  }else if (randomPic === "scissors"){
    display.innerHTML = "Win"
  }else if(randomPic === "spock"){
    display.innerHTML = "raporized(you lost)"
  }else if(randomPic === "lizard"){
    display.innerHTML ="you murdered a lizard, You won but you're evil !"
  }
})


let paper = document.getElementById('buttonP')
paper.addEventListener('click',() =>{

  let randomNum = Math.floor(Math.random() * compPick.length)
  let randomPic = compPick[randomNum]
   console.log(randomPic)

    if(randomPic === "rock"){
      display.innerHTML = "Win"
    }else if (randomPic === "paper") {
      display.innerHTML = "tie"
    }else if (randomPic === "scissors"){
      display.innerHTML = "Loss"
    }else if(randomPic === "spock"){
      display.innerHTML = "Win"
    }else if(randomPic === "lizard"){
      display.innerHTML ="Loss"
    }
  })



let scissors = document.getElementById('buttonS')
scissors.addEventListener('click',() =>{
  let randomNum = Math.floor(Math.random() * compPick.length)
  let randomPic = compPick[randomNum]
   console.log(randomPic)

    if(randomPic === "rock"){
      display.innerHTML = "Loss"
    }else if (randomPic === "paper") {
      display.innerHTML = "Win"
    }else if (randomPic === "scissors"){
      display.innerHTML = "Tie"
    }else if(randomPic === "spock"){
      display.innerHTML = "Loss"
    }else if(randomPic === "lizard"){
      display.innerHTML ="Win"
    }
  })



let lizard = document.getElementById('buttonL')
lizard.addEventListener('click',() =>{
  let randomNum = Math.floor(Math.random() * compPick.length)
  let randomPic = compPick[randomNum]
   console.log(randomPic)

    if(randomPic === "rock"){
      display.innerHTML = "Loss"
    }else if (randomPic === "paper") {
      display.innerHTML = "Win"
    }else if (randomPic === "scissors"){
      display.innerHTML = "Loss"
    }else if(randomPic === "spock"){
      display.innerHTML = "Win"
    }else if(randomPic === "lizard"){
      display.innerHTML ="tie"
    }
  })


  // console.log("z4")


let buttonSpock = document.getElementById('buttonSpock')
buttonSpock.addEventListener('click',() =>{
  let randomNum = Math.floor(Math.random() * compPick.length)
  let randomPic = compPick[randomNum]
   console.log(randomPic)

    if(randomPic === "rock"){
      display.innerHTML = "Loss"
    }else if (randomPic === "paper") {
      display.innerHTML = "loss"
    }else if (randomPic === "scissors"){
      display.innerHTML = "win"
    }else if(randomPic === "spock"){
      display.innerHTML = "tie"
    }else if(randomPic === "lizard"){
      display.innerHTML ="loss"
    }
  })


  // console.log("z5")





// Needed Help figuring out how to properly use math.random... code found online below
// // let random = Math.random()
// // let totalPics = compPick.length
// // let randomIndex = Math.floor(random * totalPics)
// // let randomPic = compPick[randomIndex]
