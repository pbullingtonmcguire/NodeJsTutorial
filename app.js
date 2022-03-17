#!/usr/bin/node
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  if (process.env.MESSAGE)
    res.send(process.env.MESSAGE);
  else {
    res.send("");
  }
})

app.listen(3000, () => console.log('Server ready'))
