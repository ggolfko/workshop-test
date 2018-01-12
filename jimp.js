const Jimp = require("jimp")

Jimp.read("images/o/Capture4.PNG").then(function (lenna) {
  lenna.resize(2048, 2732) // resize
    .quality(60) // set JPEG quality
    // .greyscale() // set greyscale
    .write("images/n/Capture4.jpg") // save
}).catch(function (err) {
  console.error(err)
});