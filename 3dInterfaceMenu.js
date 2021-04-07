let selector;
let sourcesNumber;
let a = 0;
let activeO;
let p;
let p2;



function menu(){
	//menu
	selector = createSelect();
	selector.position(10,40);
	sourcesNumber = createSelect();
	sourcesNumber.position(10,10);


	//Creation des options de debugage et orbitControl
	orbitButton = createCheckbox('Orbit Control',false);
	orbitButton.position(690,10);
	orbitButton.changed(activeOrbit);

	debugCbx = createCheckbox('Debug Mode',false);
	debugCbx.position(690,30);
	debugCbx.changed(activeDebug);


	p2 = createP('quantité de sources');
	p = createP('selection des sources');
	p2.position(55,-7);
	p.position(55,23);



	for(let i = 0; i<=64; i++){
		sourcesNumber.option(''+i,i);
		
	}
	sourcesNumber.selected(0);
	
	a = sourcesNumber.value();
		for(let j = 0; j< nbSources + 1; j++){
		selector.option(""+j,j);
	}
	selector.selected(0);


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