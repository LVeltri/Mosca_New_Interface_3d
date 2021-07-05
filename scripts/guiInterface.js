/*==================================================================

						GUI INTERFACE

==================================================================*/

/*======================SLIDERS===========================*/

	var level,levelLabel,levelValue;
	var contraction,contractionLabel,contractionValue;
	var dopplerAmount,dopplerLabel,dopplerValue;
	var stereoAngle,stereoLabel,stereoValue;
	var bfmtRotation,bfmtLabel,bfmtValue;
	var localAmount, localAmountLabel, localAmountValue;
	var roomDelay, roomLabel, roomValue;
	var dampDecay, dampLabel,dampValue;
	var grainRate,grainLabel,grainValue;
	var windowSize,windowLabel,windowValue;
	var randomSize,randomLabel,randomValue;
	var orientationX,orientationXLabel,orientationXValue;
	var orientationY,orientationYLabel,orientationYValue;
	var orientationZ,orientationZLabel,orientationZValue;

	function slidersCaller(){ //Call slider function
		levelSliderGUI();
		contractionSliderGUI();
		dopplerSliderGUI();
		stereoAngleSliderGUI();
		bfmtRotationSliderGUI();
		localAmountSliderGUI();
		roomDelaySliderGUI();
		dampDecaySliderGUI();
		grainRateSliderGUI();
		windowSizeSliderGUI();
		randomSizeSliderGUI();
		oxOrientationSliderGUI();
		oyOrientationSliderGUI();
		ozOrientationSliderGUI();
	}
	function levelSliderGUI(){
		//create slider
		level = createSlider(-96,12,0,1);
		level.position(10,145);
		level.class('slider');
		//create text
		levelLabel = createP('Level');
		levelLabel.position(20,115);
		levelLabel.class('label');
		levelValue = createP('');
		levelValue.position(150,135);
		levelValue.class('label');
	}
	function contractionSliderGUI(){
		//create slider
		contraction = createSlider(0,1,1,0.01);
		contraction.position(10,190);
		contraction.class('slider');
		//create text
		contractionLabel = createP('Contraction');
		contractionLabel.position(20,160);
		contractionLabel.class('label');
		contractionValue = createP('');
		contractionValue.position(150,180);
		contractionValue.class('label');
	}
	function dopplerSliderGUI(){
		//create slider
		dopplerAmount = createSlider(0,1,0,0.01);
		dopplerAmount.position(10,235);
		dopplerAmount.class('slider');
		//create text
		dopplerLabel = createP('Doppler amount');
		dopplerLabel.position(20,205);
		dopplerLabel.class('label');
		dopplerValue = createP('');
		dopplerValue.position(150,225);
		dopplerValue.class('label');
	}
	//Ex-in et SCSynth sliders
	function stereoAngleSliderGUI(){
		//create slider
		stereoAngle = createSlider(0,180,60,0.01);
		stereoAngle.position(10,280);
		stereoAngle.class('slider');
		//create text
		stereoLabel = createP('Stereo angle');
		stereoLabel.position(20,250);
		stereoLabel.class('label');
		stereoValue = createP('');
		stereoValue.position(150,270);
		stereoValue.class('label');
	}
	function bfmtRotationSliderGUI(){
		//create slider
		bfmtRotation = createSlider(-180,180,0,0.1);
		bfmtRotation.position(10,280)
		bfmtRotation.class('slider');
		//create text
		bfmtLabel = createP('B-Fmt rotation');
		bfmtLabel.position(20,250);
		bfmtLabel.class('label');
		bfmtValue = createP('');
		bfmtValue.position(150,270);
		bfmtValue.class('label');
	}//Local effect (allpass and freeverb)
	function localAmountSliderGUI(){
		localAmount = createSlider(0,1,0,0.01);
		localAmount.position(10,325);
		localAmount.class('slider');

		localAmountLabel = createP('Local amount');
		localAmountLabel.position(20,295);
		localAmountLabel.class('label');
		localAmountValue = createP('');
		localAmountValue.position(150,315)
		localAmountValue.class('label');
	}
	function roomDelaySliderGUI(){
		roomDelay = createSlider(0,1,0.5,0.01);
		roomDelay.position(10,370);
		roomDelay.class('slider');

		roomLabel = createP('Room delay');
		roomLabel.position(20,340);
		roomLabel.class('label');
		roomValue = createP('');
		roomValue.position(150,360);
		roomValue.class('label');
	}
	function dampDecaySliderGUI(){
		dampDecay = createSlider(0,1,0.5,0.01);
		dampDecay.position(10,415);
		dampDecay.class('slider');

		dampLabel = createP('Damp decay');
		dampLabel.position(20,385);
		dampLabel.class('label');
		dampValue = createP('');
		dampValue.position(150,405);
		dampValue.class('label');
	}
	//JOSH Library
	function grainRateSliderGUI(){
		grainRate = createSlider(1,60,10,0.01);
		grainRate.position(10,460);
		grainRate.class('slider');

		grainLabel = createP('Grain rate');
		grainLabel.position(20,430);
		grainLabel.class('label');
		grainValue = createP('');
		grainValue.position(150,450);
		grainValue.class('label');
	}
	function windowSizeSliderGUI(){
		windowSize = createSlider(0,0.2,0.1,0.01);
		windowSize.position(10,505);
		windowSize.class('slider');

		windowLabel = createP('Window size');
		windowLabel.position(20,475);
		windowLabel.class('label');
		windowValue = createP('');
		windowValue.position(150,495);
		windowValue.class('label');
	}
	function randomSizeSliderGUI(){
		randomSize = createSlider(0,1,0,0.01);
		randomSize.position(10,550);
		randomSize.class('slider');

		randomLabel = createP('Random size');
		randomLabel.position(20,520);
		randomLabel.class('label');
		randomValue = createP('');
		randomValue.position(150,540);
		randomValue.class('label');
	}

	function oxOrientationSliderGUI(){
		orientationX = createSlider(-3.14,3.14,0,0.001);
		orientationX.position(160,775);
		orientationX.class('slider');

		orientationXLabel = createP('orientation X');
		orientationXLabel.position(165,740);
		orientationXLabel.class('label');
		orientationXValue = createP('0');
		orientationXValue.position(260, 740);
		orientationXValue.class('label');
	}
	function oyOrientationSliderGUI(){
		orientationY = createSlider(-3.14,3.14,0,0.001);
		orientationY.position(310,775);
		orientationY.class('slider');

		orientationYLabel = createP('orientation Y');
		orientationYLabel.position(315,740);
		orientationYLabel.class('label');
		orientationYValue = createP('0');
		orientationYValue.position(415, 740);
		orientationYValue.class('label');
	}
	function ozOrientationSliderGUI(){
		orientationZ = createSlider(-3.14,3.14,0,0.001);
		orientationZ.position(460,775);
		orientationZ.class('slider');

		orientationZLabel = createP('orientation Z');
		orientationZLabel.position(465,740);
		orientationZLabel.class('label');
		orientationZValue = createP('0');
		orientationZValue.position(565, 740);
		orientationZValue.class('label');
	}

