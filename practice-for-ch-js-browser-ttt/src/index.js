import View from './ttt-view';
import Game from './../ttt_node/game';

document.addEventListener("DOMContentLoaded", () => {
  // Your code here
  const cavansEl = document.getElementById("canvas")
  const game = new Game();
  const view = new View(game, cavansEl);
});