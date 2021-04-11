/*==========================================================
	Interface 3d Mosca --> P5Js
	Lucas Veltri @2021 --> SCRIME
==========================================================*/
let nbSources = 20;
let main;
let cube;
let sources=[];
let r =10, g = 10, b = 10;
let reset;
let orbitButton; 
let dome;

function preload(){
	dome = loadModel('doma.stl', true);
}

function setup(){
	createCanvas(800,800,WEBGL);
	angleMode(DEGREES);
	cube = new domain(0,0,0,400,200,400);	
		for(let i = 0; i<nbSources; i++){
			sources[i] = new speaker(random(-150,150),random(-150,150),random(-150,150),r,g,b,i);
		}

	menu();
	main = new userMain();
}

function draw(){
	background(220);

	noFill();
	stroke(0);
	rotateX(90);
	scale(2.5);
	translate(0,0,0);
	model(dome);

	translate(0,0,0);
	//print("source 1 X :" + sources[0].x);
	//rotateY(millis() / 100);
	/*cube.draw();
	translate(0,0,cube.size/2);*///redef du centre en (0,0,0);
/*	noFill();
	stroke(255,255,255);
	sphere(cube.size/2);*/
	
	//main.draw();

	
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

	//mouvement de la source //debugage de couleur
/*	let accu = 200;
	for(i=0;i<accu;i++){
		sources[0].y = sources[0].y + 0.01;
		if(sources[0].y > 200){
			sources[0].y =0;
		}
	}

	//change la couleur de la source indiquant que la source se situe en dehors du domaine.	
	for(i = 0; i < nbSources; i++){
		let dSources2Cube = dist(cube.x,cube.y,cube.z,sources[i].x,sources[i].y,sources[i].z);
		if(dSources2Cube> (cube.size/2) || dSources2Cube< -(cube.size/2)){
			sources[selector.selected()].R = 255;
			print(dSources2Cube);
		}
	}
*/

	//Selection de la source avec souris le plus proche possible
	for(i= 0; i < nbSources; i++ ){
		if(mouseIsPressed && selector.selected() != 0 && range(mouseX,mouseY)){
			sources[selector.selected()-1].y = -(mouseY-height/2);
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
	let sizer = cube.size + event.delta;
	if(sizer > 0 && sizer < 600){
		cube.size += event.delta;
		for(i = 0; i<nbSources; i++){


			if(sources[i].x > 0){
				sources[i].x += event.delta/2;
			}
			else{
				sources[i].x -= event.delta/2;
			}


			
			/*sources[i].y += event.delta/2;*/
		}	
	}

}

//marge pour la position de la souris
function range(X,Y){
	if(X < 750 && X > 50 && Y < 750 && Y > 50){
		return true;
	}
}



//classes
class domain{
	constructor(_x,_y,_z,_size,_sizeH,_sizeD){
		this.x = _x;
		this.y = _y;
		this.z = _z;
		this.size = _size; //minimum size 100
		this.sizeH = _sizeH;
		this.sizeD = _sizeD;
	}

	draw(){
		stroke(0);
		noFill();
		//rotateY(millis() /-90);
		translate(0,0,0);
		box(this.size,this.sizeH);
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
	constructor(_x,_y,_z){
		this.x = _x;
		this.y = _y;
		this.z = _z;
	}
	draw(_size=40){
		this.size = _size;
		rotateX(90);
		stroke(100,0,0);

		sphere(cube.size/10);
	}
}