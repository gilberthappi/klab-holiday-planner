import { TOUR } from '../../models';
import uploadCloudinary from '../../utils/cloudinary';


export const createTours = async (req, res) => {
  try {
    const data = await TOUR.insertMany(req.body);
    res.status(200).json({ message: 'Add successful', data });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};
