const express = require('express');
const reservationsController = require('../controllers/reservationsController');


const router = express.Router();

router.get('/', (request, result) => {reservationsController.getAllReservations(request, result)});
router.get('/:id', (request, result) => {reservationsController.getReservationsByID(request, result)});
router.post('/', (request, result) => {reservationsController.addReservations(request, result)});
router.delete('/:id', (request, result) => {reservationsController.deleteReservations(request, result)});
router.patch('/:id', (request, result) => {reservationsController.updateReservations(request, result)});


module.exports = router;