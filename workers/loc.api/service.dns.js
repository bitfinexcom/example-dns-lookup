'use strict'

const { Api } = require('bfx-wrk-api')

class dnsService extends Api {
  space (service, msg) {
    const space = super.space(service, msg)
    return space
  }

}

module.exports = dnsService
