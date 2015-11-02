// Builder Object Oriented Design Pattern

class Maze{
	constructor(){
		this.rooms = {};
	}
	
}

class Room{
	constructor(number){
		this.number = number;
		this.walls = {};
	}
}

class Door{
	constructor(status){
		this.status = status;
	}
}

class MazeBuilder{
	constructor(){
		this.buildMaze;
		this.buildDoor;
		this.buildRoom;
		return Maze;
	}
	buildMaze(){
		this.maze = new Maze();
	}
	buildDoor(room, wall, status){
		this.maze.rooms[room].walls[wall] = new Door(status);
	}		
	buildRoom(number){
		this.maze.room[number] = new Room(number);
	}
}