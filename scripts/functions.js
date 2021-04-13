//marge pour la position de la souris
function range(X,Y){
	if(X < 750 && X > 50 && Y < 750 && Y > 50){
		return true;
	}
}
//send osc Message 
function playSource(){
	if(this.checked()){
		var playS = new OSC.Message('Mosca/Source_'+selector.selected()+'/Play',1);
		sources[selector.selected()-1].isPlay = true;
		playCbx.checked(true);
		osc.send(playS);
	}else{
		var stopS = new OSC.Message('Mosca/Source_'+selector.selected()+'/Play',0);
		sources[selector.selected()-1].isPlay = false;
		osc.send(stopS);
	}	
}
	
//Display or hide the source
function displayIt(){
	sources[selector.selected()-1].isDisplay = true;
}
function hideIt(){
	sources[selector.selected()-1].isDisplay = false;
}

//give all data from active sources
function dumper(){
	for(i =0; i<nbSources;i++){
		if(sources[i].isDisplay == true){
			console.log('sources',i,'x:',sources[i].x,'y:',sources[i].y,'z:',sources[i].z);
			console.log('sources',i,'R:',sources[i].R,'G:',sources[i].G,'B:',sources[i].B);
			console.log('play:',sources[i].isPlay);
		}
	}
}

function selectLibrary(){
	for(i = 0; i<nbSources;i++){
		sources[i].library = librarySelector.selected();
	}
}