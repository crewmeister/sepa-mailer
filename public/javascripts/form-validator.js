$(function() { 
  $("#sepa-mandate").validate({
          rules: {
              name  : { required:true },
              address : { required:true },
              zip_city : { required:true },
              country : { required:true },
              iban : { required:true, minlength: 10, maxlength: 34 },
              bic : { required:true, minlength: 8, maxlength: 11 },
              confirm : { required:true },
              date : { required:true },
              location : { required:true }
          },
          messages : {
              name : "Bitte geben Sie den Namen des Kontoinhabers an (Firmenname bei Firmenkonto bzw. Vor- und Nachname).",
              address : "Bitte geben Sie die Straße und Hausnummer des Kontoinhabers an.",
              zip_city : "Bitte geben Sie die Postleitzahl und den Ort des Kontoinhabers an.",
              country : "Bitte geben Sie das Land des Kontoinhabers an.",
              iban : "Bitte geben Sie eine gültige IBAN an.",              
              bic : "Bitte geben Sie eine gültige BIC an.",     
              confirm : "Bitte bestätigen Sie die Mandatserstellung.", 
              date : "Bitte gegeben Sie das heutige Datum an",
              location : "Bitte gegeben Sie den Ort/Stadt an, an dem sie sich aktuell befinden" 
          }
      });
    
      $('input[name=date]').val(getCurrentDateString());
});

function getCurrentDateString() {
  var now = new Date();
  return now.getDate() + "." + (now.getMonth()+1) + "." + now.getFullYear();
}
