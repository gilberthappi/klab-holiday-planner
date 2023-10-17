/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/order */
/* eslint-disable no-unused-expressions */
import { TOUR } from '../../models';
import cloudinary from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

cloudinary.v2;

cloudinary.config({
  cloud_name: process.env.CLOUDNAME,
  api_key: process.env.APIKEY,
  api_secret: process.env.APISECRET,
});

export const createTour = async (req, res) => {
  try {
    const letter = await TOUR.create(req.body);
    res.status(200).json(letter);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: error.message,
    });
  }
};

export const createTours = async (req, res) => {
  try {
    const data = await TOUR.insertMany(req.body);
    res.status(200).json({ message: 'Add successful', data });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

export const createTourI = async (req, res) => {
  //   console.log(req.body);

  const image = await cloudinary.uploader.upload(req.file.path);
  //   console.log(image);

  const tourData = await TOUR.create({
    title: req.body.title,
    body: req.body.body,
    image: image.secure_url,
  });

  res.status(201).json({
    message: 'tour created',
    data: {
      tourData,
    },
  });
};