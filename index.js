const textMessage = document.querySelector('.text-message')
const battlefield = document.querySelector('.battlefield')
const selectionSection = document.querySelector('#seleccion')
const resultFinallyPC = document.querySelector('#result-PC')
const resultFinallyPlayer = document.querySelector('#result-player')

const MAX_POINTS = 5
let count_turns = 0

//Objet with name,selector id and image path
const figure = [
    {name:'Piedra',id:'btn-rock', src: 'image/piedra.png'},
    {name:'Papel',id:'btn-paper', src: 'image/papel.png'},
    {name:'Tijera',id:'btn-scissors', src: 'image/tijera.png'},
]
const btnListener = ({ target }) => {
    const player = target.getAttribute('data-option')
    const src = target.getAttribute('src')
    pcRandom({name: player, src})
}

for (const element of selectionSection.children) {
    element.addEventListener('click', btnListener)
}

//function that randomly draws a figure
const getComputerOption = () =>{
    let figureRandom = Math.floor(Math.random()* figure.length)
    return figure[figureRandom]
}
    
const pcRandom = (player)=>{
    const turnPC = getComputerOption()
    const marker = document.querySelector('.marker')
    
    const boxBattle = document.querySelectorAll('.box-battle')
    boxBattle[0].children[0].style.display = 'none'
    boxBattle[2].children[0].style.display = 'none'
    boxBattle[0].classList.add('spinner')
    boxBattle[2].classList.add('spinner')
   
    setTimeout(() => {
        boxBattle[0].children[0].src = turnPC.src
        boxBattle[2].children[0].src = player.src
        boxBattle[0].classList.remove('spinner')
        boxBattle[2].classList.remove('spinner')
        boxBattle[0].children[0].style.display = 'flex'
        boxBattle[2].children[0].style.display = 'flex'
    }, 1000)
    
    startGame(player.name, turnPC.name)
    battlefield.style.display = 'flex'
    marker.style.display = 'flex'
}

const startGame = (player, turnPC)=>{
    count_turns += 1
    

    setTimeout(()=>{
        if(player == turnPC){
        }else if(player == 'Piedra' && turnPC == 'Tijera'){
            resultFinallyPlayer.innerText++
        }else if(player == 'Papel' && turnPC == 'Piedra'){
            resultFinallyPlayer.innerText++
        }else if (player == 'Tijera' && turnPC == 'Papel'){
            resultFinallyPlayer.innerText++
        }else{
            resultFinallyPC.innerText++
        }
        const playerPoints = Number(resultFinallyPlayer.innerText)
        const pcPoints = Number(resultFinallyPC.innerText)
        if (count_turns == MAX_POINTS) 
            return messageFinally(playerPoints, pcPoints) 

        if (MAX_POINTS-playerPoints == 2 || MAX_POINTS-pcPoints == 2)
            return messageFinally(playerPoints, pcPoints)
    },1200)
}

const messageFinally = (playerPoints, pcPoints) =>{
    let finallyResult = document.querySelector('.finally-result')
    let selection = document.querySelector('#seleccion')
    const message = playerPoints > pcPoints ? 'Gansate 🥳' : 'La computadoraa gano 😔'
    finallyResult.innerText = message
    finallyResult.style.display = 'block'
    
    for (const element of selectionSection.children) {
        element.style.cursor = 'auto'
        element.removeEventListener('click', btnListener)
    }

    restart()
    selection.classList.add('blur')
}

const restart = () =>{
    const btnRestart = document.querySelector('.restart')
    btnRestart.style.display = 'flex'
    btnRestart.addEventListener('click',()=>{
        location.reload()
    })
    
    
}












