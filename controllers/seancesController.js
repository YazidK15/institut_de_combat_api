const seancesService = require ('../services/seancesService');

class seancesController {

    async getAllSeances(request,result){
        try {
            const seances = await seancesService.getAllSeances();
            result.status(200).json(seances);
        } catch (error) {
            console.error(error);
            result.status(500).json({ error: 'Erreur lors de la récupération des séances' });
        }
    }

    async getSeancesByID (request,result){
        try {
            const seance = await seancesService.getSeancesByID(request.params.id);
            if (!seance) {
                return result.status(404).json({ error: 'Séance non trouvée' });
            }
            result.status(200).json(seance);
        } catch (error) {
            console.error(error);
            result.status(500).json({ error: 'Erreur lors de la récupération de la séance' });
        }
    }

    async addSeances (request, result) {
        try {
            const seance = await seancesService.addSeances(request.body);
            result.status(201).json(seance);
        } catch (error) {
            console.error(error);
            result.status(500).json({ error: 'Erreur lors de l\'ajout de la séance' });
        }
    }

    async deleteSeances (request, result){
        try {
            const seance = await seancesService.deleteSeances(request.params.id);
            if (seance === 0) {
                return result.status(404).json({ error: 'Séance non trouvée' });
            }
            result.status(204).send();
        } catch (error) {
            console.error(error);
            result.status(500).json({ error: 'Erreur lors de la suppression de la séance' });
        }
    }

    async updateSeances (request, result) {
        try {
            const seance = await seancesService.updateSeances(request.params.id, request.body);
            if (seance === 0) {
                return result.status(404).json({ error: 'Séance non trouvée' });
            }
            result.status(200).json({ message : "Séance mis à jour avec succès"});
        } catch (error) {
            console.error(error);
            result.status(500).json({ error: 'Erreur lors de la mise à jour de la séance' });
        }
    }

}

module.exports = new seancesController();