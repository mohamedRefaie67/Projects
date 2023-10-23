let playertext=document.getElementById('PlayerText')
let startbtn=document.getElementById('startbtn')
let boxes=Array.from(document.getElementsByClassName('box'))
let winner=getComputedStyle(document.body).getPropertyValue('--winning-blocks')

const O_TEXT='O'
const X_TEXT="X"
let currentplayer=X_TEXT
let spaces=Array(9).fill(null)


startbtn.addEventListener('click',Start)

let Startgame=()=>{
    startbtn.innerHTML="Restart"
    startbtn.addEventListener('click',restart)
    boxes.forEach(box=>box.addEventListener('click',boxClicked))
}

function boxClicked(e){
    const id=e.target.id
    if(!spaces[id]){
        spaces[id]=currentplayer
        e.target.innerText=currentplayer
        if(playerhaswon()){
            playertext.innerText=`${currentplayer} Win`
            let winning_blocks=playerhaswon()

            winning_blocks.map(box => boxes[box].style.backgroundColor=winner)
            startbtn.innerHTML="Play Again"  
            return 
        }
        


        currentplayer=currentplayer==X_TEXT?O_TEXT:X_TEXT
    }
}

const winn=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
]

function playerhaswon(){
    for(const cond of winn) {
        let [a , b , c] = cond

        if(spaces[a] && (spaces[a] == spaces[b] && spaces[a]==spaces[c])){
            
            return[a,b,c]
            
        }
        
    }
    
    return false
}



startbtn.addEventListener('click',restart)

function restart(){
    spaces.fill(null)
    boxes.forEach(box=>{box.innerText=''
    box.style.backgroundColor=''
})

    playertext.innerText='X O Game'
    currentplayer=X_TEXT
}


function Start(){
    Startgame()
}



