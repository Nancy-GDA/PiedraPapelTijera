const textMessage = document.querySelector('.text-message')
const battlefield = document.querySelector('.battlefield')
const selectionSection = document.querySelector('#seleccion')

let boxPlayer
let boxPC


//Objet with name,selector id and image path
const figure = [
    {name:'Piedra',id:'btn-rock', src: 'image/piedra.png'},
    {name:'Papel',id:'btn-paper', src: 'image/papel.png'},
    {name:'Tijera',id:'btn-scissors', src: 'image/tijera.png'},
]

for (const element of selectionSection.children) {
    element.addEventListener('click', ({ target }) => {
        const player = target.getAttribute('data-option')
        const src = target.getAttribute('src')
        pcRandom({name: player, src})
    })
}

//function that randomly draws a figure
const getComputerOption = () =>{
    let figureRandom = Math.floor(Math.random()* figure.length)
    return figure[figureRandom]
}

const pcRandom = (player)=>{
    const turnPC = getComputerOption()
    const boxBattle = document.querySelectorAll('.box-battle')
    const marker = document.querySelector('.marker')
    boxBattle[0].classList.add('spinner')
    boxBattle[2].classList.add('spinner')

    setTimeout(() => {
        boxBattle[0].classList.remove('spinner')
        boxBattle[2].classList.remove('spinner')

        boxBattle[2].children[0].src = player.src
        boxBattle[0].children[0].src = turnPC.src
        
    }, 500)

    battlefield.style.display = 'flex'
    marker.style.display = 'flex'
    startGame(player.name, turnPC.name)
}

const startGame = (player, turnPC)=>{
    const restart = document.querySelector('.restart')

    if(player == turnPC){
        textMessage.innerText = 'Empate'

    }else if(player == 'Piedra' && turnPC == 'Tijera'){
        textMessage.innerText = 'Ganaste 🥳'
    }else if(player == 'Papel' && turnPC == 'Piedra'){
        textMessage.innerText = 'Ganaste 🥳'
    }else if (player == 'Tijera' && turnPC == 'Papel'){
        textMessage.innerText = 'Ganaste 🥳'
    }else{
        textMessage.innerText = 'Perdiste 😔'
    }

    restart.style.display = 'flex'
    restart.addEventListener('click',restart)
    
}
resultFinallyPlayer =document.querySelector('#result-player')

    
    
  const courserPC = () =>{
    let livesPc = 5
    resultFinallyPc =document.querySelector('#result-PC')
    for(let i =0;i<livesPc;i++){
     console.log(`soy ${resultFinallyPc}`)
    }
  }
  courserPC()


const restart = () =>{
    location.reload()
}





window.addEventListener('load',startGame)
    












