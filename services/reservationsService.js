const reservations = require ('../models/reservations');

class reservationsService {

    async getAllReservations() {
        return await reservations.findAll();
    }

    async getReservationsByID (reservationID){
        return await reservations.findByPk(reservationID);
    }

    async addReservations (reservation) {
        return await reservations.create(reservation);
    }

    async deleteReservations (id) {
        return await reservations.destroy({ where: { id_reservation: id } });
    }

    async updateReservations (id, reservation) {
        return await reservations.update(reservation, { where: { id_reservation: id } });
    }
}

module.exports = new reservationsService();