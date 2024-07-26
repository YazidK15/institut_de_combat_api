const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/Sequelize');

class seances extends Model {

}

seances.init ({
    id_seance : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    nom : {
        type : DataTypes.STRING(100),
        allowNull : false
    },
    date_debut : {
        type : DataTypes.DATE,
        allowNull : false
    },
    heure_debut : {
        type : DataTypes.TIME,
        allowNull : false
    },
    heure_fin : {
        type : DataTypes.TIME,
        allowNull : false
    },
    place_dispo : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    date_creation : {
        type : DataTypes.DATE,
        allowNull : false
    }
},{
    sequelize,
        modelName: 'seances',
        tableName: 'seances',
        timestamps: false,
        paranoid: true,        
        freezeTableName: true,
        charset: 'utf8',
})

module.exports = seances;