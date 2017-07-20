class Container {

	constructor () {
		this.element = document.createElement("div");
		this.id="container";
		this.element.style.width = "600px";
		this.element.style.height="300px";
		this.element.style.backgroundColor="#ff1000";
		this.element.style.position="relative"
		this.element.style.overflow="hidden";
	}

	changeBackground(element) {
		var temp =  Math.floor(Math.random()*4);
		if(temp==0) {
			element.style.backgroundColor="#ff1000";
		}

		else if(temp==1) {
			element.style.backgroundColor="#49ef02";
		}

		else if(temp==2) {
			element.style.backgroundColor="#ff6e00";
		}

		else if(temp==3) {
			element.style.backgroundColor="#faff00";
		}
	}

	append (e)  {
		this.element.append(e);
	} 

	reset (element) {
		element.remove();
	}

}

export default Container;