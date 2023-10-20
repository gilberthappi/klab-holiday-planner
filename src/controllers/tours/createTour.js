import { TOUR } from '../../models';
import uploadCloudinary from '../../utils/cloudinary';
import { v2 as cloudinary } from 'cloudinary';


export const createTour = async (req, res) => {
  try {
    // let dropImage= "";
    if (req.file) {
      const image = await uploadCloudinary(req.file);
        req.body.backdropImage = image;
        const newTour = req.body;
        await TOUR.create(newTour);
        res.status(200).json(newTour);
    }

 
    // res.status(200).json({
    //   message: 'Tour created successfully',
    // });
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