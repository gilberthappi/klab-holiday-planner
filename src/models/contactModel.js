import mongoose from 'mongoose';

const contactSchema = mongoose.Schema({
    email: String,
    message: String,
});

export const CONTACT = mongoose.model('Contact', contactSchema);