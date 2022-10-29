
function createContactInformationDisplay(fields) {
  fetch('/api/contactInformationDisplay', {method: 'POST', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
    .then(showResponse)
    .catch(showResponse);
}

function updateContactInformationDisplay(fields) {
  fetch('/api/contactInformationDisplay', {method: 'PUT', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
    .then(showResponse)
    .catch(showResponse);
}

function getContactInformationDisplay(fields) {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  fetch(`/api/contactInformationDisplay?username=${fields.username}`)
    .then(showResponse)
    .catch(showResponse);
}
