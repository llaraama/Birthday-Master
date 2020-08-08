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
      // change variable since it is a key word
      // play with data type date
      // change to datatypes.date
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