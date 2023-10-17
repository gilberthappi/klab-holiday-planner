import { TOUR } from '../../models';

export const getTours = async (req, res) => {
  try {
    const data = await TOUR.find({});
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export const getTour = async (req, res) => {
  try {
    const data = await TOUR.findById(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};