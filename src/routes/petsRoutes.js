const express = require('express');

const petsRouter = express.Router();

// ROUTES
petsRouter.get('/', async (req, res) => {
  // gauti viusu pets su modelio funkcija
  // issiusti atskyma su res
  res.send('get all pets');
});

module.exports = petsRouter;
