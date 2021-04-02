//interface 3d


let nbSources = 10;

let cube;
let sources=[];
let r =10, g = 10, b = 10;

let reset;

function setup(){
	createCanvas(800,800,WEBGL);
	angleMode(DEGREES);

	cube = new domain(0,0,400);	
	for(let i = 0; i<nbSources; i++){
		sources[i] = new speaker(random(-150,150),random(-150,150),random(-150,150),r,g,b,i);
	}

	menu();

	//debugMode();

}
function draw(){

	background(220);
	//print("source 1 X :" + sources[0].x);
	cube.draw();
	translate(0,0,cube.size/2);//redef du centre en (0,0,0);
	
	
	for(i = 0; i<nbSources; i++){ //creation des sources
		push();
			sources[i].colorS(r,g,b);
			sources[i].draw();
		pop();
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
		orbitControl();
	}

	for(i= 0; i < nbSources; i++ ){
		if(mouseIsPressed && selector.selected() != 0 && range(mouseX,mouseY)){
			sources[selector.selected()-1].z = -(mouseY-height/2);
			if(keyIsDown(89)){
				sources[selector.selected()-1].y = mouseX-width/2;
			}
			else{
				sources[selector.selected()-1].x = mouseX-width/2;
			}
			
			
		}
	}


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
function keyTyped(){}

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
	constructor(_x,_y,_z,_R,_G,_B,_sourceNumber){
		this.x = _x;
		this.y = _y;
		this.z = _z;
		this.R = _R;
		this.G = _G;
		this.B = _B;
		this.number = _sourceNumber;

	}
	draw(){
		noStroke();
		translate(this.x,this.y,this.z);
		sphere(10);
	}
	colorS(R,G,B){
		fill(this.R,this.G,this.B);
	}
	move(){
		
	}
	ranged(){
		let rDist = dist(mouseX-width/2,mouseY-height/2,this.x,this.y);
		if(dist < 5){return true};
	}
}