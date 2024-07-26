const express = require('express');
const abonnementsController = require ('../controllers/abonnementsController');

const router = express.Router();

router.get('/', (request, result) => {abonnementsController.getAllAbonnements(request, result)});
router.get('/:id', (request, result) => {abonnementsController.getAbonnementsByID(request, result)});
router.post('/', (request, result) => {abonnementsController.addAbonnements(request, result)});
router.delete('/:id', (request, result) => {abonnementsController.deleteAbonnements(request, result)});
router.patch('/:id', (request, result) => {abonnementsController.updateAbonnements(request, result)});


module.exports = router;