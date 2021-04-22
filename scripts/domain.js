class userMain{//user position
	constructor(_x,_y,_z,size){
		this.x = _x;
		this.y = _y;
		this.z = _z;
		this.size = size;
	}
	draw(r,g,b){
		this.r =r;
		this.g =g;
		this.b =b;

		translate(this.x,this.y,this.z);
		//fill(this.r,this.g,this.b);
		stroke(100,40,0);
		noFill();
		sphere(this.size);
	}
}

class domain{ //sound domain Sphere --> final : half sphere
	constructor(x,y,z,size){
		this.x=x;
		this.y=y;
		this.z=z;
		this.size=size;
	}
	draw(){
		translate(this.x,this.y,this.z);
		noFill();
		stroke(0);
		sphere(this.size);
	}
}