import { TOUR } from '../../models';

export const findTour = async (req, res) => {
  try {
    const data = await TOUR.findOne({ title: req.params.title });
    if (!data) {
      return res.status(404).json({ message: 'not found' });
    }
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export const findTours = async (req, res) => {
  try {
    const data = await TOUR.findMany({ title: req.params.title });
    if (!data) {
      return res.status(404).json({ message: 'not found' });
    }
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};