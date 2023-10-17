import { TOUR } from '../../models';

export const deleteTour = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await TOUR.findByIdAndDelete(id);
    if (!data) {
      return res.status(404).json({ message: `cannot find any element with ID ${id}` });
    }
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export const deleteTours = async (req, res) => {
  try {
    const data = await TOUR.deleteMany({ title: req.params.title });

    // Check if any documents were deleted
    if (data.deletedCount === 0) {
      return res.status(404).json({ message: 'No matching documents found for deletion' });
    }

    res.status(200).json({ message: 'Delete successful', deletedCount: data.deletedCount });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};
