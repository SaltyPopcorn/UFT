var dungeonList = {}
var CurrentDungeon
function newDungeon(name,dict){
	var d = {}
	d.name = name;
	d.dict = dict;
	dungeonList[name] = d;
	return d;
}
function newRoom(desc,choices,things,func){
	var room = {}
	room.choices = choices
	room.things = things
	room.desc = desc
	room.func = func
	return room;
}
function loadDungeon(dungeon, x, y){
	CurrentDungeon = dungeon;
	enterRoom(x,y)
}
function enterRoom(x,y){
	player.x = x
	player.y = y
}
newDungeon("Grasslands",{
	"0,0": newRoom("The soft grass beneath you tickles your feet.",[],[],function(){}),
	"0,1": newRoom("You're getting close to a forest.",[],[],function(){})
	})