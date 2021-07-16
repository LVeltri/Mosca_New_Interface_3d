/*==================================================================

				OSC Message 3d Interface to Mosca

==================================================================*/

/*======================SLIDERS===========================*/
	function sendLevelValue(){
		if(selector.selected() != 0 &&mouseIsPressed){
			sources[selector.selected()-1].level = level.value();
			// var levelSend = new OSC.Message();
			// osc.send(levelSend);
			osc.send(new OSC.Message(
				'/Mosca/Source_'+selector.selected()+'/Level', sources[selector.selected()-1].level
			))
		}
	}
	function sendContractionValue(){
		if(selector.selected() != 0 &&mouseIsPressed){
			sources[selector.selected()-1].contraction = contraction.value();
			var contractionSend = new OSC.Message('/Mosca/Source_'+selector.selected()+'/Contraction', sources[selector.selected()-1].contraction);
			osc.send(contractionSend);
		}
	}
	function sendDopplerValue(){
		if(selector.selected() != 0 &&mouseIsPressed){
			sources[selector.selected()-1].doppler_Amount = dopplerAmount.value();
			var dopplerSend = new OSC.Message('/Mosca/Source_'+selector.selected()+'/Doppler_amount', sources[selector.selected()-1].doppler_Amount);
			osc.send(dopplerSend);
		}	
	}
	function sendStereoAngleValue(){
		if(selector.selected() != 0 && mouseIsPressed){
			sources[selector.selected()-1].stereoangle = stereoAngle.value();
			var stereoSend = new OSC.Message('/Mosca/Source_'+selector.selected()+'/Stereo_angle', sources[selector.selected()-1].stereoangle);
			osc.send(stereoSend);
		}
	}
	function sendBfmtValue(){
		if(selector.selected() !=0 && mouseIsPressed){
			sources[selector.selected()-1].bfmt = bfmtRotation.value();
			var bfmtSend = new OSC.Message('/Mosca/Source_'+selector.selected()+'/B-Fmt_rotation', sources[selector.selected()-1].bfmt);
			osc.send(bfmtSend);
		}
	}
	function sendLocalAmountValue(){
		if(selector.selected() != 0 && mouseIsPressed){
			sources[selector.selected()-1].localAmount = localAmount.value();
			var localAmountSend = new OSC.Message('/Mosca/Source_'+selector.selected()+'/Local_effect/Local_amount', sources[selector.selected()-1].localAmount);
			osc.send(localAmountSend);
		}
	}
	function sendRoomDelayValue(){
		if(selector.selected() !=0 && mouseIsPressed){
			sources[selector.selected()-1].roomDelay = roomDelay.value();
			var roomSend = new OSC.Message('/Mosca/Source_'+selector.selected()+'/Local_effect/Room_delay', sources[selector.selected()-1].roomDelay);
			osc.send(roomSend);
		}
	}
	function sendDampDecayValue(){
		if(selector.selected() !=0 && mouseIsPressed){
			sources[selector.selected()-1].dampDecay = dampDecay.value();
			var dampSend = new OSC.Message('/Mosca/Source_'+selector.selected()+'/Local_effect/Damp_decay', sources[selector.selected()-1].dampDecay);
			osc.send(dampSend);
		}
	}
	function sendGrainRateValue(){
		if(selector.selected() != 0 && mouseIsPressed){
			sources[selector.selected()-1].grainRate = grainRate.value();
			var grainSend = new OSC.Message('/Mosca/Source_'+selector.selected()+'/Josh/Grain_rate', sources[selector.selected()-1].grainRate);
			osc.send(grainSend);
		}
	}
	function sendWindowSizeValue(){
		if(selector.selected() !=0 && mouseIsPressed){
			sources[selector.selected()-1].windowSize = windowSize.value();
			var windowSend = new OSC.Message('/Mosca/Source_'+selector.selected()+'/Josh/Window_size', sources[selector.selected()-1].windowSize);
			osc.send(windowSend);
		}
	}
	function sendRandomSizeValue(){
		if(selector.selected() !=0 && mouseIsPressed){
			sources[selector.selected()-1].randomSize = randomSize.value();
			var randomSend = new OSC.Message('/Mosca/Source_'+selector.selected()+'/Josh/Random_size', sources[selector.selected()-1].randomSize);
			osc.send(randomSend);
		}
	}

/*======================ORIENTATIONS===========================*/

	function sendOrientationXValue(){
		if(mouseIsPressed){
			var orientationXSend = new OSC.Message('/Mosca/Orientation',orientationX.value(),orientationY.value(),orientationZ.value());
			osc.send(orientationXSend);
		}
	}
	function sendOrientationYValue(){
		if(mouseIsPressed){
			var orientationYSend = new OSC.Message('/Mosca/Orientation',orientationX.value(),orientationY.value(),orientationZ.value());
			osc.send(orientationYSend);			
		}

	}
	function sendOrientationZValue(){
		if(mouseIsPressed){
			var orientationZSend = new OSC.Message('Mosca/Orientation',orientationX.value(),orientationY.value(),orientationZ.value());
			osc.send(orientationZSend);			
		}

	}

