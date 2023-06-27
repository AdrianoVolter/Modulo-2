const { connection } = require('../database/connection');
const { DataTypes, Model } = require('sequelize');

class Category extends Model {
    
}

Category.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    }
  },
  {
    sequelize: connection,
    modelName: 'categories',
    timestamps: false
  }
);

module.exports = Category;



// const {connection} = require('../database/connection');
// const {STRING,DATE} = require('sequelize');


// const Category = connection.define('categories', {
//     name: STRING,
//     created_at: DATE,
//     updated_at: DATE 
//    }
// );

// module.exports = Category;
    
