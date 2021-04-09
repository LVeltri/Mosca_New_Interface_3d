let selector;
let sourcesNumber;
let a = 0;
let activeO;
let p;
let p2;

let zoomPlus;
let zoomMinus;




function menu(){
	//menu

	selector = createSelect();
	selector.position(10,10);

	//Creation des options de debugage et orbitControl
	orbitButton = createCheckbox('Orbit Control',false);
	orbitButton.position(690,10);
	orbitButton.changed(activeOrbit);

	debugCbx = createCheckbox('Debug Mode',false);
	debugCbx.position(690,30);
	debugCbx.changed(activeDebug);



	p = createP('sources selection');

	p.position(55,-7);

	zoomPlus = createButton('+');
	zoomPlus.position(750,780);
	zoomPlus.mousePressed(zoomIn);
	zoomMinus = createButton('-');
	zoomMinus.position(780,780);
	zoomMinus.mousePressed(zoomOut);



	

}
function activeOrbit(){

	if(orbitButton.checked()){
		activeO = 1;
	}
	else{
		activeO =0;
	}
}

function activeDebug(){
	if(this.checked()){
		debugMode();
			}else{
		noDebugMode();
	}
}