/*======================Buttons===========================*/

	var disSourcesButton,hidSourcesButton;
	var loopButton;
	var playButton;
	var moveButton;
	var dumpDataButton,resetButton;
	var externalButton,scButton;
	var spreadButton,diffuseButton;
	var auxiliaryButton;
	
	function buttonCaller(){
		displaySourcesGUI();
		loopButtonGUI();
		playButtonGUI();
		moveButtonGUI();
		dumpDataGUI();
		resetGUI();
		exInButtonGUI();
		scInButtonGUI();
		spreadButtonGUI();
		diffuseButtonGUI();
		// auxiliaryButtonGUI();
	}
	function displaySourcesGUI(){
		disSourcesButton = createButton('Display');
		hidSourcesButton = createButton('Hide');
		disSourcesButton.position(170,10);
		hidSourcesButton.position(240,10);
		disSourcesButton.mousePressed(displayIt);
		hidSourcesButton.mousePressed(hideIt);
	}
	function loopButtonGUI(){
		loopButton = createButton('loop');
		loopButton.position(290,10);
		loopButton.class('checkButton');
	}
	function playButtonGUI(){
		playButton = createButton('stop');
		playButton.position(10,35);
		playButton.class('checkButton');
	}
	function moveButtonGUI(){
		moveButton = createButton('move');
		moveButton.position(60,35);
		moveButton.class('checkButton');
	}
	function dumpDataGUI(){
		dumpDataButton = createButton('Data');
		dumpDataButton.position(750,780);
		dumpDataButton.mousePressed(dumper);
	}
	function resetGUI(){//not fully completed
			resetButton = createButton('Reset');
			resetButton.position(750,50);
			resetButton.mousePressed(resetValue);
	}
	//Button for extrnal sources
	function exInButtonGUI(){
		externalButton = createButton('Ex_In');
		externalButton.position(10,60);
		externalLabel = createP('No. chans');
		externalLabel.position(60,65);
		externalLabel.class('label');
		busIndexLabel = createP('Bus index');
		busIndexLabel.position(60,83);
		busIndexLabel.class('label');
	}
	function scInButtonGUI(){
		scButton = createButton('SC-in');
		scButton.position(57,60);
	}
	//Button for ATK library
	function spreadButtonGUI(){
		spreadButton = createButton('spread');
		spreadButton.position(10,590);
	}
	function diffuseButtonGUI(){
		diffuseButton = createButton('diffuse');
		diffuseButton.position(10,620);
	}
	function auxiliaryButtonGUI(){
		auxiliaryButton = createButton('auxiliary');
		auxiliaryButton.position(735,75);
		// auxiliaryButton.class('checkButton');
		
	}

