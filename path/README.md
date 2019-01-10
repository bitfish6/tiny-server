# path
## how can we get current file's name or directory name ?
```
console.log(__dirname)
console.log(__filename)
```
process.PWD

## join
'/foo', 'bar', 'baz/asdf', 'quux', '..'
```
var newPath = path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
```

## normalize
```
var folderPath = '/User/Bob//aa/bb'
console.log(path.normalize(folderPath))
```
