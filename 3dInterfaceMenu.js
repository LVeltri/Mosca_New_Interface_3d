let selector;
let sourcesNumber;
let a;

function menu(){
	//menu
	selector = createSelect();
	//textFont(ari);
	//text('sources');
	sourcesNumber = createSelect();
	sourcesNumber.position(10,10);


	for(let i = 0; i<=18; i++){
		sourcesNumber.option(''+i,i);
		
	}
	sourcesNumber.selected(0);
	
	a = sourcesNumber.value();

	for(let j = 0; j< nbSources +1; j++){
		selector.option(""+j,j);
	}
	selector.selected(0);

	
	//prevoir les textes
	
}

