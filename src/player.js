class Player {

	constructor() {
		this.x= 60;
		this.y=25;
		this.element = document.createElement("div");
		this.element.style.position= "absolute";
		this.element.style.left=`${this.x}px`;
		this.element.style.top = `${this.y}px`;
		this.img=document.createElement("img");
		this.img.src="./images/helicopter.png";
		this.element.appendChild(this.img);

	}

	movePlayer(moveUp) {
		if(moveUp){

			this.y-=2;
		}
		else {
			this.y+=4;
		}
		this.element.style.top = `${this.y}px`;

	}
}

export default Player;