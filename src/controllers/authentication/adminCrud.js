import { USER } from '../../models';

//get all users in the database
export const All = async(req,res)=>{
  try {
    let userData = await USER.find();
    res.status(200).json(userData); 

  } catch (error) {
    console.log("error",error);
    res.status(409).json({
      message:"internal server error"
    })
  }
}

//find one user in the database by email
export const getUserByEmail = async(req,res)=>{
  const email = req.params.email;
  try {
    let userData = await USER.findOne({email: email});
    res.status(200).json(userData); 

} catch (error) {
    console.log("error",error);
    res.status(409).json({
      message:"internal server error"
    })
  }
}

//update users by email
export const updateByEmail = async (req,res) => {
  try {
    const email = req.params.email;
    const updatedFields = req.body;      
  
    const updatedUser = await USER.findOneAndUpdate(
      { email: email },
      { $set: updatedFields },     // updated form 
      { new: true }              // Get the updated user data after update
    );

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    return res.status(200).json(updatedUser);
    
  } catch (error) {
    console.error("Error updating user:", error.message);
    throw error;
  }
};

//delete users
export const deleteUser = async (req,res)=>{
  const email = req.params.email;
  try {
    const deletedUser = USER.deleteOne({email:email})

    res.status(200).json({message:`user with email:${email} successfull deleted`});

    
  } catch (error) {
    console.log("error",error);
    res.status(409).json ("Internal server errior")
  }
}
