var express = require('express');
var router= express.Router();

router.get('/altas', (req, res, next) => {
    res.render("almacen/frmAlta");
  });

router.get('/reporte', ( req, res, next )=>{
    res.render("almacen/frmReporte");
});

router.get('/baja', ( req, res, next )=>{
    res.render("almacen/frmBaja");
});

module.exports = router;