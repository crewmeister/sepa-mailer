var express = require('express');
var router = express.Router();
var mandrill = require('mandrill-api/mandrill');

/* THESE ENVIRONMENT VARIABLES ARE MANDATORY!! */
var MAIL_FROM_EMAIL=process.env.MAIL_FROM_EMAIL
var MAIL_FROM_NAME=process.env.MAIL_FROM_NAME
var MAIL_TO_EMAIL=process.env.MAIL_TO_EMAIL
var MAIL_TO_NAME=process.env.MAIL_TO_NAME
var MANDRILL_API_KEY=process.env.MANDRILL_API_KEY

var mandrill_client = new mandrill.Mandrill(MANDRILL_API_KEY);

/* GET => Return sepa-input-form html page. */
router.get('/', function(req, res, next) {
  res.render('sepa-input-form', { title: 'SEPA-Mandat für Crewmeister erteilen' });
});

/* POST => Digest form input, send email and return thank-you page */
router.post('/', function(req, res, next) {
  var sepaMandate = req.body.sepaMandate;  
  var crewId = req.body.crewId;
  var ip_address = req.connection.remoteAddress;
  var ip_address_proxied = req.headers['X-Forwarded-For'];
  
  var text =  sepaMandate + "\n" +
              "\n" +
              "IP-Address: " + ip_address + " / " + ip_address_proxied;
  
  var subject = "SEPA-Mandat für Crew " + crewId;
  
  var message = {
      "text": text,
      "subject": subject,
      "from_email": MAIL_FROM_EMAIL,
      "from_name": MAIL_FROM_NAME,
      "to": [{
              "email": MAIL_TO_EMAIL,
              "name": MAIL_TO_NAME,
              "type": "to"
          }]
  }
  
  mandrill_client.messages.send({"message": message, "async": false}, function(result) {
      console.log(result);
  }, function(e) {
      console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
  });
  
  res.render('thank-you', { title: 'Danke!' });
});



  

module.exports = router;
