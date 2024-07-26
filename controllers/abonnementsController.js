const abonnementsService = require ('../services/abonnementsService');

class abonnementsController {

    async getAllAbonnements(request, result) {
        try {
            const abonnements = await abonnementsService.getAllAbonnements();
            result.status(200).json(abonnements);
        } catch (error) {
            console.error(error);
            result.status(500).json({ error: 'Erreur lors de la récupération des abonnements' });
        }
    }

    async getAbonnementsByID(request, result) {
        try {
            const abonnements = await abonnementsService.getAbonnementsByID(request.params.id);
            if (!abonnements) {
                return result.status(404).json({ error: 'Abonnement non trouvé' });
            }
            result.status(200).json(abonnements);
        } catch (error) {
            console.error(error);
            result.status(500).json({ error: 'Erreur lors de la récupération de l\'abonnement' });
        }
    }

    async addAbonnements(request, result) {
        try {
            const abonnements = await abonnementsService.addAbonnements(request.body);
            result.status(201).json(abonnements);
        } catch (error) {
            console.error(error);
            result.status(500).json({ error: 'Erreur lors de l\'ajout de l\'abonnement' });
        }
    }

    async deleteAbonnements(request, result) {
        try {
            const abonnements = await abonnementsService.deleteAbonnements(request.params.id);
            if (abonnements === 0) {
                return result.status(404).json({ error: 'Abonnement non trouvé' });
            }
            result.status(204).send();
        } catch (error) {
            console.error(error);
            result.status(500).json({ error: 'Erreur lors de la suppression de l\'abonnement' });
        }
    }

    async updateAbonnements(request, result) {
        try {
            const abonnements = await abonnementsService.updateAbonnements(request.params.id, request.body);
            if (abonnements === 0) {
                return result.status(404).json({ error: 'Abonnement non trouvé' });
            }
            result.status(200).json({ message: "Abonnement mis à jour avec succès" });
        } catch (error) {
            console.error(error);
            result.status(500).json({ error: 'Erreur lors de la mise à jour de l\'abonnement' });
        }
    }
}

module.exports = new abonnementsController();