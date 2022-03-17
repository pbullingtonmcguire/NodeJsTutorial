#!/usr/bin/node
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.sendFile('/Users/parker/Documents/NodeJsTutorial/birthdays/birthdays.html');
})

app.listen(3000, () => console.log('Server ready'))
