// var QRCode = require('qrcode')

// QRCode.toDataURL('http://www.google.com', {
//   color: {
//     dark: '#000', // Blue dots
//     light: '#0000' // Transparent background
//   }
// }, function (err, string) {
//   if (err) throw err
//   console.log(string)
// })


// var fs = require('fs'),
//   qrCodeLogo = require('qrcode-logo'),

//   url = 'https://www.baidu.com/',
//   qrcodeImgFilePath = '/Users/test/myworkspace/qr.png';

// qrCodeLogo(url, qrcodeImgFilePath, function (err, img) {
//   console.log(err, img); // img为生成二维码图片信息（包含高度、宽度等信息） 
// });

var fancyQR = require('fancyqr');

fancyQR.toDataURL('hello world!', {
  logoPath: __dirname + '/logo.png'
}, function (err, urlString) {
  if (err) console.log(err)
  console.log(urlString)
  //do something here
});