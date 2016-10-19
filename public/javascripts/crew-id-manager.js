$(function() {       
  $('input[name=crewId]').val(getCrewId());
});

function getCrewId() {
  var crewId = getUrlParameter("crewId") || getPseudoCrewIdBasedOnTimestamp();
  return crewId;
}

function getPseudoCrewIdBasedOnTimestamp() {
  return "NP" + Date.now(); // NP = Not Provided
}

function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

