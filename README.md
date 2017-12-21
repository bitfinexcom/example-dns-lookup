# dns-service

## Setup

Run two Grapes:

```
grape --dp 20001 --aph 30001 --bn '127.0.0.1:20002'
grape --dp 20002 --aph 40001 --bn '127.0.0.1:20001'
```

```
# Add base as upstream:
git remote add upstream https://github.com/bitfinexcom/bfx-util-js

# Configure service:
cp config/common.json.example config/common.json
cp config/facs/grc.config.json.example config/facs/grc.config.json
cp config/service.dns.json.example config/service.dns.json
```


### Boot worker

```
node worker.js --env=development --wtype=wrk-dns-service-api --apiPort 1337
```

## Grenache API

### action: 'getHostname'

  - `args`: &lt;Array&gt;
    - `0`: &lt;Object&gt;
      - `ip`: &lt;String&gt; Ip to resolve

**Response:**

  - &lt;Array&gt;
    - `0`: &lt;String&gt; Ip that was resolved
    - `1`: &lt;Array&gt; Hostnames

**Example Payload:**

```js
args: [ { ip: '8.8.8.8' } ]
```

**Example Response:**

```js
[ '8.8.8.8', [ 'google-public-dns-a.google.com' ] ]
```

Example: [example.js](example.js)
