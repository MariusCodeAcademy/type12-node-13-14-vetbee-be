const express = require('express');

const petsRouter = express.Router();

// ROUTES
petsRouter.get('/', async (req, res) => {
  res.send('get all pets');
});

module.exports = petsRouter;
