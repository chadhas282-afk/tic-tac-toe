const boardEl = document.getElementById("board")
const statusEL = document.getElementById("status")
const turnEl= document.getElementById("turn")
const resetBtn= document.getElementById("resetBtn")
const newGameBtn= document.getElementById("newGameBtn")
const scoreXEl= document.getElementById("scoreX")
const scoreOEl= document.getElementById("scoreO")
const scoreTEl= document.getElementById("scoreT")
let board = Array(9).fill("")
let current = "X"
let active = true
let score = {X: 0, O:0, T:0}
const wins = [[0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]]
function createBoard(){
    boardEl.innerHTML= ""
    for(let i=0, i<9, )
}
