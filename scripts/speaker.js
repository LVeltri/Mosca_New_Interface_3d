class speaker{
	constructor(_x=0,_y=0,_z=0,_R=0,_G=0,_B=0){
		this.x = _x;
		this.y = _y;
		this.z = _z;
		this.R = _R;
		this.G = _G;
		this.B = _B;
	}
	draw(_sizeSource = 10){
		this.sizeSource = _sizeSource;
		fill(this.R,this.G,this.B);
		noStroke();
		translate(this.x,this.y,this.z);
		sphere(this.sizeSource);
	}
	options(_isPlay=false,_isDisplay=false,_isLoop = 0,_library = 'Ambitools',_localEffect='Clear',_chanels = 1,_bus = 1,_external=0,_scsynth=0){
		this.isPlay = _isPlay;
		this.isDisplay = _isDisplay;
		this.library = _library;
		this.localEffect = _localEffect;
		this.isLoop = _isLoop;
		this.chanels = _chanels;
		this.bus = _bus;
		this.external = _external;
		this.scsynth = _scsynth;
	}
	sliders(_level=0,_contraction=1,_Doppler_amount = 0,_Stereo_angle = 60,_Bfmt_rotation = 0,_Local_amount = 0, _Room_delay = 0.5, _Damp_decay = 0.5){
		this.level = _level;
		this.contraction = _contraction;
		this.doppler_Amount = _Doppler_amount;
		this.stereoangle = _Stereo_angle;
		this.bfmt = _Bfmt_rotation;
		//local effect
		this.localAmount = _Local_amount;
		this.roomDelay = _Room_delay;
		this.dampDecay = _Damp_decay;
	}
	aux(_aux1 = 0,_aux2 = 0,_aux3 = 0,_aux4 = 0,_aux5 =0 ,_check1=false,_check2=false,_check3=false,_check4=false,_check5=false){
		this.aux1 = _aux1;
		this.aux2 = _aux2;
		this.aux3 = _aux3;
		this.aux4 = _aux4;
		this.aux5 = _aux5;
		this.check1 = _check1;
		this.check2 = _check2;
		this.check3 = _check3;
		this.check4 = _check4;
		this.check5 = _check5;
	}
	lib(_Grain_rate =10,_Window_size=0.1,_Random_size=0,_Spread=0,_Diffuse=0){
		//Josh
		this.grainRate = _Grain_rate;
		this.windowSize = _Window_size;
		this.randomSize = _Random_size;
		//ATK
		this.spread = _Spread;
		this.diffuse = _Diffuse;
	}
}