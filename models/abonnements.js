const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/Sequelize');

class abonnements extends Model {

}

abonnements.init ({
    id_abonnement : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    type : {
        type : DataTypes.STRING(255),
        allowNull : false
    },
    date_debut : {
        type : DataTypes.DATE,
        allowNull : false
    },
    date_fin : {
        type : DataTypes.DATE,
        allowNull : false
    },
    statut : {
        type : DataTypes.STRING(50),
        allowNull : false
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

module.exports = abonnements;