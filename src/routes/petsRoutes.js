const express = require('express');
const { petsIndex, petsRemove } = require('../model/petsModel');

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
petsRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) throw new Error('no id given');
    // gauti viusu pets su modelio funkcija
    const deleteSuccess = await petsRemove(id);
    if (deleteSuccess) {
      res.json({ msg: 'delete success' });
      return;
    }
    res.status(400).json({ msg: 'nothing deleted' });
    // issiusti atskyma su res
  } catch (error) {
    console.log('error ===', error);
    res.status(500).json({ msg: 'Some things dont works' });
  }
});

module.exports = petsRouter;
