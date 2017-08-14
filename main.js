var CurrentDungeon = newDungeon( //FIXME (Old dungeon def)
[
[1,0,1,1,1,1,1,1,1,1],
[1,0,0,0,0,0,1,1,1,1],
[1,1,1,1,1,0,1,1,1,1],
[1,1,1,1,1,0,1,1,1,1],
[1,0,0,0,1,0,1,1,1,1],
[1,0,1,0,1,0,1,1,1,1],
[1,0,1,1,1,0,1,1,1,1],
[1,0,0,0,0,0,1,1,1,1],
[1,1,1,1,1,0,1,1,1,1],
[1,1,1,1,1,0,1,1,1,1]
])

var player = {x:5, y:9}
var mapcanvas = document.getElementById("mapcanvas")
var mapcontext = mapcanvas.getContext("2d")
function UpdateMap(){
	for(var x = 0; x<10; x++){
		for(var y = 0; y<10; y++){
			if(CurrentDungeon.map[x][y].solid){ //FIXME (Old dungeon lookup)
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
//FIXME (Old dungeon code)
function newDungeon(arr) {
	var dungeon = {}
	if(arr == undefined){
		var d = []
		for(var x = 0; x<10; x++){
			var z = []
			for(var y = 0; y<10; y++){
				z[y] = {}
				z[y].solid = true
			}
			d.push(z)
		}
		dungeon.map = d
		return dungeon
	}else{
		var d = []
		for(var x = 0; x<10; x++){
			var z = []
			for(var y = 0; y<10; y++){
				z[y] = {}
				if(arr[y][x] == 1){
				z[y].solid = true
				}else{
				z[y].solid = false
				}
			}
			d.push(z)
		}
		dungeon.map = d
		return dungeon
	}
}
UpdateMap();
console.log()