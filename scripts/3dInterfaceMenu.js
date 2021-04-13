var selector;
var sourcesNumber;
var a = 0;
var activeO;
var p;
var p2;
var level; //level source
function sliderGUI(){
	
	var levelLabel = createP('Level');
	var contraction; //contraction
	var contractionLabel = createP('Contraction');
	var dopplerAmount;
	var dpAmtLabel = createP('Doppler_amount');
	level = createSlider(-96,12,0,1);
	level.position(10,70);
	level.class('slider');
	level.value();
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

function displaySources(){
	var disSourcesBtn = createButton('Display');
	var hidSourcesBtn = createButton('Hide');
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
	playCbx = createCheckbox('play',false);
		playCbx.position(10,35);
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

	moveCbx = createCheckbox('Move Source',false);
	moveCbx.position(60,35);
	moveCbx.changed(activeMove);


	var librarySelector;
	librarySelector = createSelect();
	librarySelector.position(15,190);
	librarySelector.option('Ambitools');
	librarySelector.option('ATK');
	librarySelector.option('BF-FMH');
	librarySelector.option('Josh');
	librarySelector.option('SC-HOA');
	librarySelector.option('VBAP');
	librarySelector.class('selector');
	librarySelector.changed(selectLibrary);
	librarySelector.hide();

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

function activeMove(){
	if(moveCbx.checked()){
		return true;
	}else{return false;}
}

// function selectLibrary(){
// 	var sourceLib = [];//use for stock thi different library for each sources
// 	for (i= 0; i < nbSources; i++){
// 		sourceLib[selector.selected()-1] = librarySelector.value();
// 		var libSelMes = new OSC.Message('/Mosca/Source_'+selector.selected()+'/Library');
// 		osc.send(libSelMes);
// 		print(libSelMes);
// 	}
// }

function dumpData(){
	var dumpDataButton;
	dumpDataButton = createButton('Data');
	dumpDataButton.position(760,780);
	dumpDataButton.mousePressed(dumper);
}
function reset(){
	var resetButton = createButton('Reset');
	resetButton.position(750,750);
	resetButton.mousePressed();//reset all parameters
	resetButton.hide();
}

