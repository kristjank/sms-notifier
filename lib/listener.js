'use strict'
const container = require('@arkecosystem/core-container')
const emitter = container.resolvePlugin('event-emitter')

class Listener {
  setUp (options, nexmo) {
    // For a list of all events look at this url: https://docs.ark.io/docs/events#section-available-events
    emitter.on('transaction.applied', data => {
      if (data.senderPublicKey === options.senderPublicKey) {
        nexmo.sendMessage(`Transaction ${data.id} applied to wallet ${data.senderPublicKey} with ${data.amount} ARKTOSHI`)
      }
    })

    emitter.on('block.forged', data => {
      if (data.generatorPublicKey === options.delegatePublicKey) {
        nexmo.sendMessage(`Block ${data.idHex} was forged by ${data.generatorPublicKey}.`)
      }
      console.log(data)
    })
  }
}
module.exports = new Listener()
