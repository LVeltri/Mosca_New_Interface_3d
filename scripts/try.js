let a;
let main;

function setup(){
	createCanvas(800,800);
	a = new speak(800,400);
	main = new domain(width/2,height/2,800);
}

function draw(){
	background(100);

	main.draw();
	a.draw(this.r,this.g,this.b);

	let d = dist(main.x,main.y,a.x,a.y);
	/*print(d);*/
	if(d > 400){
		a.R = 255;
	}

}




function interpolate(){
	let a;
}

class speak{
	constructor(_x,_y){
		this.x = _x;
		this.y = _y;
	}
	draw(r=0,g=0,b=0){
		this.r = r;
		this.g = g;
		this.b = b;
		fill(this.R,this.G,this.B);
		circle(this.x,this.y,20);

	}
}

class domain{
	constructor(x,y){
		this.x = x;
		this.y = y;
	}
	draw(){
		fill(255,255,255);
		circle(this.x,this.y,800);
	}
}