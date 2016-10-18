var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('sepa-input-form', { title: 'SEPA-Mandat für Crewmeister erteilen' });
});

/* GET home page. */
router.post('/', function(req, res, next) {
  var bic = req.body.bic;
  var iban = req.body.iban;
  
  var ip_address = req.connection.remoteAddress;
  var ip_address_proxied = request.headers['X-Forwarded-For'];
  
  res.render('thank-you', { title: 'Danke!' });
});

module.exports = router;
