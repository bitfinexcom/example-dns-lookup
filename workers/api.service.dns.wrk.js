'use strict'

const { WrkApi } = require('bfx-wrk-api')

class WrkdnsServiceApi extends WrkApi {
  constructor (conf, ctx) {
    super(conf, ctx)

    this.loadConf('service.dns', 'dns')

    this.init()
    this.start()
  }

  getApiConf () {
    return {
      path: 'service.dns'
    }
  }

  getPluginCtx (type) {
    const ctx = super.getPluginCtx(type)

    switch (type) {
      case 'api_bfx':
        // ctx.foo = 'bar'
        break
    }

    return ctx
  }

  init () {
    super.init()
  }
}

module.exports = WrkdnsServiceApi
