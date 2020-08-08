module.exports = function(sequelize, DataTypes) {
    var Birthday = sequelize.define("birthday", {

      firstname:{
          type: DataTypes.STRING,
          allowNull: false,
      },
      lastname:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      
      date:{
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
          }
      },
      gift:{
        type: DataTypes.STRING,
        allowNull: true,
    }

    });
  
    return Birthday;
  };