const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/Sequelize');
const abonnements = require('./abonnements');
const bcrypt = require('bcrypt');

class utilisateurs extends Model {
    async validatePassword(mot_de_passe){
        return await bcrypt.compare(mot_de_passe, this.mot_de_passe);
    }
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
        type : DataTypes.TEXT,
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
        hooks :{
            beforeCreate : async (utilisateurs) => {
                utilisateurs.mot_de_passe = await bcrypt.hash(utilisateurs.mot_de_passe, 10)
            },
            beforeUpdate : async (utilisateurs) => {
                if(utilisateurs.changed('mot_de_passe')){
                    utilisateurs.mot_de_passe = await bcrypt.hash(utilisateurs.mot_de_passe, 10)
                }
            }
        }
})

// Permet d'aller chercher les utilisateurs dans abonnementsService
abonnements.hasMany (utilisateurs, {as : 'utilisateurs', foreignKey: 'id_abonnement'});
// Récuperer l'abonnement relié à l'utilisateur
utilisateurs.belongsTo (abonnements, {as : 'abonnement', foreignKey: 'id_abonnement'});

module.exports = utilisateurs;