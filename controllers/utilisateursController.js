const utilisateursService = require('../services/utilisateursService');

class utilisateursController {

    async getAllUtilisateurs(request, result) {
        try {
            const utilisateurs = await utilisateursService.getAllUtilisateurs();
            result.status(200).json(utilisateurs);
        } catch (error) {
            console.error(error);
            result.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs' });
        }
    }

    async getUtilisateursById(request, result) {
        try {
            const utilisateurs = await utilisateursService.getUtilisateursById(request.params.id);
            if (!utilisateurs) {
                return result.status(404).json({ error: 'Utilisateur non trouvé' });
            }
            result.status(200).json(utilisateurs);
        } catch (error) {
            console.error(error);
            result.status(500).json({ error: 'Erreur lors de la récupération de l\'utilisateur' });
        }
    }

    async addUtilisateurs(request, result) {
        try {
            const utilisateurs = await utilisateursService.addUtilisateurs(request.body);
            result.status(201).json(utilisateurs);
        } catch (error) {
            console.error(error);
            result.status(500).json({ error: 'Erreur lors de l\'ajout de l\'utilisateur' });
        }
    }

    async deleteUtilisateurs(request, result) {
        try {
            const utilisateurs = await utilisateursService.deleteUtilisateurs(request.params.id);
            if (utilisateurs === 0) {
                return result.status(404).json({ error: 'Utilisateur non trouvé' });
            }
            result.status(204).send();
        } catch (error) {
            console.error(error);
            result.status(500).json({ error: 'Erreur lors de la suppression de l\'utilisateur' });
        }
    }

    async updateUtilisateurs(request, result) {
        try {
            const utilisateurs = await utilisateursService.updateUtilisateurs(request.params.id, request.body);
            if (utilisateurs === 0) {
                return result.status(404).json({ error: 'Utilisateur non trouvé' });
            }
            result.status(200).json({ message : "Utilisateur mis à jour avec succès"});
        } catch (error) {
            console.error(error);
            result.status(500).json({ error: 'Erreur lors de la mise à jour de l\'utilisateur' });
        }
    }

    async login (request, result){
        try {
            const {email, mot_de_passe} = request.body;
            console.log(email, mot_de_passe)
            const utilisateur = await utilisateursService.login(email, mot_de_passe);
            if (!utilisateur) {
                return result.status(401).json({ error: 'Identifiants incorrects' });
            }
            result.status(200).json(utilisateur);
        } catch (error) {
            console.error(error);
            result.status(500).json({ error: 'Erreur lors de la connexion' });
        }
    }
}

module.exports = new utilisateursController();