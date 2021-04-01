//interface 3d

let nbSources = 3;

let cube;
let sources=[];
let r =0, g = 0, b = 0;

let reset;

function setup(){
	createCanvas(800,800,WEBGL);
	angleMode(DEGREES);

	cube = new domain(0,0,300);	
	for(let i = 0; i<nbSources; i++){
		sources[i] = new speaker(0,0,r,g,b,i);
	}

	reset = createButton("RESET");
	reset.mousePressed(resetScene);

	menu();

}
function draw(){

	background(220);

	cube.draw();
	translate(0,0,cube.size/2);//redef du centre en (0,0,0);
	
	
	for(i = 0; i<nbSources; i++){ //creation des sources
			sources[i].colorS(r,g,b);
			sources[i].draw();

	}
	
	for(i = 0; i< nbSources; i ++){ //Changement des couleurs si source selectionnée
		if(selector.selected() == i+1){
			sources[i].R = 0;
			sources[i].G = 190;
			sources[i].B = 255;
		}
		else{
			sources[i].R = 0;
			sources[i].G = 0;
			sources[i].B = 0;
		}
	}
	if(selector.selected() == 0){ //mouvement de la "camera"
		//orbitControl() = false;
	}


	for(i= 0; i < nbSources; i++ ){
		if(mouseIsPressed && selector.selected() != 0){
			
		}
	}

	/*if(mouseIsPressed){
		mousePos();
	}*/

}

function mousePos(){
	print("X: "+ mouseX +" Y: "+ mouseY);

}

//aditional function
function mouseWheel(event){
	cube.size += event.delta;
	//pevoire d'empecher l 'inversement de la structure


	//creer un refresh des positions des sources
}

//marge pour la position de la souris
function range(X,Y){
	if(X < 750 && X > 50 && Y < 750 && Y > 50){
		return true;
	}
}

function resetScene(){

}

//classes
class domain{
	constructor(_x,_y,_size){
		this.x = _x;
		this.y = _y;
		this.size = _size;
	}

	draw(){
		stroke(0);
		noFill();
		//rotateY(millis() /-90);
		translate(0,0);
		box(this.size);
		noStroke();
		fill(100);
		rotateX(90);
		translate(0,0,-this.size/2);
		plane(this.size);

		translate(0,0,0);
		

	}
}

class speaker{
	constructor(_x,_y,_R,_G,_B,_sourceNumber){
		this.x = _x;
		this.y = _y;
		this.R = _R;
		this.G = _G;
		this.B = _B;
		this.number = _sourceNumber;

	}
	draw(px,py){
		noStroke();
		translate(this.x,this.y);
		sphere(cube.size/8);
	}
	colorS(R,G,B){
		fill(this.R,this.G,this.B);
	}
	move(){
		
	}
	speakerSetup(){

	}
}