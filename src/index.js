import Container from './container'
import Walls from './walls'
import Player from './player'
import Enemy from './enemy'
import Score from './score'
import Animator from './animator'

class GameController {

	constructor(e) {
		this.element=document.getElementById(e);
		let container = new Container();
		this.element.appendChild(container.element);

		let wallUp = new Walls ("up");
		let wallDown = new Walls("down");
		container.append(wallUp.element);
		container.append(wallDown.element);

		let player = new Player();
		container.append(player.element);

		let score =  new Score();
		this.element.appendChild(score.element);

		let enemies = [];
		let a=580;
		for(let i=0; i<4; i++) {
			enemies[i]=new Enemy(a);
			a=a+200;
			container.append(enemies[i].element)
		}
		
		let animator = new Animator(container, wallUp, wallDown, player, enemies, this, score);
		animator.animate();


	}

	reset() {
		// while (gameController.element.hasChildNodes()) {
  //   		gameController.element.removeChild(gameController.element.lastChild);
		// }

		gameController = new GameController("gameController");
	}
}

let gameController=new GameController("gameController");


