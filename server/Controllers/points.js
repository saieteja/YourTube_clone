import users from "../Models/Auth.js";

export const addtopoints =async(req,res)=>{
    const { userId, pointsToAdd } = req.body; 

    try {
        const user = await users.findById(userId); 
    
        if (!user) {
          return res.status(404).json({ message: "User not found." });
        }
        user.points += pointsToAdd;
        await user.save();

        res.status(200).json({ message: "Points updated successfully.", points: user.points });
    } catch (error) {
      res.status(500).json({ message: "Error updating points." });
    }

}

export const getpoints = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await users.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json({ points: user.points }); 
  } catch (error) {
    res.status(500).json({ message: "Error fetching user points." });
  }
};
