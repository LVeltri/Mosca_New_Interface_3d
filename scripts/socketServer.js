const OSC = require('osc-js')

const config = { udpClient: { port: 9996 } } //port listening Mosca:9996 || port sending 9997
const osc = new OSC({ plugin: new OSC.BridgePlugin(config) })

osc.open()
