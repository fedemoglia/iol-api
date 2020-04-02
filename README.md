# iol-api
Funciones de Google Script para consumir la [API de Invertir Online](https://api.invertironline.com/)

Por ahora permite autenticarse ([Login.gs](../master/Login.gs)) y acceder al estado de cuenta para obtener el total en dólares y/o pesos ([AccountStatus.gs](../master/AccountStatus.gs))

Todo lo que se necesita para utilizarse en Spreasheet es reemplazar usuario y contraseña en la línea 9 de [Login.gs](../master/Login.gs)

`const payload = 'username=yourusername&password=yourpassword&grant_type=password';`

Hay que crear los 2 scripts en el archivo donde se quiere utilizar la fórmula con el código en https://script.google.com/home. Si están en el documento pueden entrar a través del menú *Herramientas -> Editor de secuencias de comandos*. Una vez creados tienen que ir al menú menú *Ver -> Mostrar archivo de manifiesto*. Les va a aparecer _appsscript.json_ y tienen que agregar esta línea 

`"oauthScopes": ["https://www.googleapis.com/auth/script.external_request"]`

para que pueda hacer request a la api de IOL. Por defecto no tiene el permiso para consultar APIs.

Luego de esto en cualquier celda de la hoja de cálculo con la que relacionaron el proyecto escriben `=amountIOL` y van a ver la ayuda de como se usa. 
![amountIOLfunction](https://i.imgur.com/bsOtw0o.png)
