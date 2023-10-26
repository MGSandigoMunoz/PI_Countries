const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
 
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
        unique:true     
    },
    difficulty:{
        type:DataTypes.ENUM("1","2","3","4","5"),
        allowNull: false,
    },
    duration:{
        type:DataTypes.INTEGER,
        validate:{
            min:1,
            max:24
        }
    },
    season:{
        type:DataTypes.ENUM("Summer","Spring","Fall","Winter"),
        allowNull: false,
    }
},{timestamps:false})
}