/*======================Others===========================*/

	function selectorCaller(){
		selExIn();
		localEffectSelect();
		librarySelect();
		speakerDisplaySelect();
		orbit();
		inputBus();
	}
	function selExIn(){
		selectorExIn = createSelect();
		selectorExIn.position(10,80);
		selectorExIn.option('1');
		selectorExIn.option('2');
		selectorExIn.option('4');
		selectorExIn.option('9');
		selectorExIn.option('16');
		selectorExIn.option('25');
		selectorExIn.selected('1');
		selectorExIn.changed(selectChanelNumber);
	}
	function localEffectSelect(){
		localEffectSelector = createSelect();
		localEffectSelector.position(210,35);
		localEffectSelector.option('Clear');
		localEffectSelector.option('AllPass');
		localEffectSelector.option('FreeVerb');
		localEffectSelector.style('height','21px');
		localEffectSelector.changed(selectLocalEffect);
	}
	function librarySelect(){
		librarySelector = createSelect();
		librarySelector.position(120,35);
		librarySelector.option('Ambitools');
		librarySelector.option('ATK');
		librarySelector.option('BF-FMH');
		librarySelector.option('Josh');
		librarySelector.option('SC-HOA');
		librarySelector.option('VBAP');
		librarySelector.style('height','21px');
		librarySelector.changed(selectLibrary);
	}	
	// let spDisplay;
	function speakerDisplaySelect(){//use to display speaker position (stereo,octophonic,...)
		spDisplay = createSelect();
		spDisplay.position(690,30);
		spDisplay.option('None');
		spDisplay.option('Stereo');
		spDisplay.option('Quadriphonic');
		spDisplay.option('Octophonic');
		spDisplay.option('Dome');
		spDisplay.selected('None');
	}
	function inputBus(){
		busInput = createInput('');
		busInput.position(10,97);
		busInput.size(40);
		busInput.input(changeBus);
	}
	function orbit(){
		orbitButton = createCheckbox('Orbit Control', false);
		orbitButton.position(690,10);
		orbitButton.changed(activeOrbit);
	}


/*======================Some Functions===========================*/

	function displayIt(){ //Display or hide the source
		if(selector.selected() !=0){
			sources[selector.selected()-1].isDisplay = true;
		}
	 }
	 function hideIt(){
	 	if(selector.selected() != 0){
	 		sources[selector.selected()-1].isDisplay = false;
	 	}
	}
	function dumper(){//give all data from active sources
		console.clear();
		console.group();
		for(i =0; i<nbSources;i++){
				console.log('sources',i+1,'x:',sources[i].x,'y:',sources[i].y,'z:',sources[i].z);
				console.log('R:',sources[i].R,'G:',sources[i].G,'B:',sources[i].B);
				console.log('play:',sources[i].isPlay,'loop',sources[i].isLoop);
				console.log('library:',sources[i].library,'local effect:',sources[i].localEffect);
				console.log('level:',sources[i].level,'contraction:',sources[i].contraction,'dopplerAmount:', sources[i].doppler_Amount);
		}
	}
	function resetValue(){ //not available

		// for(i = 0; i < nbSources + 1; i++){
		// 	sources[i].x = 0;
		// 	sources[i].y = 0;
		// 	sources[i].z = 0;
		// 	sources[i].isPlay = false;
		// 	sources[i].isDisplay = false;
		// 	sources[i].isLoop = false;
		// 	sources[i].library = 'Ambitools';
		// 	sources[i].localEffect = 'Clear';
		// 	sources[i].chanels = 1;
		// 	sources[i].bus = 1;
		// 	sources[i].external = 0;
		// 	sources[i].scsynth = 0;
		// 	sources[i].level = 0;
		// 	sources[i].contraction = 1;
		// 	sources[i].doppler_Amount = 0;
		// 	sources[i].stereoangle = 60;
		// 	sources[i].bfmt = 0;
		// 	sources[i].localAmount = 0;
		// 	sources[i].roomDelay = 0.5;
		// 	sources[i].dampDecay = 0.5;
		// 	sources[i].grainRate = 10;
		// 	sources[i].windowSize = 0.1;
		// 	sources[i].randomSize = 0;
		// 	sources[i].spread = 0;
		// 	sources[i].diffuse = 0;
		// }
		// selector.selected(0);
		
		orientationX.value(0);
		orientationY.value(0);
		orientationZ.value(0);

	}
	var activeO,activ;
	function activeOrbit(){
		if(orbitButton.checked()){
			activeO = 1;
			selector.selected(0);
		}else{
			activeO =0;
		}
	}
	function playIt(){
		playButton.style('color','rgb(0,0,0)');
		playButton.style('background-color','rgb(255,245,0)');
		playButton.elt.innerText = 'play';
		sources[selector.selected() - 1].isPlay =true;
		playSource();
	}
	function stopIt(){
		playButton.style('color','rgb(255,245,0)');
		playButton.style('background-color','rgb(134,134,134)');
		sources[selector.selected() - 1].isPlay =false;
		stopSource();
	}
	function moveIt(){
		activ =true;
		moveButton.style('color','rgb(0,0,0)');
		moveButton.style('background-color','rgb(255,245,0)');
	}
	function desactiveMove(){
		activ = false;
		moveButton.style('background-color','rgb(134,134,134)');
		moveButton.style('color','rgb(255,245,0)');
	}
	function range(X,Y){
		if(X < 750 && X > 50 && Y < 750 && Y > 50){
		return true;
		}
	}
	