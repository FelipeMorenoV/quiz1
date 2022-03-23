const express = require('express');
const clienteRoute = require('./clientes.routes');

/* Router() permite acceder a: POST, PUT, DELETE, GET, GET{:id} */
function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/clientes', clienteRoute);
}

module.exports = routerApi;
