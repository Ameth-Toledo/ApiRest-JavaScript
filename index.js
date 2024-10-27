const express = require('express');
const bodyParser = require('body-parser');
const { connectDB } = require('./src/services/db.service.js');
const maskRoutes = require('./src/routes/mask.route.js');
const cors = require('cors')

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', maskRoutes);

connectDB().then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  }).catch(error => {
    console.error('Error al conectar la base de datos:', error);
  });