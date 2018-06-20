const Nexmo = require('nexmo');

const container = require('@arkecosystem/core-container')
const logger = container.resolvePlugin('logger')

module.exports = class NexmoClient {
  constructor (options) {
    this.nexmo = new Nexmo({
      apiKey: options.apiKey,
      apiSecret: options.apiSecret
    })

    this.options = options
    console.log(options)
  }

  async sendMessage (message) {
    try {
      this.nexmo.message.sendSms(
        this.options.from, this.options.to, message, {type: 'unicode'},
        (err, responseData) => {
          if (responseData) {
            console.log(responseData)
          }

          if (err) {
            console.log(err)
          }
        }
      )

      // logger.info(`[Monitor] An SMS was send with the ID ${message.sid} for a missed block at height ${block.height}.`)
    } catch (error) {
      logger.info(`[Monitor] Failed to send an SMS. Reason: ${error.message}`)
    }
  }
}
