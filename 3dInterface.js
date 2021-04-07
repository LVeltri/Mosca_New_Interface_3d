/*==========================================================
	Interface 3d Mosca --> P5Js
	Lucas Veltri @2021 --> SCRIME
==========================================================*/

let nbSources = 5;
let main;
let sources=[];
let r =10, g = 10, b = 10;
let reset;
let orbitButton; 

let sphereDomain;
let cnv;
function setup(){

	cnv = createCanvas(800,800,WEBGL);
	angleMode(DEGREES);
/*	cube = new domain(0,0,0,400)*/	
	for(let i = 0; i<nbSources; i++){
			sources[i] = new speaker(random(-150,150),random(-150,150),random(-150,150),r,g,b,i);

	}
	menu();
	main = new userMain(0,0,0,10);
	sphereDomain = new domain(0,0,0,200);

}

function draw(){
	background(220);
	main.draw(100,0,0);
	sphereDomain.draw();

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

	/*change la couleur de la source indiquant que la source se situe en dehors du domaine.*/	
	for(i = 0; i < nbSources; i++){
		let dSources2Cube = dist(main.x,main.y,main.z,sources[i].x,sources[i].y,sources[i].z);
		if(dSources2Cube> 200 || dSources2Cube< -200){
			sources[i].R = 255;
		}
	}


	//Selection de la source avec souris le plus proche possible
	for(i= 0; i < nbSources; i++ ){
		if(mouseIsPressed && selector.selected() != 0 && range(mouseX,mouseY)){
			sources[selector.selected()-1].y = (mouseY-height/2);
			if(keyIsDown(89)){
				sources[selector.selected()-1].z = -(mouseX-width/2);
			}
			else{
				sources[selector.selected()-1].x = mouseX-width/2;
			}	
		}
	}

	//controlOrbit Activation
	if(activeO ==1){
		orbitControl(1,0,0);
	}
	else{
		orbitControl(0,0,0);
	}




}


/*Revoir la position de la souris
en placant les sources proportionnellement
a la taile du domaine*/

function mouseWheel(event){
	let sizer = sphereDomain.size + event.delta;
	if(sizer > 0 && sizer < 400){
		sphereDomain.size += event.delta;
		/*for(i = 0; i<nbSources; i++){


			if(sources[i].x > 0){
				sources[i].x += event.delta/2;
			}
			else{
				sources[i].x -= event.delta/2;
			}
		}	*/

		/*utiliser dist() pur recuperer la distance a l origine pour chaque et rajouter le coef
		de distance capturé par la souris pour placer proportionnellement les nouvelle places des sources*/

	}

}

//marge pour la position de la souris
function range(X,Y){
	if(X < 750 && X > 50 && Y < 750 && Y > 50){
		return true;
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
		//this.number = _sourceNumber;

	}
	draw(_sizeSource = 10){
		this.sizeSource = _sizeSource;
		noStroke();
		translate(this.x,this.y,this.z);
		sphere(10);

	}
	colorS(){
		fill(this.R,this.G,this.B);
	}
	ranged(){
		let rDist = dist(mouseX-width/2,mouseY-height/2,this.x,this.y);
		if(dist < 5){return true};
	}
}
class userMain{
	constructor(_x,_y,_z,size){
		this.x = _x;
		this.y = _y;
		this.z = _z;
		this.size = size;
	}
	draw(r,g,b){
		this.r =r;
		this.g =g;
		this.b =b;

		translate(this.x,this.y,this.z);
		fill(this.r,this.g,this.b);
		stroke(100,0,0);

		sphere(this.size);
	}
}
class domain{ //domaine son
	constructor(x,y,z,size){
		this.x=x;
		this.y=y;
		this.z=z;
		this.size=size;
	}
	draw(){
		translate(this.x,this.y,this.z);
		noFill();
		stroke(0);
		sphere(this.size);
	}
}