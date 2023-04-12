console.log("Welcome to Tic Tac Toe")
let music = new Audio("/Files/music.mp3")
let turnAudio= new Audio("/Files/ting.mp3")
let gameoverAudio = new Audio("/Files/gameover.mp3")
let turn = "X"
let isgameover = false;

// Function to change turn
const changeturn=()=>{
    return turn === "X" ? "0" : "X"
}

const checkWin=()=>{
let boxtext = document.getElementsByClassName("box-text")
let win =[
    [0,1,2,8,5,0],
    [3,4,5,8,15,0],
    [6,7,8,8,25,0],
    [0,3,6,-2,15,90],
    [1,4,7,8,15,90],
    [2,5,8,17,15,90],
    [0,4,8,7.8,15,45],
    [2,4,6,7.2,15,135],
]
    win.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.getElementsByClassName('info')[0].innerText = "Winner is: " + boxtext[e[0]].innerText
            isgameover = true
            document.querySelector('.image-box').getElementsByTagName("img")[0].style.width="200px"
            gameoverAudio.play()
            document.querySelector('.line').style.width="25vw"
            document.querySelector('.line').style.transform=`translate(${e[3]}vw,${e[4]}vw)rotate(${e[5]}deg)`
        }
    })
}

// Game Logic
let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.box-text')
    element.addEventListener('click' , ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn
            turn = changeturn()
            turnAudio.play()
            checkWin()
            if(!isgameover){
            document.getElementsByClassName('info')[0].innerText = "Now Turn for " + turn
            }
        }
    })
})
reset.addEventListener("click", ()=>{
    let boxtext = document.querySelectorAll('.box-text')
    Array.from(boxtext).forEach(e =>{
        e.innerText = ""
    })
    turn = "X"
    isgameover = false;
    document.getElementsByClassName('info')[0].innerText = "Now Turn for " + turn
    document.querySelector('.image-box').getElementsByTagName("img")[0].style.width="0px"
    document.querySelector('.line').style.width="0px"

})