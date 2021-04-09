/*==========================================================
	Interface 3d Mosca --> P5Js
	Lucas Veltri @2021 --> SCRIME
==========================================================*/

let nbSources = 5; //choose the number of sources you want
let main;
let sources=[];
let r =10, g = 10, b = 10;
let reset;
let orbitButton; 
let sphereDomain;
let cnv;

// let dome; //uncomment for dome Shape
// function preload(){
// 	dome = loadModel('doma.stl', true);
// }

function setup(){
	cnv = createCanvas(800,800,WEBGL);
	angleMode(DEGREES);	

	for(let i = 0; i<nbSources; i++){
			sources[i] = new speaker(random(-100,100),random(-100,100),random(-100,100),10,10,10,i);
	}

	menu();
	main = new userMain(0,0,0,10);
	sphereDomain = new domain(0,0,0,200);

	for(let j = 0; j< nbSources +1; j++){
		selector.option(""+j,j);
	}
	selector.selected(0);
}

function draw(){

	background(220);
	main.draw(100,0,0);
	// rotateY(millis() / 10);

	// rotateX(90);
	// noFill();
	// translate(0,0,50);
	// scale(2);
	// model(dome);

	sphereDomain.draw();

	for(i = 0; i< nbSources; i++){ //sources creations
		push();
			sources[i].colorS(r,g,b);
			sources[i].draw();
		pop();
	}
	

	for(i = 0; i< nbSources; i ++){ // Change color of the source if selectinned
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

	// if source are out of domain, the color change to red
	for(i = 0; i < nbSources; i++){
		let dSources2Cube = dist(main.x,main.y,main.z,sources[i].x,sources[i].y,sources[i].z);
		if(dSources2Cube> sphereDomain.size || dSources2Cube< -sphereDomain.size){
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

	//controlOrbit Activation only if chekbox is selected and only if no sources are selected
	if(activeO ==1 && selector.selected() == 0){
		orbitControl(1,0,0);
	}
	else{
		orbitControl(0,0,0);
	}

	var osc = new OSC();
osc.open(); // connect by default to ws://localhost:8080


// document.getElementById('send').addEventListener(
// 'click', () => {
  var message = new OSC.Message('/Mosca/limit', sources[0].x);
  osc.send(message);
}



// }

//marge pour la position de la souris
function range(X,Y){
	if(X < 750 && X > 50 && Y < 750 && Y > 50){
		return true;
	}
}

function zoomIn(){
	if(sphereDomain.size <400){
		sphereDomain.size += 10; //change domain size
		for(i=0;i<nbSources;i++){ //change position of source linked by its position

			if(sources[i].x > 0){
				sources[i].x += 10;
			}else{
				sources[i].x -= 10;}

			if(sources[i].y > 0){
				sources[i].y += 10;
			}
			else{sources[i].y -= 10;}

			if(sources[i].z > 0){
				sources[i].z += 10;
			}
			else{sources[i].z -= 10;}
		}
		print(sphereDomain.size);
	}
	
}
	

function zoomOut(){
	if(sphereDomain.size > 100){
		sphereDomain.size -= 10;
		for(i=0;i<nbSources;i++){
			//X position
			if(sources[i].x > 0){
				sources[i].x -= 10;
			}else{
				sources[i].x += 10;}


			if(sources[i].y > 0){
				sources[i].y -= 10;
			}
			else{sources[i].y += 10;}

			if(sources[i].z > 0){
				sources[i].z -= 10;
			}
			else{sources[i].z += 10;}
		}
		print(sphereDomain.size);
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

class userMain{//user position
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

class domain{ //sound domain Sphere --> final : half sphere
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