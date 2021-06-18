let orientationLabel;
let orientationValue;
var x=0;
var xSlider;
var plop = new OSC();
let clara;
function setup(){
	createCanvas(600,600);
	angleMode(DEGREES);
	orientationLabel = createP('Orientation');
	orientationLabel.position(15,1);
	orientationLabel.class('label');
	orientationValue = createP('');
	orientationValue.position(20,20);
	orientationValue.class('label');
	xSlider = createSlider(-3.14,3.14,0,0.001);


}
function draw(){
	background(100);
	noFill();
	strokeWeight(3);
	circle(width/2, height/2,400);
	translate(width/2,height/2);
	circle(0,0,20);
	rectMode(CENTER);
	rotate(xSlider.value());
	x += 0.001;
	rect(0,60,20,120);

	// if(mouseIsPressed){
	// 	console.log(mouseX);
	// }
	if(mouseIsPressed){
		orientationValue.html(xSlider.value());
		sendOx();
	}
	clara = new OSC.Message('/Mosca/Orientation');
	// osc.send(oX);
}
function sendOx(){
	plop.send(clara);
}