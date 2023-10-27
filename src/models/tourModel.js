import mongoose from 'mongoose';

const tourSchema = new mongoose.Schema({
  destination: String,
  backdropImage: {type: String,
  default:"https://res.cloudinary.com/dleiqpvue/image/upload/v1698390774/fbwusklrscczk6697opy.jpg"
  },
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
  Gallery: {type: Array,
  default:["https://res.cloudinary.com/dleiqpvue/image/upload/v1698390774/fbwusklrscczk6697opy.jpg","https://res.cloudinary.com/dleiqpvue/image/upload/v1698390774/fbwusklrscczk6697opy.jpg"]
  },

});

export const TOUR = mongoose.model('tour', tourSchema);