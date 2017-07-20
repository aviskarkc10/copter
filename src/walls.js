class Walls {

	constructor(type) {
		this.type=type;
		this.element = document.createElement("div");
		this.element.style.width = "600px";
		this.element.style.height="20px";
		this.element.style.backgroundColor="black";
		this.element.style.position = "absolute";
		if(this.type=="down") {
			this.element.style.top="280px";
		}
	}
}

export default Walls;