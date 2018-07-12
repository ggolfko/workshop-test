const request = require('request')
const cheerio = require('cheerio')
let d = {
    pymtToken: "4836913e7f77de8b1e0be2fbceed84e9d3c27be6bf9c3e971b81cfb7219ae132",
    pymtProcess: "CREATE",
    pymtMethod: "CC",
    pymtNumber: "BxTR1526489409844",
    pymtName: "aaaaaaa",
    pymtDesc: "bbbbbbb",
    pymtAmount: "9.99",
    pymtCurrency: "THB",
    pymtReturnURL: "http://localhost:3000/api/v1.1/payments/link/callback"
}
let delay = (time) => (result) => new Promise(resolve => setTimeout(() => resolve(result), time))
request.post({
    url: 'https://payment.webpakpay.com/api.php',
    form: d
}, (err, httpResponse, body) => {
    if (!err) {
        const $ = cheerio.load(body)
        let dd = {
            respProcess: $('input[id="respProcess"]').val(),
            respNumber: $('input[id="respNumber"]').val(),
            respStatus: $('input[id="respStatus"]').val(),
            respLink: $('input[id="respLink"]').val()
        }
        request.post({
            url: 'http://localhost:3000/api/v1.1/payments/link/callback',
            form: dd
        }, (err, httpResponse, body) => {
            if (!err) {
                console.log(body)
            }
        })
    }
})