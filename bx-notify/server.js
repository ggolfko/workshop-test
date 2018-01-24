const CronJob = require('cron').CronJob
const request = require('request')
const token = 'null'

var msg = "THB => XRY \n00.00"

let coinOld = {}


const job = new CronJob('* * * * * *', () => {
  getCoin().catch((error) => {
    console.log(error)
  })
  // sendToline(msg).then((resp) => {
  //   console.log(JSON.stringify(resp.message, null, '\t'))
  // }).catch((error) => {
  //   console.log(error)
  // })
}, null, true, 'Asia/Bangkok')


async function createMessage(coin) {
  let msg = `\n ${coin.primary_currency} ⇒ ${coin.secondary_currency} 
  Change: ${coinOld.change} OLD ⇒ ${coin.change} NEW 
  Last Price: ${coinOld.last_price} OLD ⇒ ${coin.last_price} NEW
  `
  return msg
}

async function getCoin(x) {
  const btc = await findBxById(1)
  const xrp = await findBxById(25)
  const msg = await createMessage(xrp)
  if (parseInt(coinOld.last_price) !== parseInt(xrp.last_price)) {
    coinOld.change = xrp.change
    coinOld.last_price = xrp.last_price
    const res = await postLine(msg)
    console.log(res)
  }
}

const findBxById = (id) => {
  return new Promise((resolve, reject) => {
    const options = {
      url: `https://bx.in.th/api/`,
      method: 'GET',
    }
    request(options, function (error, response, body) {
      if (error) reject(error)
      let data = {
        body: JSON.parse(body, null, '\t')
      }
      resolve(data.body[id])
    })
  })
}

const postLine = (msg) => {
  return new Promise((resolve, reject) => {
    request({
      method: 'POST',
      uri: 'https://notify-api.line.me/api/notify',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      'auth': {
        'bearer': token
      },
      form: {
        message: msg,
      }
    }, (err, httpResponse, body) => {
      if (err) reject(err)
      let data = {
        err: err,
        httpResponse: httpResponse,
        body: body
      }
      resolve(data.body)
    })
  })
}