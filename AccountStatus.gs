/**
* Obtiene la cantidad de la cuenta de IOL
* @param {moneda} PESOS o dólares (por defecto trae la cantidad de esta moneda)
* @customfunction
**/

function amountIOL(moneda) {
  const accessToken = loginIOL();
  const url = 'https://api.invertironline.com/api/v2/estadocuenta'
  const headers = {'Authorization': 'Bearer ' + accessToken};
  const options = {
    'headers': headers,
  }
  const response = UrlFetchApp.fetch(url, options)
  const json = JSON.parse(response.getContentText())
  return moneda == 'PESOS'?json.cuentas[0].total:json.cuentas[1].total
}
