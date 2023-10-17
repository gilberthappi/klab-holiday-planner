import mongoose from 'mongoose';

const tourSchema = new mongoose.Schema({
  destination: String,
  backdropImage: String,
  title: String,
  Description: String,
  Duration: String,
  Group_size: String,
  Price: Number,
  Discount: Number,
  Tour_type: String,
  Departure: String,
  Seats: Number,
  fromMonth: String,
  toMonth: String,
  departureTime: String,
  Returntime: String,
  image: String,
  Gallery: String,
  Price_included: String,
  Price_not_included: String,

});

export const TOUR = mongoose.model('tour', tourSchema);