import { TOUR } from '../../models';

export const updateTour = async (req, res) => {
  try {
    const { fieldName, value } = req.query;
    let query = {};
    if (fieldName && value) {
      query[fieldName] = value;
    }
    const data = await TOUR.findOneAndUpdate(query);
    if (!data) {
      return res.status(404).json({
        message: `can not find any product `,
      });
    }
    const updatedData = await TOUR.findOne(query);
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export const updateTourElement = async (req, res) => {
  try {
    const { fieldName, value } = req.query;
    let query = {};
    if (fieldName && value) {
      query[fieldName] = value;
    }
    const data = await TOUR.findOneAndUpdate(query);
    if (!data) {
      return res.status(404).json({
        message: `can not find any product `,
      });
    }
    const updatedData = await TOUR.findOne(query);
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};