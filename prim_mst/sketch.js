var vertices = [];

function setup(){
	createCanvas(600,400);
}

function draw(){
	background(190);
	var visited = [];
	var unvisited = [];
	for(var i=0 ;i<vertices.length ;i++){
		fill(150,90,180);
		noStroke();
		ellipse(vertices[i].x,vertices[i].y,16,16);
		unvisited.push(vertices[i]);
	}
	visited.push(vertices[0]);
	unvisited.splice(0,1);
	while(visited.length<=vertices.length){
		var Aindex ,Eindex,min_dist = 2000;
		for(var i=0;i<visited.length;i++){
			for(var j=0;j<unvisited.length;j++){
				var distance = dist(visited[i].x,visited[i].y,unvisited[j].x,unvisited[j].y);
				if(distance<min_dist){
					min_dist = distance ;
					Eindex = j ;
					Aindex = i ;
				}
			}
		}
		var v1 = visited[Aindex] , v2 = unvisited[Eindex] ;
		strokeWeight(2);
		stroke(0);
		line(v1.x,v1.y,v2.x,v2.y);

		visited.push(unvisited[Eindex]);
		unvisited.splice(Eindex,1);
	}
}

function mousePressed(){
	var v = createVector(mouseX,mouseY);
	vertices.push(v);
}
