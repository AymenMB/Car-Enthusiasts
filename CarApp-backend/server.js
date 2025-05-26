// CarApp-backend/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db.config');

const app = express();

// Connect to Database
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Define Routes for Cars
app.use('/api/cars', require('./routes/car.routes')); // Utiliser les routes pour les voitures

const PORT = process.env.PORT || 5001; // Un port différent pour le backend
app.listen(PORT, () => console.log(`CarApp Backend Server started on port ${PORT}`));