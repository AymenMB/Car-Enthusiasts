// CarApp-backend/routes/car.routes.js
const express = require('express');
const router = express.Router();
const Car = require('../models/car.model'); 
const mongoose = require('mongoose');


router.get('/debug/raw', async (req, res) => {
  try {
    const cars = await Car.find().lean();
    res.json({ message: 'Raw MongoDB data', data: cars });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET all cars
router.get('/', async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars.map(car => car.toJSON())); 
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new car
router.post('/', async (req, res) => {
  const { make, model, year, type, type2, images, characteristics } = req.body;

  // Validation simple (vous pouvez utiliser des bibliothèques comme Joi pour une validation plus poussée)
  if (!make || !model || !year || !type || !type2) {
    return res.status(400).json({ message: 'Make, model, year, type, and type2 are required.' });
  }

  const car = new Car({
    make,
    model,
    year,
    type,
    type2,
    images: images || [], 
    characteristics,
  });

  try {
    const newCar = await car.save();
    res.status(201).json(newCar.toJSON());
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET car by ID
router.get('/:id', getCar, (req, res) => {
  res.json(res.car.toJSON());
});

// PUT car
router.put('/:id', getCar, async (req, res) => {
  const { make, model, year, type, type2, images, characteristics } = req.body;

  if (make != null) res.car.make = make;
  if (model != null) res.car.model = model;
  if (year != null) res.car.year = year;
  if (type != null) res.car.type = type;
  if (type2 != null) res.car.type2 = type2;
  if (images != null) res.car.images = images; 
  if (characteristics != null) res.car.characteristics = { ...res.car.characteristics, ...characteristics };


  try {
    const updatedCar = await res.car.save();
    res.json(updatedCar.toJSON());
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a car
router.delete('/:id', getCar, async (req, res) => {
  try {
    await res.car.deleteOne();
    res.json({ message: 'Deleted Car' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


async function getCar(req, res, next) {
  let car;
  try {
  
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(404).json({ message: 'Invalid Car ID format' });
    }
    car = await Car.findById(req.params.id);
    if (car == null) {
      return res.status(404).json({ message: 'Cannot find car' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.car = car;
  next();
}

module.exports = router;