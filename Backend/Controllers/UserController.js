import UserModel from "../Models/UserModel.js";

// add user
const addUser = async (req, res) => {
  try {
    const userData = req.body;
    console.log(userData);

    const user = new UserModel(userData);
    await user.save();
    res.json({ success: true, message: "User created", user });
  } catch (error) {
    console.error("Error creating user ", error);
    res.json({ success: false, message: "Error creating user " });
  }
};

// list user

// updat user

// delete user

export { addUser };
