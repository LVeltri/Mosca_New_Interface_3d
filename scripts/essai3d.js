let ball;
function setup(){
	createCanvas(500,500,WEBGL);
	ball = new alpha(0,0,0);
	debugMode();
	angleMode(DEGREES);
}
function draw(){
	orbitControl();
	background(220);
	ball.draw();
	let d = dist(mouseX-width/2,mouseY-height/2,ball.x,ball.y)
	let nM = mouseX -height/2;
	if(mouseIsPressed){
		print("dist: "+d + " mouseX " + mouseX);
		print("nM " + nM);
	}
	

}

class alpha{
	constructor(_x,_y,_z){
		this.x = _x;
		this.y = _y;
		this.z = _z;
	}
	draw(){
		translate(this.x,this.y,this.z);
		sphere(10);
	}
}