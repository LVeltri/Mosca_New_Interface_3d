//place all the speaper position

function drawSpeakerPosition(){
	let R = 300;
	stroke(0);
	fill(100,100,0);
	if(spDisplay.selected()=='Stereo'){
		push();
			translate(R*sin(90)*cos(0),R*cos(90),R*sin(90)*sin(0));
			box(20,60,40);
		pop();
		push();
			translate(R*sin(-90)*cos(0),R*cos(-90),R*sin(-90)*sin(0));
			box(20,60,40);
		pop();
	}
	else if(spDisplay.selected()=='Quadriphonic'){
		
		push();
			translate(R*cos(45),0,R*sin(45));
			rotateY(135);
			box(20,60,40);
		pop();
		
		push();
			translate(R*cos(-45),0,R*sin(-45));
			rotateY(45);
			box(20,60,40);
		pop();
		push();
			translate(R*cos(135),0,R*sin(135));
			rotateY(-135);
			box(20,60,40);
		pop();
		push();
			translate(R*cos(-135),0,R*sin(-135));
			rotateY(-45);
			box(20,60,40);
		pop();
	}
	else if(spDisplay.selected()=='Octophonic'){

		push();
			translate(R*cos(22.5),0,R*sin(22.5));
			rotateY(-22.5);
			box(20,60,40);
		pop();
		push();
			translate(R*cos(-22.5),0,R*sin(-22.5));
			rotateY(22.5);
			box(20,60,40);
		pop();
		push();
			translate(R*cos(67.5),0,R*sin(67.5));
			rotateY(-67.5);
			box(20,60,40);
		pop();
		push();
			translate(R*cos(-67.5),0,R*sin(-67.5));
			rotateY(67.5);
			box(20,60,40);
		pop();
		push();
			translate(R*cos(112.5),0,R*sin(112.5));
			rotateY(-112.5);
			box(20,60,40);
		pop();
		push();
			translate(R*cos(-112.5),0,R*sin(-112.5));
			rotateY(112.5);
			box(20,60,40);
		pop();
		push();
			translate(R*cos(157.5),0,R*sin(157.5));
			rotateY(-157.5);
			box(20,60,40);
		pop();
		push();
			translate(R*cos(-157.5),0,R*sin(-157.5));
			rotateY(157.5);
			box(20,60,40);
		pop();
	}
	else if(spDisplay.selected()=='Dome'){
	//top
		push();
			translate(-R*sin(0)*cos(0),-R*cos(0),-R*sin(0)*sin(0));
			rotateY(90);
			rotateZ(90);
			box(20,60,40);
		pop();
	//Quadri
		push();
			translate(-R*sin(50)*cos(-135),-R*cos(50),-R*sin(50)*sin(-135));
			rotateY(135);
			rotateZ(50);
			box(20,60,40);
		pop();
		push();
			translate(-R*sin(50)*cos(135),-R*cos(50),-R*sin(50)*sin(135));
			rotateY(-135);
			rotateZ(50);
			box(20,60,40);
		pop();
		push();
			translate(-R*sin(50)*cos(45),-R*cos(50),-R*sin(50)*sin(45));
			rotateY(-45);
			rotateZ(50);
			box(20,60,40);
		pop();
		push();
			translate(-R*sin(50)*cos(-45),-R*cos(50),-R*sin(50)*sin(-45));
			rotateY(45);
			rotateZ(50);
			box(20,60,40);
		pop();
	//hexa
	let thetaHex = 70;
		push();
			translate(-R*sin(thetaHex)*cos(240),-R*cos(thetaHex),-R*sin(thetaHex)*sin(240));
			rotateY(-240);
			rotateZ(30);
			box(20,60,40);
		pop();
		push();
			translate(-R*sin(thetaHex)*cos(300),-R*cos(thetaHex),-R*sin(thetaHex)*sin(300));
			rotateY(-300);
			rotateZ(30);
			box(20,60,40);		
		pop();
		push();
			translate(-R*sin(thetaHex)*cos(360),-R*cos(thetaHex),-R*sin(thetaHex)*sin(360));
			rotateY(-360);
			rotateZ(30);
			box(20,60,40);		
		pop();
		push();
			translate(-R*sin(thetaHex)*cos(60),-R*cos(thetaHex),-R*sin(thetaHex)*sin(60));
			rotateY(-60);
			rotateZ(30);
			box(20,60,40);
		pop();
		push();
			translate(-R*sin(thetaHex)*cos(120),-R*cos(thetaHex),-R*sin(thetaHex)*sin(120));
			rotateY(-120);
			rotateZ(30);
			box(20,60,40);		
		pop();
		push();
			translate(-R*sin(thetaHex)*cos(180),-R*cos(thetaHex),-R*sin(thetaHex)*sin(180));
			rotateY(-180);
			rotateZ(30);
			box(20,60,40);		
		pop();
	//octo
		push();
			translate(-R*sin(90)*cos(22.5),-R*cos(90),-R*sin(90)*sin(22.5));
			rotateY(-22.5);
			box(20,60,40);
		pop();
		push();
			translate(-R*sin(90)*cos(-22.5),-R*cos(90),-R*sin(90)*sin(-22.5));
			rotateY(22.5);
			box(20,60,40);
		pop();
		push();
			translate(-R*cos(67.5),0,-R*sin(67.5));
			rotateY(-67.5);
			box(20,60,40);
		pop();
		push();
			translate(-R*cos(-67.5),0,-R*sin(-67.5));
			rotateY(67.5);
			box(20,60,40);
		pop();
		push();
			translate(-R*cos(112.5),0,-R*sin(112.5));
			rotateY(-112.5);
			box(20,60,40);
		pop();
		push();
			translate(-R*cos(-112.5),0,-R*sin(-112.5));
			rotateY(112.5);
			box(20,60,40);
		pop();
		push();
			translate(-R*cos(157.5),0,-R*sin(157.5));
			rotateY(-157.5);
			box(20,60,40);
		pop();
		push();
			translate(-R*cos(-157.5),0,-R*sin(-157.5));
			rotateY(157.5);
			box(20,60,40);
		pop();
	}
}