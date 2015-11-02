// generic objecty oriented design
// Singleton
// A class that can only have 1 instance
// Useful when there is limited resources
	// Used for ports, login information
	// In a game, would create only 1 instance of the world
	// Attributes world will have
		// Size
// 3 groups of Patterns
	// Creators
		//Singleton
		//Factory
		//Builder
	// Interactors
	// Structural
		// Adapter
		// Bridge
		// Proxy
		
	
var world = (function(){
	//this class is not available to the rest of the code
	//only called by get instance
	class World{
		constructor(size, terrain){
			this.size = size;
			this.terrain = terrain;
		}
	}
	var worldinstance;
	//the return statement locks the world class
	return {
		getInstance:function(){
			if(worldinstance){
				return worldinstance;
			}else{
				worldinstance = new World(12, 'plains');
				return worldinstance;
			}
		}
	}
})()

world.getInstance();
