/*==========================================================
	Interface 3d Mosca --> P5Js
	Lucas Veltri @2021 --> SCRIME
==========================================================*/

var nbSources = 18; //choose the number of sources you want
var main;
var sources=[];
var r =10, g = 10, b = 10;
var orbitButton; 
var sphereDomain;
var cnv;
var osc = new OSC();

let Xinput;
let Yinput;
let Zinput;
let GUIDataB;
var playCbxState =[];
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

	dumpData();
	reset();
	osc.open();
	for (i = 0; i < nbSources; i++){
		playCbxState[i] = false;
	}


	// Xinput = createInput('0','number');
	// Xinput.position(700,60);
	// Xinput.size(90);

	// Yinput = createInput('0.0','number');
	// Yinput.position(700,90);
	// Yinput.size(90);
	// Zinput = createInput('0.0','number');
	// Zinput.position(700,120);
	// Zinput.size(90);

// Create new tab which show all parameters of each sources
// 	GUIDataB = createButton('Gui');
// 	GUIDataB.position(20,770);
// 	GUIDataB.mousePressed(openGUI);

}



function draw(){
	
	background(100);
	main.draw(100,0,0);
	sphereDomain.draw();
	//console.log(level.value());
//sources creations
	for(i = 0; i< nbSources; i++){ 
		push();
			if(sources[i].isDisplay == true )
			sources[i].draw(10);
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
		var dSources2Cube = dist(main.x,main.y,main.z,sources[i].x,sources[i].y,sources[i].z);
		if(dSources2Cube> sphereDomain.size || dSources2Cube< -sphereDomain.size){
			sources[i].R = 255;
		}
	}

//Select source if mouse is near
	for(i= 0; i < nbSources; i++ ){
		if(orbitButton.checked() == false && activeMove() == true ){
			if(mouseIsPressed && selector.selected() != 0 && range(mouseX,mouseY) && sources[i].isDisplay == true){
			var posX = map(sources[selector.selected()-1].x,-350,350,-1,1);
			var posY = map(sources[selector.selected()-1].y,-350,350,1,-1);
			var posZ = map(sources[selector.selected()-1].z,-350,350,1,-1);
			sources[selector.selected()-1].y = (mouseY-height/2);
				if(keyIsDown(89)){
					sources[selector.selected()-1].z = -(mouseX-width/2);
				}
				else{
					sources[selector.selected()-1].x = mouseX-width/2;
					
				}
			//send OSC message to Mosca port : sources position
			var message = new OSC.Message('/Mosca/Source_'+selector.selected()+'/Cartesian',posX,posZ,posY);
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
//maybe change orbitControl to Camera

	//Xinput.value(sources[0].x);
}

// function openGUI(){
// 	window.open("dataGUI.html","Data","width=600,height=400");
// }
