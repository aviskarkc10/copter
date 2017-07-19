class Animator {

	constructor(container, wallUp, wallDown, player, enemies, gameController, score) {
		
		this.container=container;
		this.wallUp=wallUp;
		this.wallDown=wallDown;
		this.player=player;
		this.enemies=enemies;
		this.gameController=gameController;
		this.score=score;
		let checkKeyDown;
		let checkKeyUp;
		this.moveUp=false;
		this.moveDown=true;
		this.distance=0;
		this.game=true;
	}

	animate() {

			setInterval( () => {
				if(this.game==true){

					for(let enemy of this.enemies){
						this.moveEnemy(enemy);
						this.checkCollision(this.player, enemy);
						if(this.distance>30){
							this.updateSpeed(enemy);
						}
					}

					document.onkeydown=this.checkKeyDown.bind(this);
					document.onkeyup=this.checkKeyUp.bind(this);

					this.movePlayer(this.player);
					this.distance+=0.1;
					this.score.element.innerHTML="Score "+Math.floor(this.distance);

					if(this.distance>30 && Math.floor(this.distance)%10==0) {
						this.changeBackground(this.container)
					
					}
				}

				else {

					setTimeout(() => {

						this.container.element.innerHTML = "The Machine always wins...Eventually";

					}, 2000);
					
				}	

			}, 1000/60);

		
	}

	updateSpeed(enemy) {
		enemy.updateSpeed();
	}

	changeBackground (container) {
		container.changeBackground(container.element);
	}

	checkCollision (player, enemy) {
		
		if(((enemy.x<=player.x+32 && enemy.x>=player.x) && (enemy.y<=player.y && player.y<=enemy.y+80)) 
			|| (player.y<=20) || (player.y+32>=280)
			|| ((player.x<=enemy.x+20 && player.x>=enemy.x) && (player.y<=enemy.y && enemy.y<=player.y+32)) ) {
			this.game=false;
		}
	}

	moveEnemy (object) {
		object.move();
	}

	movePlayer(object) {
		object.movePlayer(this.moveUp);

	}

	checkKeyDown (e){

  		if (e.keyCode == '83') {
       		this.moveUp=true;
       		this.moveDown=false;
		}

		else if(e.keyCode== '13' && this.game==false) {
    		//enter
    		this.container.reset(this.container.element);
    		this.score.reset(this.score.element);

    		this.gameController.reset();
    	}

    	
    }

    checkKeyUp (e) {

  		if (e.keyCode == '83') {
       		this.moveUp=false;
       		this.moveDown=true;

    	}
    }
}

export default Animator;