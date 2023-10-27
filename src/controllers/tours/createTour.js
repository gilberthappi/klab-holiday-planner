import { TOUR } from '../../models';
import {v2 as cloudinary} from 'cloudinary';

import dotenv from 'dotenv';

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDNAME,
  api_key: process.env.APIKEY,
  api_secret: process.env.APISECRET,
});

export const createTour = async (req, res) => {
  try {
    // let dropImage= "";
    if (req.files) {
      let imagesArray = [];
      let dropImages = (await cloudinary.uploader.upload(req.files['backdropImage'][0].path)).secure_url;

      if(req.files["Gallery"].length > 1){
        for (let index = 0; index < req.files.Gallery.length; index++) {
          imagesArray.push((await cloudinary.uploader.upload(req.files.Gallery[index].path)).secure_url);
        }
      }
      let add = await TOUR.create({...req.body, Gallery: imagesArray, backdropImage: dropImages});
      if (!add) {
        return res.status(404).json({
          message: `failed to add tour `,
        });
       
      } 
      res.status(201).json({
          message: "tour created successfully",
          data: add,
        })
    }

  } catch (error) {
    console.log('error', error);
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
