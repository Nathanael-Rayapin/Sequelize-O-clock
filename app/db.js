const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.PG_URL, {
  define : { // Options par défaut pour tous les modèles
    underscored: true // created_at, updated_at au lieu de createdAt, updatedAt
  }
}); // Example for postgres

module.exports = sequelize;