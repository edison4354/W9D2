import Game from './../ttt_node/game';

class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard();
  }
  
  setupBoard() {
    const ul = document.createElement("ul");
    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++){
            const li = document.createElement("li")
            li.dataset.pos = `[${i},${j}]`
            ul.appendChild(li)
        }
    }
    this.el.appendChild(ul)
    this.handleClick = this.handleClick.bind(this)
    ul.addEventListener("click", this.handleClick)
  }
  
  handleClick(e) {
    const ele = e.target;
    this.makeMove(ele)
  }

  makeMove(square) {
    const pos = JSON.parse(square.dataset.pos)
    square.classList.toggle(this.game.currentPlayer)
    this.game.playMove(pos)

    if (this.game.isOver()){
        this.handleGameOver();
    }
  }
  
  handleGameOver() {
    if (this.game.winner()) {
        alert(`Player ${this.game.winner()} won!`)
    }
  }
}

export default View;