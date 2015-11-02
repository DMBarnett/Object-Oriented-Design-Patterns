// Factory Object Oriented Design


// 2 classes, car and truck
class Car{
	constructor(color, engine, doors){
		this.color = color;
		this.engine = engine;
		this.doors = doors;
	}
}

class Truck{
	constructor(color, engine, bed){
		this.color = color;
		this.engine = engine;
		this.bed = bed;
	}
}

class VehicleFactory{
	constructor(){
		
	}
	createVehicle(options){
		if(options.vehicleType === 'Car'){
			return new Car(options.color, options.engine, options.doors);
		}else{
			return new Truck(options.color, options.engine, options.bed);
		}
	}
}
