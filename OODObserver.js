'use strict'
//OOD Observer Pattern

class Observable{
	constructor(listeners, events){
		this.listeners = [];
	}
	addListener(fn){
		this.listeners.push(fn);
	}
	removeListener(fn){
		var index = this.listeners.indexOf(listener);
		this.listeners.splice(index, 1);
	}
	emitEvents(event, data){
		for(var listener in this.listeners){
			this.listeners[listener](event, data);
		}
	}
}

var Button = new Observable();
Button.addListener(function buttonPush(pushed, data){console.log(pushed, data);})
Button.addListener(function onHover(hover, data){if(hover == "hover"){console.log("Theres a button here!", data);}})
Button.emitEvents("click", "Clicked Once");
Button.emitEvents("hover", "Buy Now!");