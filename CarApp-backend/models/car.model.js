const mongoose = require('mongoose');


const CarCharacteristicSchema = new mongoose.Schema({
  engine: String,
  horsepower: Number,
  topSpeed: Number,
  color: String,
  numberOfDoors: Number,
  specialNotes: String
}, { _id: false }); 


const CarSchema = new mongoose.Schema({
  make: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true,
    enum: ['Sport', 'Classic', 'Normal']
  },
  type2: {
    type: String,
    required: true,
    enum: ['SUV', 'Sedan', 'Hatchback', 'Compact', 'Coupe', 'Convertible']
  },
  
  images: {
    type: [String],
    default: []
  },
  characteristics: {
    type: CarCharacteristicSchema,
    default: {}
  }
}, {
  timestamps: true 
});

//  compatibilité _id ll id
CarSchema.method('toJSON', function() {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

const Car = mongoose.model('Car', CarSchema);

module.exports = Car;