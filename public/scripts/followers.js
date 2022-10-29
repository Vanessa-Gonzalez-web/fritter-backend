
function createFollowersView(fields) {
  fetch('/api/followers', {method: 'POST', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
    .then(showResponse)
    .catch(showResponse);
}

function addUserFollower(fields) {
  fetch('/api/followers', {method: 'PUT', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
    .then(showResponse)
    .catch(showResponse);
}

function removeUserFollower(fields) {
  fetch('/api/followers', {method: 'PUT', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
    .then(showResponse)
    .catch(showResponse);
}

function getUserFollowers(fields) {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  fetch(`/api/followers?username=${fields.username}&followers=${fields.followers}`)
    .then(showResponse)
    .catch(showResponse);
}

function getUserFollowing(fields) {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  fetch(`/api/followers?username=${fields.username}&followers=${fields.followers}`)
    .then(showResponse)
    .catch(showResponse);
}
