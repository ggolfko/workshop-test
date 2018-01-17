const Jimp = require("jimp")
const del = require("del")

Jimp.read("images/o/Capture.PNG").then(function (lenna) {
  lenna.resize(1000, 1000) // resize
    .quality(60) // set JPEG quality
    // .greyscale() // set greyscale
    .write("images/n/Capture.jpg") // save

  del.sync([`images/o/Capture.jpg`, `!/images/o`])

}).catch(function (err) {
  console.error(err)
})