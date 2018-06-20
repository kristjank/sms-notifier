'use strict'
const container = require('@arkecosystem/core-container')
const emitter = container.resolvePlugin('event-emitter')

class Listener {
  setUp (options, nexmo) {
    console.log(options.publicKey)

    emitter.on('transaction.applied', data => {
      if (data.senderPublicKey === options.senderPublicKey) {
        console.log(data)
        nexmo.sendMessage(`Transaction ${data.id} applied to wallet ${data.senderPublicKey} with ${data.amount} ARKTOSHI`)
      }
    })

    emitter.on('block.forged', data => {
      if (data.generatorPublicKey === options.publicKey) {
        console.log('Sending delegate forged info')
        nexmo.sendMessage(`Block ${data.idHex} was forged by ${options.publicKey}.`)
      }
      console.log(data)
    })
  }
}
module.exports = new Listener()
