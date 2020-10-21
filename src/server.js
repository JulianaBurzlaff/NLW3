//import plugin
const express = require('express');
const path = require('path');
const pages = require('./pages.js');
//init the express
const server = express();
server
  //using body from req
  .use(express.urlencoded({ extended: true }))
  //using statics files
  .use(express.static('public'))
  //set up engine template
   .set('views', path.join(__dirname, "views"))
   .set('view engine', 'hbs')
   //routes of the aplication
   .get('/', pages.index)
   .get('/orphanage', pages.orphanage)
   .get('/orphanages', pages.orphanages)
   .get('/create-orphanage', pages.createOrphanage)
   .post('/save-orphanage', pages.saveOrphanage)
   //turn on the server
server.listen(5500)