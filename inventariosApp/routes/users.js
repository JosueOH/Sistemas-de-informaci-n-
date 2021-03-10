var express = require('express');
var router = express.Router();
var usuario = require('../models/user');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', (req, res, next)=>{
  //console.log(req.body.email, req.body.pass)
  usuario.login(req.body.email, req.body.pass , ( e, d)=>{
    //E sha256 es un algoritmo de hash
    if (d){
      res.send('Login correcto');
      ses=req.session;
    } else {
      res.json(e);
    }
  });



});
module.exports = router;
