import { TOUR } from '../../models';

export const findTour = async (req, res) => {
  try {
    const { fieldName, value } = req.query;
    let query = {};
    if (fieldName && value) {
      query[fieldName] = value;
    }
    const data = await TOUR.findOne(query);
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
    const { fieldName, value } = req.query;
    let query = {};
    if (fieldName && value) {
      query[fieldName] = value;
    }
    const data = await TOUR.findMany(query);
    if (!data) {
      return res.status(404).json({ message: 'not found' });
    }
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};