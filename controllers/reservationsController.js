const reservationsService = require('../services/reservationsService');

class reservationsController {

    async getAllReservations(request, result) {
        try {
            const reservations = await reservationsService.getAllReservations();
            result.status(200).json(reservations);
        } catch (error) {
            console.error(error);
            result.status(500).json({ error: 'Erreur lors de la récupération des réservations' });
        }
    }

    async getReservationsByID (request, result){
        try {
            const reservation = await reservationsService.getReservationsByID(request.params.id);
            if (!reservation) {
                result.status(404).json({ error: 'Réservation non trouvée' });
            } else {
                result.status(200).json(reservation);
            }
        } catch (error) {
            console.error(error);
            result.status(500).json({ error: 'Erreur lors de la récupération de la réservation' });
        }
    }

    async addReservations(request, result) {
        try {
            const reservation = await reservationsService.addReservations(request.body);
            result.status(201).json(reservation);
        } catch (error) {
            console.error(error);
            result.status(500).json({ error: 'Erreur lors de l\'ajout de la réservation' });
        }
    }

    async deleteReservations (request, result){
        try {
            const deleted = await reservationsService.deleteReservations(request.params.id);
            if (!deleted) {
                result.status(404).json({ error: 'Réservation non trouvée' });
            } else {
                result.status(204).json();
            }
        } catch (error) {
            console.error(error);
            result.status(500).json({ error: 'Erreur lors de la suppression de la réservation' });
        }
    }

    async updateReservations (request, result) {
        try {
            const updated = await reservationsService.updateReservations(request.params.id, request.body);
            if (!updated) {
                result.status(404).json({ error: 'Réservation non trouvée' });
            } else {
                result.status(204).json();
            }
        } catch (error) {
            console.error(error);
            result.status(500).json({ error: 'Erreur lors de la modification de la réservation' });
        }
    }

}

module.exports = new reservationsController();