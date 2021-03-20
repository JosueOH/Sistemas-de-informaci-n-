var express = require('express');
var router= express.Router();
const session = require('express-session');

router.get('/altas', (req, res, next) => {
    var ses=req.session;
    res.render("almacen/frmAlta", {user : ses.userdata, token: ses.token} );
  });

router.get('/reporte', ( req, res, next )=>{
    var ses=req.session;
    res.render("almacen/frmReporte", {user : ses.userdata});
});

router.get('/baja', ( req, res, next )=>{
    var ses=req.session;
    res.render("almacen/frmBaja", {user : ses.userdata});
});

module.exports = router;