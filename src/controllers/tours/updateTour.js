import { TOUR } from '../../models';

export const updateTour = async (req, res) => {
  try {
    // Extract the query parameters from the request body or query string.
    const { fieldName, value, updateData } = req.body;
    
    // Define a query based on fieldName and value.
    let query = {};
    if (fieldName && value) {
      query[fieldName] = value;
    }
    
    // Use the `findOneAndUpdate` method to update the matching document.
    const updatedTour = await TOUR.findOneAndUpdate(query, updateData, {
      new: true, // Return the updated document
    });

    if (!updatedTour) {
      return res.status(404).json({
        message: 'Tour not found',
      });
    }

    res.status(200).json(updatedTour);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};
