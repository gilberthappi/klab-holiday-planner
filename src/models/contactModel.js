import mongoose from 'mongoose';

const contactSchema = mongoose.Schema({
    fullName: String,
    email: String,
    phoneNumber: String,
    service : String,
    message: String,
    adminResponse: String,
});

export const CONTACT = mongoose.model('Contact', contactSchema);