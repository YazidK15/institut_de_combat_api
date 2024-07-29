const utilisateurs = require('../models/utilisateurs');

class utilisateursService {

    async getAllUtilisateurs() {
        return await utilisateurs.findAll();
    }

    async getUtilisateursById(utilisateurID) {
        return await utilisateurs.findByPk(utilisateurID, {include  : 'abonnement'});
    }

    async addUtilisateurs(utilisateur) {
        return await utilisateurs.create(utilisateur);
    }

    async deleteUtilisateurs(id) {
        return await utilisateurs.destroy({ where: { id_utilisateur: id } });
    }

    async updateUtilisateurs(id, utilisateur) {
        return await utilisateurs.update(utilisateur, { where: { id_utilisateur: id }, individualHooks: true});
    }

    async login(email, mot_de_passe){
        const utilisateur = await utilisateurs.findOne({ where: { email : email } });
        if (!utilisateur || !await utilisateur.validatePassword(mot_de_passe)){
            throw new Error('Email ou mot de passe inccorect');
        }
        return utilisateur;
    }
}


module.exports = new utilisateursService();