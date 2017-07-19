class Enemy {

	constructor (a) {
		this.x=a;
		this.y=Math.floor(Math.random()*180)+20;
		this.element = document.createElement("div");
		this.element.style.width = "20px";
		this.element.style.height="80px";
		this.element.style.backgroundColor="pink";
		this.element.style.position="absolute";
		this.element.style.top=`${this.y}px`;
		this.element.style.left=`${this.x}px`;
		this.speed=2;
	}

	updateSpeed() {
		this.speed=3;
	}

	append (e)  {
		this.element.append(e);
	} 

	move() {

		if(this.x<=-20){
			this.x=780;
			this.y=Math.floor(Math.random()*180)+20;
			this.element.style.top=`${this.y}px`;
		}

		else {
			this.x-=this.speed;
		}
		console.log(this.speed);

		this.element.style.left=`${this.x}px`;
	}
}

export default Enemy;