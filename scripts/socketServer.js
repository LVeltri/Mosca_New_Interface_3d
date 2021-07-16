const OSC = require('osc-js')

const config = {
	receiver:'ws',
	udpClient: { //Send messages
		host: 'localhost',
		port:9996
	},
	udpServer:{ //receive message from this host
		host:'localhost',//change ip if necessarly,
		port:9997
	},
	wsServer:{ //websocket server
		host:'localhost',
		port:8080
	}
}

const osc = new OSC({
	plugin : new OSC.BridgePlugin(config)
})

osc.on('open', ()=>{
console.clear();
console.log('websocket',config.wsServer);
console.log('client',config.udpClient);
console.log('server',config.udpServer);
console.log('serveur actif');

})


//ouvre le server OSC
osc.open();

osc.on('*',blob=>{
	// console.log(blob.offset);
	// console.log(blob.types);
	console.log(blob.address);
	console.log(blob.args)
})
// 	if(blob.adress == "/Mosca/Source_1/Level"){
// 		console.log('Match !');
// 		console.log(blob.args)
// 	}
// })


// setInterval(function(){
// 	console.log('send');
// 	osc.send(new OSC.Message('/Mosca/Source_1/Input/Loop',1))
// },3000);

// osc.on('/Mosca/Orientation',message=>{
// 	console.log('orientation: ',message.args);
// })
// osc.on('/Mosca/Source_1/Cartesian', message =>{
// 	console.log('source 1:')
// 	console.log('x:',message.args[0],'y:',message.args[1],'z:',message.args[2])
// })
// osc.on('/Mosca/Source_2/Cartesian', message =>{
// 	console.log('source 2:')
// 	console.log('x:',message.args[0],'y:',message.args[1],'z:',message.args[2])
// })
// osc.on('Mosca/Source_1/Level',message=>{
// 	console.log('source 1:')
// 	console.log('level:',message.args)
// })

// // osc.on('*',fr=>{
// // 	console.log('all',fr.args)
// // })

// // osc.on('Mosca/Source_1/Input/Loop',blob=>{
// // 	console.log(blob)
// // })
// // osc.on('*',blob=>{
// // 	console.log(blob)
// // })
// osc.on('/Mosca/Track_Center',message=>{
// 	console.log(message.args);
// })
// setInterval(function(){
// 	osc.send(new OSC.Message('/Mosca/orientation',Math.random()),{receiver:'udp'})
// },1000);


//setInterval(function(){osc.send(new OSC.Message('/Mosca/orientation', 5.2)),{receiver:'udp'}},500)

// osc.on('/Mosca/orientation', message =>{
// 	console.log('orientation', message.args);
// })
// console.clear();
//renvoie dans la console les messages reçu dans le port 9997
// osc.on('/Mosca/Source_1', message =>{
// 	console.log(message.args)
// });
// osc.on('/Mosca/Source_1/Cartesian', message =>{
// 	console.log('x:',message.args[0],'y:',message.args[1],'z:',message.args[2])
// })
