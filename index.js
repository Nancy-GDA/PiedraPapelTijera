const btnRock = document.querySelector('#btn-rock')
const btnPaper = document.querySelector('#btn-paper')
const btnScissor = document.querySelector('#btn-scissors')
const textMessage = document.querySelector('.text-message')
const battlefield = document.querySelector('.battlefield')
let player 
let turnPC

const figure = [
    {name:'Piedra',img:'image/piedra.png'},
    {name:'Papel',img:'image/papel.png'},
    {name:'Tijera',img:'image/tijera.png'},
]

btnRock.addEventListener('click',()=>{
    player = 'Piedra'
    pcRandom()
    console.log(player)
})

btnPaper.addEventListener('click',()=>{
    player = 'Papel'
   pcRandom()
    console.log(player)
})

btnScissor.addEventListener('click',()=>{
    player = 'Tijera'
    pcRandom()
    console.log(player)
})

//Funcion aleatoria de las figuras
const aleatorio = () =>{
    let figureRandom = Math.floor(Math.random()* figure.length)
    let valueRandom = figure[figureRandom].name
    console.log(valueRandom)
}


const pcRandom = ()=>{
    let turnRandom = aleatorio()
    if(turnRandom == figure[0].img){
        turnPC = 'Piedra'
    }else if(turnRandom == figure[1].img){
        turnPC = 'Papel'
    }else if(turnRandom == figure[2].img){
        turnPC = 'Tijera'
    }
  combat()
}


const combat = ()=>{
    if(player == turnPC){
        textMessage.innerText = 'Empate'
    }else if(player == figure[0].img && turnPC == figure[2].img){
        textMessage.innerText = 'Ganaste 🥳'
    }else if(player == figure[1].img && turnPC == figure[0].img){
        textMessage.innerText = 'Ganaste 🥳'
    }else if (player == figure[2].img && turnPC ==figure[1].img){
        textMessage.innerText = 'Ganaste 🥳'
    }else{
        textMessage.innerText = 'Perdiste😔'
    }

  
}








