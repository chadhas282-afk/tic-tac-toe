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
    for(let i=0;i<9;i++){
        const cell = document.createElement("button")
        cell.className= "cell"
        cell.type= "button"
        cell.setAttribute('data-index', i);
        cell.setAttribute('aria-label', 'cell ' + (i+1));
        cell.addEventListener("click", onCellClick)
        cell.addEventListener("keydown", (e) => {
          if((e.key === 'Enter' || e.key === ' ') && !cell.disabled) onCellClick({currentTarget:cell});
        });
        boardEl.appendChild(cell);
    }
}

    function onCellClick(e){
      if(!active) return;
      const cell = e.currentTarget;
      const idx = Number(cell.dataset.index);
      if(board[idx]) return;
      board[idx] = current
      cell.textContent = current;
      cell.classList.add('disabled');
      const win = checkWin();
      if(win){
        handleWin(win);
        return;
      }
      if(board.every(Boolean)){
        handleDraw();
        return;
      }
      current = current === 'X' ? 'O' : 'X';
      turnEl.textContent = current;
    }

    function checkWin(){
      for(const combo of wins){
        const [a,b,c] = combo;
        if(board[a] && board[a] === board[b] && board[a] === board[c]){
          return { player: board[a], combo };
        }
      }
      return null;
    }

    function handleWin(result){
      active = false;
      const { player, combo } = result;
      statusEl.innerHTML = `Winner: <strong class="highlight">${player}</strong>`;
      combo.forEach(i => {
        const cell = boardEl.querySelector(`[data-index="${i}"]`);
        if(cell) cell.style.boxShadow = 'inset 0 0 0 3px rgba(255,255,255,0.04), 0 4px 18px rgba(0,0,0,0.6)';
      });
      scores[player] += 1;
      updateScores();
    }

    function handleDraw(){
      active = false;
      statusEl.textContent = 'Draw!';
      scores.T += 1;
      updateScores();
    }

    function updateScores(){
      scoreXEl.textContent = scores.X;
      scoreOEl.textContent = scores.O;
      scoreTEl.textContent = scores.T;
    }

    function resetBoard(){
      board = Array(9).fill('');
      current = 'X';
      active = true;
      turnEl.textContent = current;
      statusEl.textContent = 'Current turn: ';
      statusEl.appendChild(turnEl);
      createBoard();
    }

    resetBtn.addEventListener('click', ()=>{
      resetBoard();
    });

    newGameBtn.addEventListener('click', ()=>{
      scores = { X:0, O:0, T:0 };
      updateScores();
      resetBoard();
    });
    createBoard();
    updateScores();
    setTimeout(()=>boardEl.querySelector('[data-index="0"]').focus(), 100);