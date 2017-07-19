class Score {

	constructor() {
		
		this.element = document.createElement("div");
		this.element.style.width = "600px";
		this.element.style.height="40px";
		this.element.style.marginTop="5px";
		this.element.style.backgroundColor="black";
		this.element.style.color="white";
		this.element.style.paddingTop="10px";
		this.element.style.paddingLeft="20px"
		this.element.style.fontSize="20px";
	}

	reset (element) {
		element.remove();
	}
}

export default Score;