const OSC = require('osc-js')

const config = {
	// receiver: 'ws',
	udpClient: {
		host: '147.210.110.87',
		port:9998
	},
	udpServer:{ //receive message from this host
		host:'147.210.110.87',//change ip if necessarly,
		port:9996
	},
	wsServer:{
		host: 'localhost',
		port:8080
	}

}

const osc = new OSC({
	plugin : new OSC.BridgePlugin(config)
})
//ouvre le server OSC
osc.open();
console.log('websocket',config.wsServer)
console.log('client',config.udpClient)
console.log('server',config.udpServer)
//Donne les configs
console.log('serveur actif');


osc.on('/Mosca/Source_1/Cartesian', message =>{
	console.log('x:',message.args[0],'y:',message.args[1],'z:',message.args[2])
})
osc.on('/Mosca/orientation', message =>{
	console.log('orientation', message.args);
})

//renvoie dans la console les messages reçu dans le port 9997
// osc.on('/Mosca/Source_1', message =>{
// 	console.log(message.args)
// });
// osc.on('/Mosca/Source_1/Cartesian', message =>{
// 	console.log('x:',message.args[0],'y:',message.args[1],'z:',message.args[2])
// })
