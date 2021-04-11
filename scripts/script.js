//interface 2D

let source=[];
let nbSources = 10



function setup(){
	createCanvas(800,800);

	for (let i = 0; i < 10; i++){
		source[i] = new Source(random(0,400),random(0,400));
	}

}

function draw(){
	background(250);
	menu();
	noStroke();
	fill(60,60,60);
	ellipse(400,400,400,400);
	ellipseMode(CENTER);
	
	//let d = dist(source_1.x, source_1.y,mouseX,mouseY);

	/*source_1.show();
	if(mouseIsPressed && d <40){
		source_1.move();
	}*/

	for(i = 0; i < 10 ;i++){
		source[i].show();
	}
	
	

}

class Source{
	constructor(_x,_y){
		this.x = _x;
		this.y = _y;
	}
	show(){
			stroke(255);
			fill(0,30,100);
			ellipse(this.x,this.y,30);
		}
	move(){
		this.x = mouseX;
		this.y = mouseY;
	}
}

//function