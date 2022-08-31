const textMessage = document.querySelector('.text-message')
const battlefield = document.querySelector('.battlefield')
const selectionSection = document.querySelector('#seleccion')

let boxPlayer
let boxPC

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

const getComputerOption = () =>{
    let figureRandom = Math.floor(Math.random()* figure.length)
    return figure[figureRandom]
}

const pcRandom = (player)=>{
    const turnPC = getComputerOption()
    const boxBattle = document.querySelectorAll('.box-battle')
    boxBattle[0].classList.add('spinner')
    boxBattle[2].classList.add('spinner')

    setTimeout(() => {
        boxBattle[0].classList.remove('spinner')
        boxBattle[2].classList.remove('spinner')

        boxBattle[0].children[0].src = turnPC.src
        boxBattle[2].children[0].src = player.src
    }, 500)

    battlefield.style.display = 'flex'
    startGame(player.name, turnPC.name)
}

const startGame = (player, turnPC)=>{
    console.log(figure.name)
    if(player == turnPC){
        textMessage.innerText = 'Empate'
    }else if(player == figure.name && turnPC == figure.name){
        textMessage.innerText = 'Ganaste 🥳'
    }else if(player == figure.name && turnPC == figure.name){
        textMessage.innerText = 'Ganaste 🥳'
    }else if (player == figure.name && turnPC ==figure.name){
        textMessage.innerText = 'Ganaste 🥳'
    }else{
        textMessage.innerText = 'Perdiste ga tu madre 😔'
    }

    
}










