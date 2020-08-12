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
          type: DataTypes.DATE,
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
    Birthday.associate = function (models) {
   
      Birthday.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        });
  };
  
    return Birthday;
  };