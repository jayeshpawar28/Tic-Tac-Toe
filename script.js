let win = new Audio('win.mp3')
let audioclick = new Audio('win.mp3')
let gameoveraudio = new Audio('gameover.mp3')
let click = "X"
let gameover = false

//change click 
function changeClick() {
    return click === "X"?"O": "X"
}

//check for win
const checkWin = ()=> {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach(e => {
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== '')){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + ' Won'
            gameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '200px'
        }
    })
}

//game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click', ()=> {
        if(boxtext.innerHTML === ''){
            boxtext.innerHTML = click;
            click = changeClick();
            //audioclick.play();
            checkWin();
            if(!gameover){
                document.getElementsByClassName('info')[0].innerText = 'Turn For ' + click;
            }
        }
    })
})

reset.addEventListener('click', () => {
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerText = ''
    });
    click = 'X';
    gameover = false;
    document.getElementsByClassName('info')[0].innerText = 'Turn For ' + click;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0px'
})
