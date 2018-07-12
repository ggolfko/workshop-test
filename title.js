let text = "รักษา ทดสอบ 123 % 19dsadf -0wer .. 'ดินสอ'^^) + 9 +5 -"

var id = function () {
  return (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toLocaleLowerCase()
};
var strToSlug = (str) => {
  return str.replace(/\s+/g, '-') // Replace spaces with -
    // .replace('%', 'เปอร์เซนต์')         // Translate some charactor
    .replace(/[^\u0E00-\u0E7F\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '');
}
let title = strToSlug(text) + '-' + id()


console.log(strToSlug(title))