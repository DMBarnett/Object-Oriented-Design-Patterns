//Object Oriented Design Pattern

//Mix-in-Pattern

function Monster(name, hp, expgiven){
	this.name = name;
	this.hp = hp;
	this.expgiven = expgiven;
	this.exp = 0;
}

function Extends(receiver, passer){
	for(var x in passer){
		receiver[x] = passer[x];
	}
}

Monster.prototype = {};

var hitMixIn = {
	hit:function(target, damage){
		target.hp-=damage;
		if(target.hp<=0){
			this.exp+=target.expgiven;
		}
	}
}

Extends(Monster.prototype, hitMixIn);