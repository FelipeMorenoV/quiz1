const express = require('express');
const cliente_route = express.Router();
const clienteSchema = require('../models/clienteModel');

/* Ruta para crear un cliente
Endpoint: http://localhost:5000/api/v1/clientes/cliente */
cliente_route.post('/cliente', (req, res) => {
  const cliente = clienteSchema(req.body);
  cliente
    .save()
    .then((data) => res.json({ message: data }))
    .catch((error) => res.json({ message: error }));
});

/* Ruta para listar los clientes
Endpoint: http://localhost:5000/api/v1/clientes */
cliente_route.get('/', (req, res) => {
  clienteSchema
    .find()
    .then((data) => res.json({ message: data }))
    .catch((error) => res.json({ message: error }));
});

/* Ruta para consultar un cliente especifico
Endpoint: http://localhost:5000/api/v1/clientes/:clienteId */
cliente_route.get('/:clienteId', (req, res) => {
  const { clienteId } = req.params;
  clienteSchema
    .findById(clienteId)
    .then((data) => res.json({ message: data }))
    .catch((error) => res.json({ message: error }));
});

/* Ruta para editar un cliente especifico
Endpoint: http://localhost:5000/api/v1/clientes/:clienteId */
cliente_route.put('/:clienteId', (req, res) => {
  const { clienteId } = req.params;
  const clienteBody = req.body;
  clienteSchema
    .updateOne({ _id: clienteId }, {$set: clienteBody})
    .then((data) => res.json({ message: data }))
    .catch((error) => res.json({ message: error }));
});

/* Ruta para eliminar un cliente especifico
Endpoint: http://localhost:5000/api/v1/clientes/:clienteId */
cliente_route.delete('/:clienteId', (req, res) => {
  const { clienteId } = req.params;
  clienteSchema
    .remove({ _id: clienteId })
    .then((data) => res.json({ message: data }))
    .catch((error) => res.json({ message: error }));
});

module.exports = cliente_route;
