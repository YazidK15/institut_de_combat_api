const seances = require ('../models/seances');

class seancesService {

    async getAllSeances () {
        return await seances.findAll();
    }

    async getSeancesByID (seanceID){
        return await seances.findByPk(seanceID);
    }

    async addSeances (seance) {
        return await seances.create(seance);
    }

    async deleteSeances (id) {
        return await seances.destroy({ where: { id_seance: id } });
    }

    async updateSeances (id, seance) {
        return await seances.update(seance, { where: { id_seance: id } });
    }

}

module.exports = new seancesService();