import { TOUR } from '../../models';

export const updateTour = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await TOUR.findByIdAndUpdate(id, req.body);
    if (!data) {
      return res.status(404).json({
        message: `can not find any product with ID ${id}`,
      });
    }
    const updatedData = await TOUR.findById(id);
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export const updateTourElement = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await TOUR.findByIdAndUpdate(id, req.body);
    if (!data) {
      return res.status(404).json({
        message: `can not find any product with ID ${id}`,
      });
    }
    const updatedData = await TOUR.findById(id);
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};