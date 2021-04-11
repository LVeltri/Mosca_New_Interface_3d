/*==========================================================
	Interface 3d Mosca --> P5Js
	Lucas Veltri @2021 --> SCRIME
==========================================================*/

let nbSources = 18; //choose the number of sources you want
let main;
let sources=[];
let r =10, g = 10, b = 10;
let orbitButton; 
let sphereDomain;
let cnv;
var osc = new OSC();

function setup(){
	cnv = createCanvas(800,800,WEBGL);
	angleMode(DEGREES);	

	for(let i = 0; i<nbSources; i++){
			sources[i] = new speaker(0,0,0,0,0,0,false,false);
	}

	menu();
	displaySources();
	sliderGUI();
	playCbx();

	main = new userMain(0,0,0,95);
	sphereDomain = new domain(0,0,0,300);

	for(let j = 0; j< nbSources +1; j++){
		selector.option(""+j,j);
	}
	selector.selected(0);

	dumpData()
	osc.open();	
}

function draw(){
	background(220);
	main.draw(100,0,0);
	sphereDomain.draw();

	
//sources creations
	for(i = 0; i< nbSources; i++){ 
		push();
			if(sources[i].isDisplay == true )
			sources[i].draw();
		pop();
	}

// Change color of the source if selectionned
	for(i = 0; i< nbSources; i ++){ 
		if(selector.selected() == i+1){
			sources[i].R = 0;
			sources[i].G = 190;
			sources[i].B = 255;
		}
		else if(sources[i].isPlay == true){ //if the sources is playing change the color to green
			sources[i].R = 0;
			sources[i].G = 255;
			sources[i].B = 0;
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

//Select source if mouse is near
	for(i= 0; i < nbSources; i++ ){
		if(orbitButton.checked() == false){
			if(mouseIsPressed && selector.selected() != 0 && range(mouseX,mouseY) && sources[i].isDisplay == true){
			let posX = map(sources[selector.selected()-1].x,-350,350,-1,1);
			let posY = map(sources[selector.selected()-1].y,-350,350,1,-1);
			let posZ = map(sources[selector.selected()-1].z,-350,350,1,-1);
			sources[selector.selected()-1].y = (mouseY-height/2);
				if(keyIsDown(89)){
					sources[selector.selected()-1].z = -(mouseX-width/2);
				}
				else{
					sources[selector.selected()-1].x = mouseX-width/2;
					
				}
			//send OSC message to Mosca port : sources position
			var message = new OSC.Message('/Mosca/Source_'+selector.selected()+'/Cartesian',posX,posZ,posY);
			//sliderSendOSC();
			osc.send(message);
			}
		
		}
		
	}
//controlOrbit Activation only if chekbox is selected and only if no sources are selected
	if(activeO ==1 && selector.selected() == 0){
		orbitControl(1,1,0);
	}
	else{
		orbitControl(0,0,0);
	}	
}


//marge pour la position de la souris
function range(X,Y){
	if(X < 750 && X > 50 && Y < 750 && Y > 50){
		return true;
	}
}

function playSource(){
	if(this.checked()){
		let playS = new OSC.Message('Mosca/Source_'+selector.selected()+'/Play',1);
		sources[selector.selected()-1].isPlay = true;
		osc.send(playS);
	}else{
		let stopS = new OSC.Message('Mosca/Source_'+selector.selected()+'/Play',0);
		sources[selector.selected()-1].isPlay = false;
		osc.send(stopS);
	}	
}

function displayIt(){
	sources[selector.selected()-1].isDisplay = true;
}

function hideIt(){
	sources[selector.selected()-1].isDisplay = false;
}

function dumper(){
	for(i =0; i<nbSources;i++){
		if(sources[i].isDisplay == true){
			console.log('sources',i,'x:',sources[i].x,'y:',sources[i].y,'z:',sources[i].z);
			console.log('sources',i,'R:',sources[i].R,'G:',sources[i].G,'B:',sources[i].B);
			console.log('play:',sources[i].isPlay);
		}
	}
}

class speaker{
	constructor(_x,_y,_z,_R,_G,_B,_isPlay,_isDisplay){
		this.x = _x;
		this.y = _y;
		this.z = _z;
		this.R = _R;
		this.G = _G;
		this.B = _B;
		this.isPlay = _isPlay;
		this.isDisplay = _isDisplay;

	}
	draw(_sizeSource){
		this.sizeSource = _sizeSource;
		fill(this.R,this.G,this.B);

		noStroke();
		translate(this.x,this.y,this.z);
		sphere(10);

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
		//fill(this.r,this.g,this.b);
		stroke(100,40,0);

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