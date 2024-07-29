const express = require('express');
const utilisateursController = require('../controllers/utilisateursController');

const router = express.Router();

router.get('/', (request, result) => {utilisateursController.getAllUtilisateurs(request, result)});
router.get('/:id', (request, result) => {utilisateursController.getUtilisateursById(request, result)});
router.post('/', (request, result) => {utilisateursController.addUtilisateurs(request, result)});
router.delete('/:id', (request, result) => {utilisateursController.deleteUtilisateurs(request, result)});
router.patch('/:id', (request, result) => {utilisateursController.updateUtilisateurs(request, result)});
router.post('/login', (request, result) => {utilisateursController.login(request, result)});


module.exports = router;