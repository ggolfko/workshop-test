let text = 'ฟหกฟหก ขหหกด หกด asdasdasa asdasd'
text = text.toLocaleLowerCase().replace(/\s+/g, '-')
var id = function () {
  return '-' + (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toLocaleLowerCase()
};
let title = text + id()
// console.log(title)