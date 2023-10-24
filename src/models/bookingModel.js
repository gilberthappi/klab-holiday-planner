import mongoose from 'mongoose';

const bookingSchema = mongoose.Schema({
    tourID: String,
    UserID: String,
    isPayed: Boolean, // Assuming this should be a boolean
    paymentMethod: String,
});

export const Booking = mongoose.model('Booking', bookingSchema);
