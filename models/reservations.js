const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/Sequelize');

class reservations extends Model {

}

reservations.init ({
    id_reservation : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    date_reservation : {
        type : DataTypes.DATE,
        allowNull : false
    },
    statut : {
        type : DataTypes.STRING(50),
        allowNull : false
    },
    id_utilisateur : {
        type : DataTypes.INTEGER,
        references: {
            model: 'utilisateurs',
            key: 'id_utilisateur'
        }
    },
    id_seance : {
        type : DataTypes.INTEGER,
        references: {
            model: 'seances',
            key: 'id_seance'
        }
    },
},{
    sequelize,
        modelName: 'reservations',
        tableName: 'reservations',
        timestamps: false,
        paranoid: true,        
        freezeTableName: true,
        charset: 'utf8',
})



module.exports = reservations;