const abonnements = require ('../models/abonnements');

class abonnementsService {

    async getAllAbonnements() {
        return await abonnements.findAll();
    }

    async getAbonnementsByID (abonnementID){
        return await abonnements.findByPk(abonnementID);
    }

    async addAbonnements (abonnement) {
        return await abonnements.create(abonnement);
    }

    async deleteAbonnements (id) {
        return await abonnements.destroy({ where: { id_abonnement: id } });
    }

    async updateAbonnements (id, abonnement) {
        return await abonnements.update(abonnement, { where: { id_abonnement: id } });
    }
}

module.exports = new abonnementsService();