/*======================SELECTS===========================*/

	function selectChanelNumber(){
		if(selector.selected() != 0){
			sources[selector.selected()-1].chanels = parseInt(selectorExIn.value());
			var chanS = new OSC.Message('/Mosca/Source_'+selector.selected()+'/Input/Chanels',sources[selector.selected()-1].chanels);
			osc.send(chanS);
		}	
	}
	function selectLocalEffect(){
		if(selector.selected() !=0){
			sources[selector.selected()-1].localEffect = localEffectSelector.selected();
			var localEffectSend = new OSC.Message('/Mosca/Source_'+selector.selected()+'/Local_effect',sources[selector.selected()-1].localEffect);
			osc.send(localEffectSend);
		}
	}
	function selectLibrary(){
		for(i = 0; i<nbSources;i++){
			sources[i].library = librarySelector.selected();
			var librarySend = new OSC.Message('/Mosca/Source_'+selector.selected()+'/Library',sources[i].library);
			osc.send(librarySend);
		}
	}

/*======================BUTTONS===========================*/

	function loopOn(){
		loopButton.style('color','rgb(0,0,0)');
		loopButton.style('background-color','rgb(255,245,0)');
		sources[selector.selected()-1].isLoop = 1;
		var loopOnSend = new OSC.Message('/Mosca/Source_'+selector.selected()+'/Input/Loop',sources[selector.selected()-1].isLoop);
		osc.send(loopOnSend);
	}
	function loopOff(){
		loopButton.style('color','rgb(255,245,0)');
		loopButton.style('background-color','rgb(134,134,134)');
		sources[selector.selected()-1].isLoop = 0;
		var loopOffSend = new OSC.Message('/Mosca/Source_'+selector.selected()+'/Input/Loop',sources[selector.selected()-1].isLoop);
		osc.send(loopOffSend);
	}
	function exInOn(){
			sources[selector.selected()-1].external = 1;
			externalButton.style('background-color','rgb(255,245,0)');
	      	externalButton.style('color','rgb(0,0,0)');
			var externalIn = new OSC.Message('/Mosca/Source_'+selector.selected()+'/Input/External',sources[selector.selected()-1].external);
			osc.send(externalIn);
			if(sources[selector.selected()-1].scsynth == 1){
				sources[selector.selected()-1].scsynth = 0;
				scOff();
			}
	}
	function exInOff(){
			sources[selector.selected()-1].external = 0;
		    externalButton.style('background-color','rgb(134,134,134)');
		    externalButton.style('color','rgb(255,245,0)');
			var externalOff = new OSC.Message('/Mosca/Source_'+selector.selected()+'/Input/External',sources[selector.selected()-1].external);
			osc.send(externalOff);
			if(sources[selector.selected()-1].external == 1){
				sources[selector.selected()-1].external =0;
				exInOff();
			}
	}
	function scIn(){
		sources[selector.selected()-1].scsynth = 1;
		var superColIn = new OSC.Message('/Mosca/Source_'+selector.selected()+'/Input/SCSynths',sources[selector.selected()-1].scsynth);
		osc.send(superColIn);
	}
	function scOff(){
		sources[selector.selected()-1].scsynth = 0;
		var superColOff = new OSC.Message('/Mosca/Source_'+selector.selected()+'/Input/SCSynths',sources[selector.selected()-1].scsynth);
		osc.send(superColOff);
	}

	function spreadOn(){
		sources[selector.selected()-1].spread = 1;
		var spreadSendOn = new OSC.Message('/Mosca/Source_'+selector.selected()+'/Atk/Spread',sources[selector.selected()-1].spread);
		osc.send(spreadSendOn);
	}
	function spreadOff(){
		sources[selector.selected()-1].spread = 0;
		var spreadSendOff = new OSC.Message('/Mosca/Source_'+selector.selected()+'/Atk/Spread',sources[selector.selected()-1].spread);
		osc.send(spreadSendOff);
	}
	function diffuseOn(){
		sources[selector.selected()-1].diffuse = 1;
		var diffuseSendOn = new OSC.Message('/Mosca/Source_'+selector.selected()+'/Atk/Diffuse',sources[selector.selected()-1].diffuse);
		osc.send(diffuseSendOn);
	}
	function diffuseOff(){
		sources[selector.selected()-1].diffuse = 0;
		var diffuseSendOff = new OSC.Message('/Mosca/Source_'+selector.selected()+'/Atk/Diffuse',sources[selector.selected()-1].diffuse);
		osc.send(diffuseSendOff);
	}
	function playSource(){
		var playS = new OSC.Message('Mosca/Source_'+selector.selected()+'/Play',1);
		osc.send(playS,{receiver:'udp'});
	 }
	 function stopSource(){
		var stopS = new OSC.Message('Mosca/Source_'+selector.selected()+'/Play',0);
		osc.send(stopS);
	}

