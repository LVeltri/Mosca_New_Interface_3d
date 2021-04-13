class speaker{
	constructor(_x,_y,_z,_R,_G,_B,_isPlay,_isDisplay,_level=0,
		_contraction,_Doppler_ammount,_library){
		this.x = _x;
		this.y = _y;
		this.z = _z;
		this.R = _R;
		this.G = _G;
		this.B = _B;
		this.isPlay = _isPlay;
		this.isDisplay = _isDisplay;
		this.level = _level;
		this.contraction = _contraction;
		this.doppler_ammount = _Doppler_ammount;
		this.library = _library;
	}
	draw(_sizeSource){
		this.sizeSource = _sizeSource;
		fill(this.R,this.G,this.B);
		noStroke();
		translate(this.x,this.y,this.z);
		sphere(this.sizeSource);
	}
}