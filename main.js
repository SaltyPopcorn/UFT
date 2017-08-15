var player = {x:5, y:9}
var mapcanvas = document.getElementById("mapcanvas")
var mapcontext = mapcanvas.getContext("2d")
var butW = document.getElementById("buttonWest")
var butN = document.getElementById("buttonNorth")
var butE = document.getElementById("buttonEast")
var butS = document.getElementById("buttonSouth")
function updateMap(){
	
	for(var x = 0; x<10; x++){
		for(var y = 0; y<10; y++){
			if(CurrentDungeon.dict[[x,y]] === undefined){
				mapcontext.fillStyle = "black"
			}else{
				mapcontext.fillStyle = "white"
			}
			mapcontext.fillRect(x*10,y*10,10,10)
			
		}
	}
	mapcontext.fillStyle="blue"
	mapcontext.fillRect(player.x*10+2,player.y*10+2,6,6)
}
butN.onclick = function(){
	if(CurrentDungeon.dict[[player.x,player.y-1]] !== undefined){
		enterRoom(player.x,player.y-1)
	}
}
butE.onclick = function(){
	if(CurrentDungeon.dict[[player.x+1,player.y]] !== undefined){
		enterRoom(player.x+1,player.y)
	}
}
butS.onclick = function(){
	if(CurrentDungeon.dict[[player.x,player.y+1]] !== undefined){
		enterRoom(player.x,player.y+1)
	}
}
butW.onclick = function(){
	if(CurrentDungeon.dict[[player.x-1,player.y]] !== undefined){
		enterRoom(player.x-1,player.y)
	}
}
loadDungeon(dungeonList["Grasslands"],0,0)
updateMap();
console.log()