const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('Country', {
    id:{
      type: DataTypes.STRING(3),
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        isUrl:true,
      }
    },
    continents:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    capital:{
      type:DataTypes.STRING,
      allowNull:true,
    },
    subregion:{
      type:DataTypes.STRING,
      allowNull:true,
    },
    area:{
      type:DataTypes.DECIMAL,
      allowNull:true,
    },
    population:{
      type:DataTypes.INTEGER,
      allowNull:true,
    }
    
  },{timestamps:false});
};


