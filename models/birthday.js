module.exports = function(sequelize, DataTypes) {
    var Birthday = sequelize.define("birthday", {

      name:{
          type: DataTypes.STRING,
          allowNull: false,
      },
      date:{
          type: DataTypes.DATE,
          allowNull: false,
          validate: {
            len: [1]
          }
      }

    });
  
    return Birthday;
  };