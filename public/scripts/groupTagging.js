
function createGroup(fields) {
  fetch('/api/groupTagging', {method: 'POST', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
    .then(showResponse)
    .catch(showResponse);
}

function getGroup(fields) {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  fetch(`/api/groupTagging?groupUsername=${fields.groupUsername}`)
    .then(showResponse)
    .catch(showResponse);
}

function addGroupMember(fields) {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  fetch(`/api/groupTagging?groupUsername=${fields.groupUsername}&addedGroupMemberUsername=${fields.addedGroupMemberUsername}`, {method: 'PUT', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
    .then(showResponse)
    .catch(showResponse);
}

function removeGroupMember(fields) {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  fetch(`/api/groupTagging?groupUsername=${fields.groupUsername}&removedGroupMemberUsername=${fields.removedGroupMemberUsername}`, {method: 'PUT', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
    .then(showResponse)
    .catch(showResponse);
}

function addAdminMember(fields) {
// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  fetch(`/api/groupTagging?groupUsername=${fields.groupUsername}&addedAdminUsername=${fields.addedAdminUsername}`, {method: 'PUT', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
    .then(showResponse)
    .catch(showResponse);
}

function removeAdminMember(fields) {
// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  fetch(`/api/groupTagging?groupUsername=${fields.groupUsername}&removedAdminUsername=${fields.removedAdminUsername}`, {method: 'PUT', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
    .then(showResponse)
    .catch(showResponse);
}

function addGroupTag(fields) {
// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  fetch(`/api/groupTagging?groupUsername=${fields.groupUsername}&taggedFreetId=${fields.taggedFreetId}`, {method: 'PUT', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
    .then(showResponse)
    .catch(showResponse);
}
