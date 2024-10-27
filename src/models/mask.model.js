const { DataTypes } = require('sequelize');
const { sequelize } = require('../services/db.service');

const Mask = sequelize.define('Mask', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dueño: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false
});

module.exports = Mask;
