const express = require('express');
const { petsIndex } = require('../model/petsModel');

const petsRouter = express.Router();

// ROUTES
petsRouter.get('/', async (req, res) => {
  try {
    // gauti viusu pets su modelio funkcija
    const allPets = await petsIndex();
    // issiusti atskyma su res
    res.json(allPets);
  } catch (error) {
    console.log('error ===', error);
    res.status(500).json({ msg: 'Some things dont works' });
  }
});

module.exports = petsRouter;
