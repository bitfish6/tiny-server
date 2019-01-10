const path = require('path')

var newPath = path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
console.log(newPath)

var folderPath = '/User/Bob//aa/bb'
console.log(path.normalize(folderPath))

var fileName = './a/b/n/index.html'
console.log(path.basename(fileName))

console.log(path.extname(fileName))