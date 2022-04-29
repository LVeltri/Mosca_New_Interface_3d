/*==========================================================

				Interface 3d Mosca v 1.2.0
				Lucas Veltri @2021

==========================================================*/

var nbSources = 18;
var sources=[];
var selector,selectorLabel;
var sphereDomain, main;
var osc = new OSC();
function setup(){
	osc.open();
	createCanvas(800,800,WEBGL);
	angleMode(DEGREES);
	rectMode(CENTER);
	//Call the gui in setup
	slidersCaller();
	buttonCaller();
	selectorCaller();
	receiveOSC();
	
	for(let i =0; i<nbSources;i++){ //setup sources
		sources[i] = new speaker();
		sources[i].aux();
		sources[i].lib();
		sources[i].options();
		sources[i].sliders();
	}
	sphereDomain = new domain(0,0,0,300); //create domain
	main = new userMain(0,0,0,95);

	//create select for choose the sources
	selectorLabel = createP('Select Source');
	selectorLabel.position(55,-4);
	selector = createSelect();
	selector.position(10,10);
	for(i =0; i< nbSources + 1; i++){
		selector.option(i);
		selector.style('height','21px');
	}
	selector.selected(1);
}
function draw(){
	smooth();
	// auxiliaryGUI();
	background(100);
	drawSpeakerPosition();
	rotateY(map(orientationX.value(),-3.14,3.14,-360,360));
	rotateX(map(orientationY.value(),-3.14,3.14,-360,360));
	rotateZ(map(orientationZ.value(),-3.14,3.14,-360,360));
	main.draw(100,0,0)
	sphereDomain.draw();

	for(i = 0; i< nbSources; i++){//sources creations
		push();
		if(sources[i].isDisplay == true){
			sources[i].draw();
		}
		pop();
	}

	for(i = 0; i< nbSources; i ++){//change color of the source 
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
		var dSources2Cube = dist(main.x,main.y,main.z,sources[i].x,sources[i].y,sources[i].z);
		if(dSources2Cube> sphereDomain.size || dSources2Cube< -sphereDomain.size){
			sources[i].R = 255;
		}
		if(orbitButton.checked() == false){
			if(mouseIsPressed && selector.selected() != 0 && range(mouseX,mouseY) && sources[i].isDisplay == true && activ == true){
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
	
	//orbitControl
	if(activeO ==1){
		orbitControl(1,1);
		debugMode(AXES,300);
	}
	else{
		orbitControl(0,0);
		noDebugMode();
	}
/*======================Show an Hide Parameters===========================*/

	if(selector.selected() == 0){//hide or show buttons // maybe add sliders?
		level.hide();
		levelLabel.hide();
		levelValue.hide();
		contraction.hide();
		contractionLabel.hide();
		contractionValue.hide();
		dopplerAmount.hide();
		dopplerLabel.hide();
		dopplerValue.hide();
		disSourcesButton.hide();
		hidSourcesButton.hide();
		playButton.hide();
		moveButton.hide();
		librarySelector.hide();
		localEffectSelector.hide();
		loopButton.hide();
		externalButton.hide();
		selectorExIn.hide();
		busInput.hide();
		// auxButton.hide();
		scButton.hide();
		externalLabel.hide();
		busIndexLabel.hide();
	}
	else{
		level.show();
		levelLabel.show();
		levelValue.show();
		contraction.show();
		contractionLabel.show();
		contractionValue.show();
		dopplerAmount.show();
		dopplerLabel.show();
		dopplerValue.show();
		disSourcesButton.show();
		hidSourcesButton.show();
		playButton.show();
		moveButton.show();
		librarySelector.show();
		localEffectSelector.show();
		loopButton.show();
		externalButton.show();
		selectorExIn.show();
		// auxButton.show();
		scButton.show();
		//
		if(sources[selector.selected()-1].external == 0){
			selectorExIn.hide();
			busInput.hide();
			externalLabel.hide();
			busIndexLabel.hide();
			if(sources[selector.selected()-1].scsynth == 0){
				selectorExIn.hide();
				externalLabel.hide();
			}
			else if(sources[selector.selected()-1].scsynth == 1){
				selectorExIn.show();
				externalLabel.show();
			}
		}
		else if(sources[selector.selected()-1].external == 1){
			if(sources[selector.selected()-1].scsynth == 0){
				selectorExIn.show();
				busInput.show();
				externalLabel.show();
				busIndexLabel.show();
			}
			else{
				selectorExIn.hide();
				busInput.hide();
			}
			
		}
	}
	if(selectorExIn.selected() == 2){
		stereoAngle.show();
		stereoLabel.show();
		stereoValue.show();
		bfmtRotation.hide();
		bfmtLabel.hide();
		bfmtValue.hide();
	}
	else if(selectorExIn.selected() == 4 || selectorExIn.selected() == 9 || selectorExIn.selected() == 16 || selectorExIn.selected() == 25){
		bfmtRotation.show();
		bfmtLabel.show();
		bfmtValue.show();
		stereoAngle.hide();
		stereoLabel.hide();
		stereoValue.hide();
	}
	else{
		stereoAngle.hide();
		stereoLabel.hide();
		stereoValue.hide();
		bfmtRotation.hide();
		bfmtLabel.hide();
		bfmtValue.hide();
	}
	//effect slider show and hide
	if(localEffectSelector.selected() == 'AllPass' || localEffectSelector.selected() == 'FreeVerb'){
		localAmount.show();
		localAmountLabel.show();
		localAmountValue.show();
		roomDelay.show();
		roomLabel.show();
		roomValue.show();
		dampDecay.show();
		dampLabel.show();
		dampValue.show();

	}else{
		localAmount.hide();
		localAmountLabel.hide();
		localAmountValue.hide()
		roomDelay.hide();
		roomLabel.hide();
		roomValue.hide();
		dampDecay.hide();
		dampLabel.hide();
		dampValue.hide();
	}
	//slider for josh library
	if(librarySelector.selected() == 'Josh'){
		grainRate.show();
		grainLabel.show();
		grainValue.show();
		windowSize.show();
		windowLabel.show();
		windowValue.show();
		randomSize.show();
		randomValue.show();
		randomLabel.show();
	}else{
		grainRate.hide();
		grainLabel.hide();
		grainValue.hide();
		windowSize.hide();
		windowLabel.hide();
		windowValue.hide();
		randomSize.hide();
		randomValue.hide();
		randomLabel.hide();
	}
	//button for ATK library
	if(librarySelector.selected() == 'ATK'){
		spreadButton.show();
		diffuseButton.show();
	}else{
		spreadButton.hide();
		diffuseButton.hide();
	}

/*======================Return values for slider for each sources===========================*/
	if(selector.selected() != 0){
		level.value(sources[selector.selected()-1].level);
		contraction.value(sources[selector.selected()-1].contraction);
		dopplerAmount.value(sources[selector.selected()-1].doppler_Amount);
		stereoAngle.value(sources[selector.selected()-1].stereoangle);
		bfmtRotation.value(sources[selector.selected()-1].bfmt);
		localAmount.value(sources[selector.selected()-1].localAmount);
		roomDelay.value(sources[selector.selected()-1].roomDelay);
		dampDecay.value(sources[selector.selected()-1].dampDecay);
		grainRate.value(sources[selector.selected()-1].grainRate);
		windowSize.value(sources[selector.selected()-1].windowSize);
		randomSize.value(sources[selector.selected()-1].randomSize);
	}
	else{
		sources[0].level= 0;
	}
		
/*======================Swith Buttons style and messages===========================*/
	//play button
		if(selector.selected() ==0 || sources[selector.selected()-1].isPlay == false){
			playButton.style('background-color','rgb(134,134,134)');
			playButton.style('color','rgb(255,245,0)');
			playButton.elt.innerText = 'stop';
			playButton.mousePressed(playIt);
		}
		else if(sources[selector.selected()-1].isPlay == true){
			playButton.style('background-color','rgb(255,245,0)');
			playButton.style('color','rgb(0,0,0)');
			playButton.elt.innerText = 'play';
			playButton.mousePressed(stopIt);
		}
	//button move
		if(selector.selected() != 0){//if select is not 0 ==> active the move of sources
			moveButton.mousePressed(moveIt);
		}
		if(selector.selected() ==0){
			moveButton.style('background-color','rgb(134,134,134)');
			moveButton.style('color','rgb(255,245,0)');
		}
		else if(activ == true){
			moveButton.mousePressed(desactiveMove);
		}
	//active loop button //function base okay keep a look at the other if same
		if(selector.selected() != 0){
			if(sources[selector.selected()-1].isLoop == 0){
				loopButton.style('background-color','rgb(134,134,134)');
				loopButton.style('color','rgb(255,245,0)');
				loopButton.mousePressed(loopOn);

			}
			else if(sources[selector.selected()-1].isLoop == 1){
				loopButton.style('background-color','rgb(255,245,0)');
				loopButton.style('color','rgb(0,0,0)');
				loopButton.mousePressed(loopOff);
			}
		}
	//external in button
		if(selector.selected() != 0){
			if(sources[selector.selected()-1].external == 0){
				externalButton.style('background-color','rgb(134,134,134)');
				externalButton.style('color','rgb(255,245,0)');
				externalButton.mousePressed(exInOn);
				
			}
			else if(sources[selector.selected()-1].external == 1){
				externalButton.style('background-color','rgb(255,245,0)');
				externalButton.style('color','rgb(0,0,0)');
				externalButton.mousePressed(exInOff);
			}	
		}
	//scsynth button
		if(selector.selected() != 0){
			if(sources[selector.selected()-1].scsynth == 0){
				scButton.style('background-color','rgb(134,134,134)');
				scButton.style('color','rgb(255,245,0)');
				scButton.mousePressed(scIn);
				
			}
			else if(sources[selector.selected()-1].scsynth == 1){
				scButton.style('background-color','rgb(255,245,0)');
				scButton.style('color','rgb(0,0,0)');
				scButton.mousePressed(scOff);
			}	
		}

	// atk buttons
		if(selector.selected() != 0){
			if(sources[selector.selected()-1].spread == 0){
				spreadButton.style('background-color','rgb(134,134,134)');
				spreadButton.style('color','rgb(255,245,0)');
				spreadButton.mousePressed(spreadOn);
			}
			else if(sources[selector.selected()-1].spread == 1){
				spreadButton.style('background-color','rgb(255,245,0)');
				spreadButton.style('color','rgb(0,0,0)');
				spreadButton.mousePressed(spreadOff);
			}	
		}

		if(selector.selected() != 0){
			if(sources[selector.selected()-1].diffuse == 0){
				diffuseButton.style('background-color','rgb(134,134,134)');
				diffuseButton.style('color','rgb(255,245,0)');
				diffuseButton.mousePressed(diffuseOn);
			}
			else if(sources[selector.selected()-1].diffuse == 1){
				diffuseButton.style('background-color','rgb(255,245,0)');
				diffuseButton.style('color','rgb(0,0,0)');
				diffuseButton.mousePressed(diffuseOff);
			}
		}

/*======================Change the text of the sliders===========================*/

	levelValue.html(level.value());
	contractionValue.html(contraction.value());
	dopplerValue.html(dopplerAmount.value());
	stereoValue.html(stereoAngle.value());
	bfmtValue.html(bfmtRotation.value());
	localAmountValue.html(localAmount.value());
	roomValue.html(roomDelay.value());
	dampValue.html(dampDecay.value());
	grainValue.html(grainRate.value());
	windowValue.html(windowSize.value());
	randomValue.html(randomSize.value());
	orientationXValue.html(orientationX.value());
	orientationYValue.html(orientationY.value());
	orientationZValue.html(orientationZ.value());

	level.mouseMoved(sendLevelValue);
	contraction.mouseMoved(sendContractionValue);
	dopplerAmount.mouseMoved(sendDopplerValue);
	stereoAngle.mouseMoved(sendStereoAngleValue);
	bfmtRotation.mouseMoved(sendBfmtValue);
	localAmount.mouseMoved(sendLocalAmountValue);
	roomDelay.mouseMoved(sendRoomDelayValue);
	dampDecay.mouseMoved(sendDampDecayValue);
	grainRate.mouseMoved(sendGrainRateValue);
	windowSize.mouseMoved(sendWindowSizeValue);
	randomSize.mouseMoved(sendRandomSizeValue);
	orientationX.mouseMoved(sendOrientationXValue);
	orientationY.mouseMoved(sendOrientationYValue);
	orientationZ.mouseMoved(sendOrientationZValue);
}

