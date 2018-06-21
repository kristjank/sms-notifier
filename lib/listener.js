'use strict'
const container = require('@arkecosystem/core-container')
const emitter = container.resolvePlugin('event-emitter')

class Listener {
  setUp (options, nexmo) {
    console.log(options)

    emitter.on('transaction.applied', data => {
      if (data.senderPublicKey === options.senderPublicKey) {
        console.log(data)
        nexmo.sendMessage(`Transaction ${data.id} applied to wallet ${data.senderPublicKey} with ${data.amount} ARKTOSHI`)
      }
    })

    emitter.on('block.forged', data => {
      if (data.generatorPublicKey === options.delegatePublicKey) {
        console.log('Sending delegate forged info')
        nexmo.sendMessage(`Block ${data.idHex} was forged by ${data.generatorPublicKey}.`)
      }
      console.log(data)
    })
  }
}
module.exports = new Listener()
