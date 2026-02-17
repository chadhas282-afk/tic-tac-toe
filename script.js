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

