let selector;
let sourcesNumber;
let a = 0;
let activeO;
let p;
let p2;

function sliderGUI(){
	let level; //level source
	let levelLabel = createP('Level');
	let contraction; //contraction
	let contractionLabel = createP('Contraction');
	let dopplerAmount;
	let dpAmtLabel = createP('Doppler_amount');
	level = createSlider(-96,12,0,1);
	level.position(10,70);
	level.class('slider');
	levelLabel.class('label');
	levelLabel.position(20,40);

	contraction = createSlider(0,1,1,0.01);
	contraction.position(10,110);
	contraction.class('slider');
	contractionLabel.position(20,80);
	contractionLabel.class('label');

	dopplerAmount = createSlider(0,1,0,0.01);
	dopplerAmount.position(10,150);
	dopplerAmount.class('slider');
	dpAmtLabel.position(20,120);
	dpAmtLabel.class('label');

}

function sliderSendOSC(){
	var levelMess = new OSC.Message('/Mosca/Source_'+selector.selected()+'/Level', level.value());
	osc.send(levelMess);
}



function playButton(){
	let playButton = createButton('play');
	playButton.position(10,60);
	playButton.mousePressed(playSource);


}

function displaySources(){
	let disSourcesBtn = createButton('Display');
	let hidSourcesBtn = createButton('Hide');
	disSourcesBtn.position(170,8);
	hidSourcesBtn.position(240,8);
	disSourcesBtn.mousePressed(displayIt);
	hidSourcesBtn.mousePressed(hideIt);

// 	if(selector.selected() != 0){
// 		disSourcesBtn.show();
// 		hidSourcesBtn.show();
// 	}
// 	else{
// 		disSourcesBtn.hide();
// 		hidSourcesBtn.hide();
// 	}
}

function playCbx(){//maybe change checkbox to span to create custom checkbox??
	let playCbxState = false;
	playCbx = createCheckbox('play',playCbxState);
	playCbx.position(10,30);
	playCbx.class('checkbox');
	playCbx.changed(playSource);
}

function menu(){
	//menu

	selector = createSelect();
	selector.position(10,10);
	selector.class('selector');

	//Creation des options de debugage et orbitControl
	orbitButton = createCheckbox('Orbit Control',false);
	orbitButton.position(690,10);
	orbitButton.changed(activeOrbit);
	// orbitButton.class('checker');

	debugCbx = createCheckbox('Debug Mode',false);
	debugCbx.position(690,30);
	debugCbx.changed(activeDebug);

	
	// let librarySelector;
	// librarySelector = createSelect();
	// librarySelector.position(10,55);
	// librarySelector.option('Ambitools');
	// librarySelector.option('ATK');
	// librarySelector.option('BF-FMH');
	// librarySelector.option('Josh');
	// librarySelector.option('SC-HOA');
	// librarySelector.option('VBAP');
	// librarySelector.changed(selectLibrary);

	p = createP('sources selection');
	p.position(55,-7);

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
		debugMode(AXES,300);
			}else{
		noDebugMode();
	}
}

// function selectLibrary(){
// 	let sourceLib = [];//use for stock thi different library for each sources
// 	for (i= 0; i < nbSources; i++){
// 		sourceLib[selector.selected()-1] = librarySelector.value();
// 		var libSelMes = new OSC.Message('/Mosca/Source_'+selector.selected()+'/Library');
// 		osc.send(libSelMes);
// 		print(libSelMes);
// 	}
// }

function dumpData(){
	let dumpDataButton;
	dumpDataButton = createButton('Data');
	dumpDataButton.position(760,780);
	dumpDataButton.mousePressed(dumper);
}


