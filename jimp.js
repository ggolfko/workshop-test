const Jimp = require("jimp")
const del = require("del")

Jimp.read("images/o/Capture.jpg").then(function (lenna) {
  lenna.resize(200, 200) // resize
    .quality(60) // set JPEG quality
    // .greyscale() // set greyscale
    .write("images/n/Capture.jpg") // save

  del.sync([`images/o/Capture.jpg`, `!/images/o`])

}).catch(function (err) {
  console.error(err)
})