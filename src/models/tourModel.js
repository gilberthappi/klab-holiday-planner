import mongoose from 'mongoose';

const tourSchema = new mongoose.Schema({
  destination: String,
  backdropImage: {type: String, required: true},
  title: {type: String, required: true},
  Description: String,
  Duration: String,
  Group_size: String,
  Price: String,
  Discount: String,
  Tour_type: String,
  Departure: String,
  Seats: Number,
  fromMonth: String,
  toMonth: String,
  departureTime: String,
  ReturnTime: String,
  Gallery: {type: Array, required: true},

});

export const TOUR = mongoose.model('tour', tourSchema);