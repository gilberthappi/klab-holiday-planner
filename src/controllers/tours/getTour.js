import { TOUR } from '../../models';

export const getTours = async (req, res) => {
  try {

    const { fieldName, value } = req.query;
    let query = {};
    if (fieldName && value) {
      query[fieldName] = value;
    }
    const data = await TOUR.find(query);
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};
