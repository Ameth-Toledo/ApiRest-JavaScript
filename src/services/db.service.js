const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('MaskDB', 'root', 'Ameth2005', {
  host: 'localhost',
  dialect: 'mysql'
});

async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos exitosa.');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
}

module.exports = { sequelize, connectDB };
