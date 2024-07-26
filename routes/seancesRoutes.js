const express = require('express');
const seancesController = require('../controllers/seancesController');

const router = express.Router();

router.get('/', (request, result) => {seancesController.getAllSeances(request, result)});
router.get('/:id', (request, result) => {seancesController.getSeancesByID(request, result)});
router.post('/', (request, result) => {seancesController.addSeances(request, result)});
router.delete('/:id', (request, result) => {seancesController.deleteSeances(request, result)});
router.patch('/:id', (request, result) => {seancesController.updateSeances(request, result)});


module.exports = router;