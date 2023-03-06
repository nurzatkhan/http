const { default: axios } = require("axios");

 async function getTocken() {
 const params = new URLSearchParams();
 params.append('client_id', 'ohif-viewer');
 params.append('username', '1234');
 params.append('password', '');
 params.append('grant_type', 'password');


 const data = await axios.post("https://mr.eyelab.kz/auth/realms/ohif/protocol/openid-connect/token", params).then(data => data.data)
 return {
  headers: { Authorization: `Bearer ${data.access_token}` }
 };
}
module.exports = getTocken