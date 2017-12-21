'use strict'

const dns = require('dns')

const { Api } = require('bfx-wrk-api')

class dnsService extends Api {
  space (service, msg) {
    const space = super.space(service, msg)
    return space
  }

  getHostname (space, args, cb) {
    const ip = args.ip
    if (!ip) return cb(new Error('ERR_ARGS_NO_IP'))

    dns.reverse(ip, (err, res) => {
      if (err) return cb(err)

      cb(null, [ip, res])
    })
  }
}

module.exports = dnsService