/*======================INPUTS===========================*/

	function changeBus(){
		if(selector.selected() != 0){
			sources[selector.selected()-1].bus = parseInt(busInput.value());
			var busSend = new OSC.Message('/Mosca/Source_'+selector.selected()+'/Input/Bus_index',sources[selector.selected()-1].bus);
			osc.send(busSend);
		}
	}

/*======================RECEIVES===========================*/

// Receive message from OSC

function receiveOSC(){
	osc.on('/Mosca/Source_1/Cartesian',message=>{
		//console.log(po.args);
		sources[0].x = map(message.args[0],-1.0,1.0,-350,350);
		sources[0].y = map(message.args[2],-1.0,1.0,350,-350);
		sources[0].z = map(message.args[1],-1.0,1.0,350,-350);
		sources[0].isDisplay = true;
	})

	osc.on('/Mosca/Source_2/Cartesian',message=>{
		sources[1].x = map(message.args[0],-1.0,1.0,-350,350);
		sources[1].y = map(message.args[2],-1.0,1.0,350,-350);
		sources[1].z = map(message.args[1],-1.0,1.0,350,-350);
		sources[1].isDisplay = true;
	})
	osc.on('/Mosca/Source_3/Cartesian',message=>{
		sources[2].x = map(message.args[0],-1.0,1.0,-350,350);
		sources[2].y = map(message.args[2],-1.0,1.0,350,-350);
		sources[2].z = map(message.args[1],-1.0,1.0,350,-350);
		sources[2].isDisplay = true;
	})

	osc.on('/Mosca/Source_4/Cartesian',message=>{
		sources[3].x = map(message.args[0],-1.0,1.0,-350,350);
		sources[3].y = map(message.args[2],-1.0,1.0,350,-350);
		sources[3].z = map(message.args[1],-1.0,1.0,350,-350);
		sources[3].isDisplay = true;
	})
	osc.on('/Mosca/Source_5/Cartesian',message=>{
		//console.log(po.args);
		sources[4].x = map(message.args[0],-1.0,1.0,-350,350);
		sources[4].y = map(message.args[2],-1.0,1.0,350,-350);
		sources[4].z = map(message.args[1],-1.0,1.0,350,-350);
		sources[4].isDisplay = true;
	})

	osc.on('/Mosca/Source_6/Cartesian',message=>{
		sources[5].x = map(message.args[0],-1.0,1.0,-350,350);
		sources[5].y = map(message.args[2],-1.0,1.0,350,-350);
		sources[5].z = map(message.args[1],-1.0,1.0,350,-350);
		sources[5].isDisplay = true;
	})
	osc.on('/Mosca/Source_7/Cartesian',message=>{
		sources[6].x = map(message.args[0],-1.0,1.0,-350,350);
		sources[6].y = map(message.args[2],-1.0,1.0,350,-350);
		sources[6].z = map(message.args[1],-1.0,1.0,350,-350);
		sources[6].isDisplay = true;
	})

	osc.on('/Mosca/Source_8/Cartesian',message=>{
		sources[7].x = map(message.args[0],-1.0,1.0,-350,350);
		sources[7].y = map(message.args[2],-1.0,1.0,350,-350);
		sources[7].z = map(message.args[1],-1.0,1.0,350,-350);
		sources[7].isDisplay = true;
	})

	osc.on('/Mosca/Orientation',orMessRec=>{
		//console.log(orMessRec.args[0],orMessRec.args[1],orMessRec.args[2])
		orientationX.value(orMessRec.args[0]);
		orientationY.value(orMessRec.args[1]);
		orientationZ.value(orMessRec.args[2])
	});

	osc.on('/Mosca/Source_1/Level',message=>{
		sources[0].level = message.args;
	})
	osc.on('/Mosca/Source_1/Contraction',message=>{
		sources[0].contraction = message.args;
	})
	osc.on('/Mosca/Source_1/Doppler_amount',message=>{
		sources[0].doppler_Amount = message.args;
	})
	osc.on('/Mosca/Source_1/Input/Channels',message=>{
		sources[0].chanels = message.args
	})

	//Don't work???
	osc.on('/Mosca/Source_1/Input/Loop',message=>{
		sources[0].isLoop = message.args;
	})	
}
