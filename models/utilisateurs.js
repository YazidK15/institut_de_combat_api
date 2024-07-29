const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/Sequelize');
const abonnements = require('./abonnements');

class utilisateurs extends Model {

}

utilisateurs.init ({
    id_utilisateur : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    nom : {
        type : DataTypes.STRING(100),
        allowNull : false
    },
    prenom : {
        type : DataTypes.STRING(100),
        allowNull : false
    },
    email : {
        type : DataTypes.STRING(255),
        allowNull : false,
        unique : true
    },
    telephone : {
        type : DataTypes.STRING(20),
        allowNull : false,
        unique : true
    },
    mot_de_passe : {
        type : DataTypes.STRING(100),
        allowNull : false
    },
    role : {
        type : DataTypes.STRING(50),
        allowNull : false
    },
    date_creation : {
        type : DataTypes.DATE,
        allowNull : false
    },
    date_modification : {
        type : DataTypes.DATE,
        allowNull : false
    },
    id_abonnement : {
        type : DataTypes.INTEGER,
        references: {
            model: 'abonnements',
            key: 'id_abonnement'
        }
    }
},{
        sequelize,
        modelName: 'utilisateurs',
        tableName: 'utilisateurs',
        timestamps: false,
        paranoid: true,        
        freezeTableName: true,
        charset: 'utf8',
})

// Permet d'aller chercher les utilisateurs dans abonnementsService
abonnements.hasMany (utilisateurs, {as : 'utilisateurs', foreignKey: 'id_abonnement'});
// Récuperer l'abonnement relié à l'utilisateur
utilisateurs.belongsTo (abonnements, {as : 'abonnement', foreignKey: 'id_abonnement'});

module.exports = utilisateurs;