'use strict'

const container = require('@arkecosystem/core-container')
const logger = container.resolvePlugin('logger')

const listener = require('./listener')
const NexmoClient = require('./nexmoclient')

exports.plugin = {
  pkg: require('../package.json'),
  register: async (container, options) => {
    logger.info('[Monitor] Waiting for applied transactions')

    listener.setUp(options, new NexmoClient(options.nexmo))
  }
}
