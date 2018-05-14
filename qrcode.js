// const https = require('https')
// const fs = require('fs')
// const querystring = require('querystring')

// let config = {
//   host: 'https://api.beecard.net:81/',
//   path: 'ebrochures?',
//   ebrochureId: 'id=591b90d3-12d0-46d4-9ce0-b985874723c8',
//   logo: 'https://static-unitag.com/file/freeqr/f5a47ac99927d7c91dedfe78983471a4.png'
// }

// let url = config.host + config.path + config.ebrochureId

// let data = {
//   data: '{"TYPE":"url","DATA":{"URL":"' + url + '"}}',
//   setting: '{"EYES":{"EYE_TYPE":"Spike"},"E":"L","BODY_TYPE":5,"LAYOUT":{"COLORBG":"ffffff","GRADIENT_TYPE":"NO_GR","COLOR1":"000000"},"ARRONDI":3,"LOGO":{"L_NAME":"' + config.logo + '","EXCAVATE":false}}'
// }

// const options = {
//   hostname: 'unitag-qr-code-generation.p.mashape.com',
//   port: 443,
//   path: '/api?' + querystring.stringify(data),
//   method: 'GET',
//   headers: {
//     'X-Mashape-Key': 'HPVJbAiFWTmshKVnclvt0O0gJjhmp1FamVCjsnBcT3tHzBlvaP',
//   }
// }

// function base64_encode(file) {
//   // read binary data
//   // var bitmap = fs.readFileSync(file);
//   // convert binary data to base64 encoded string
//   return new Buffer(file, 'binary').toString('base64');
// }

// var req = https.request(options, (res) => {
//   var body = '';
//   res.setEncoding('binary')
//   res.on('data', (chunk) => {
//     body += chunk
//   })
//   res.on('end', () => {
//     var base64str = base64_encode(body);
//     console.log("data:image/png;base64,%s", base64str)

//     // fs.writeFile("test.png", body, 'binary', (err) => {
//     //   if (err) {
//     //     return console.log(err);
//     //   }

//     // })
//   })
// })

// req.end();


var QRCode = require('qrcode')

// QRCode.toDataURL('http://www.google.com', {
//   color: {
//     dark: '#000', // Blue dots
//     light: '#0000' // Transparent background
//   }
// }, function (err, string) {
//   if (err) throw err
//   console.log(string)
// })

var opts = {
  errorCorrectionLevel: 'H',
  type: 'image/png',
  rendererOpts: {
    quality: 0.3
  },
  color: {
    dark: '#000', // Blue dots
    // light: '#0000' // Transparent background
  },
  width: 1000
}

QRCode.toFile('filename.png', 'Some text', opts, function (err) {
  if (err) throw err
  console.log('done')
})



// var fs = require('fs'),
//   qrCodeLogo = require('qrcode-logo'),

//   url = 'https://www.baidu.com/',
//   qrcodeImgFilePath = '/Users/test/myworkspace/qr.png';

// qrCodeLogo(url, qrcodeImgFilePath, function (err, img) {
//   console.log(err, img); // img为生成二维码图片信息（包含高度、宽度等信息） 
// });