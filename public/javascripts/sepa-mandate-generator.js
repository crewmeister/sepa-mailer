$(function() {
  $( ".form--input" ).change(function() {
    updateSepaMandateText(
      $('input[name=name]').val(),
      $('input[name=address]').val(),
      $('input[name=zip_city]').val(),
      $('input[name=country]').val(),
      $('input[name=iban]').val(),
      $('input[name=bic]').val(),
      $('input[name=confirm]').val(),
      $('input[name=date]').val(),
      $('input[name=location]').val(),
      $('input[name=crewId]').val()
    );
  });
});


function updateSepaMandateText(name, address, zip_city, country, iban, bic, confirm, date, location, crewId) {
  var mandateText=getSepaMandateText(name, address, zip_city, country, iban, bic, date, location, crewId);
  setSepaMandateTextHtmlElement(mandateText);
}

function getSepaMandateText(name, address, zip_city, country, iban, bic, date, location, crewId) {
  return "SEPA-Lastschriftmandat\n" +
         "\n" +
         "Zahlungsempfänger: ATOSS ALOUD GmbH, Am Moosfeld 3, 81829 München\n" +
         "Gläubiger-Identifikationsnummer: DE22ZZZ00001919979\n" +
         "Eindeutige Mandatsreferenz: " + getMandateReferenceFromCrewId(crewId) + "\n" +
         "\n" +
         "Kontoinhaber: " + name + ", " + address + ", " + zip_city + ", " + country + "\n" +
         "IBAN: " + iban + "\n" +
         "BIC: " + bic + "\n" +
         "Datum: " + date + "\n" +
         "Ort: " + location + "\n" +
         "\n" +
         "Ich ermächtige (Wir ermächtigen) den Zahlungsempfänger, Zahlungen von meinem (unserem) Konto mittels Lastschrift einzuziehen. Zugleich weise ich mein (weisen wir unser) Kreditinstitut an, die von auf mein (unsere) Konto gezogenen Lastschriften einzulösen.\n" +
         "Hinweis: Ich kann (Wir können) innerhalb von acht Wochen, beginnend mit dem Belastungsdatum, die Erstattung des belasteten Betrages verlangen. Es gelten dabei die mit meinem (unserem) Kreditinstitut vereinbarten Bedingungen.\n" +
         "\n" +
         "By signing this mandate form, I (we) authorise the creditor to send instructions to my (our) bank to debit my (our) account and my (our) bank to debit my (our) account in accordance with the instructions from the creditor.\n" +
         "Note: I can (we can), within eight weeks, starting with the date of the debit request, demand a refund of the amount charged. The terms and conditions agreed upon with my (our) financial institution apply.\n";
         
}

function setSepaMandateTextHtmlElement(text) {
  $('textarea[name=sepaMandate]').val(text);
}

function getMandateReferenceFromCrewId(crewId) {
  return "CREWMEISTER-"+crewId + "-0001"
}