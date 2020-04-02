/**
* Login a la API de Invertir Online
* @customfunction
**/

function loginIOL() {
  const urlLogin = 'https://api.invertironline.com/token'
  const headers = {'Content-Type': 'application/x-www-form-urlencoded'};
  const payload = 'username=yourusername&password=yourpassword&grant_type=password';
  const options = {
    'headers': headers,
    'method': 'post',
    'payload': payload
  }
  const response = UrlFetchApp.fetch(urlLogin, options)
  return JSON.parse(response.getContentText()).access_token;
}
