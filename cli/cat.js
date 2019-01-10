#!/usr/bin/env node
const fs = require('fs')
const promisify = require('util').promisify

const read = promisify(fs.readFile)

let fileName = process.argv[2];

(async function() {
  try{
    var data = await read(fileName,'utf-8')
    console.log(data)
  } catch (err) {
    console.log(err)
  }
})()
