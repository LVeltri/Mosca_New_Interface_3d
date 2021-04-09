const osc = new OSC({
	discardLateMessage: false,
	plugin: new OSC.WebscocketClientPlugin()
});

osc.open();