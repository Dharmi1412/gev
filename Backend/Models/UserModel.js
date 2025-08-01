import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  name: String,
  userName: String,
  number: String,
  city: String,
  email: { type: String, unique: true },
  password: String,
});
const User = mongoose.model("User", UserSchema);
export default User;
