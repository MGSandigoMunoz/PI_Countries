const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Activity', {
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        allowNull: false,
        unique:true
    },
    activityName:{
        type:DataTypes.STRING,
        allowNull: false,
        
    },
    difficulty:{
        type:DataTypes.INTEGER,
        allowNull: false,
        validate:{
            min:1
        }
    },
    duration:{
        type:DataTypes.INTEGER,
        validate:{
            min:1
        }
    },
    season:{
        type:DataTypes.STRING,//!CAMBIAR A ENUM
        allowNull: false,
    }
},{timestamps:false})
}